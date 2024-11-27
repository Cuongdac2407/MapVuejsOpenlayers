<template>
  <TheHeader />

  <div class="container-content map-content">
    <div class="row-left" style="border-top: 1px solid">
      <div class="col-sm-3 map-content-left">
        <div class="fixed-header">
          <button
            class="btn-menu-list"
            :class="{ active: selectedContent === '1' }"
            @click="selectContent('1')"
          >
            Bản vẽ
          </button>
          <button
            class="btn-menu-list"
            :class="{ active: selectedContent === '2' }"
            @click="selectContent('2')"
          >
            Thuyết Minh
          </button>
          <button
            class="btn-menu-list"
            :class="{ active: selectedContent === '3' }"
            @click="selectContent('3')"
          >
            Văn Bản
          </button>
        </div>
        <component :is="currentComponent" />
        <div class="feature-details" v-if="selectedFeature">
          <div class="fixed-header">
            <div class="row-comment-header header-features-sidebar">
              <div class="col-1 btn-features-left">
                <button
                  class="features-sidebar-left"
                  @click="closeDetailSidebar"
                >
                  <i class="fa-solid fa-arrow-left-long"></i>
                </button>
              </div>
              <div class="col-10 text-features-sidebar">
                <h5>Thông Tin Đối Tượng</h5>
              </div>
              <div class="col-1 features-button-right">
                <button
                  class="features-sidebar-right"
                  @click="closeDetailSidebar"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div class="features-sidebar">
            <table>
              <tr
                v-for="(item, index) in SubItemSidebarsLeft"
                :key="index"
                class="wrapper-tr"
              >
                <td class="col-5 td-left">{{ item.col_left }}</td>
                <td class="col-7 td-right">
                  {{ SubItemSidebarsRight[index]?.col_right || "" }}
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="comment-sidebar" v-if="showCommentSidebar">
          <div class="fixed-header">
            <div class="row-comment-header header-comment-sidebar">
              <div class="col-1 btn-comment-sidebar-left">
                <button
                  class="comment-sidebar-left"
                  @click="closeDetailSidebarComment"
                >
                  <i class="fa-solid fa-arrow-left-long"></i>
                </button>
              </div>
              <div class="col-10 text-comment-sidebar">
                <h5>Thông Tin Đối Tượng</h5>
              </div>
              <div class="col-1 comment-button-right">
                <button
                  class="comment-sidebar-right"
                  @click="closeDetailSidebarComment"
                >
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
            </div>
          </div>
          <hr />
          <div
            v-for="(item, index) in CommentSidebarsLeft"
            :key="index"
            class="comment-node"
          >
            <div class="col-4 comment-node-left">
              <i :class="item.iconLeft"></i>
            </div>
            <div class="col-8 comment-node-right">
              <p class="comment-text">
                {{ CommentSidebarsRight[index]?.itemRight || "" }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-8 map-content-right">
        <div class="sidebars-menu-control">
          <button class="btn-sidabars-menu-control" @click="toggleControlMenu">
            <i class="fa-solid fa-bars"></i>
          </button>
          <div v-if="!showControlMenu" class="layer-control-map">
            <button
              class="layer-control-select-map"
              @click="toggleFeatureVisibility"
            >
              <i class="fa-solid fa-info"></i>
            </button>
            <button class="layer-control-texterea" @click="toggleShowComment">
              <i class="fa-regular fa-clipboard"></i>
            </button>
            <button class="layer-control-zoom-in" @click="zoomIn">
              <i class="fa-solid fa-plus"></i>
            </button>
            <button class="layer-control-zoom-out" @click="zoomOut">
              <i class="fa-solid fa-minus"></i>
            </button>
          </div>
        </div>
        <!-- Layer menu -->
        <div class="layer-menu">
          <button class="btn-icon-tile-layer" @click="toggleLayerMenu">
            <i class="fa-solid fa-layer-group"></i>
          </button>
          <div v-if="showLayerMenu" class="layer-options">
            <button
              class="btn-menu-list-layers-osm"
              @click="switchLayer('osm')"
            >
              <p class="text-layers">Địa Hình</p>
            </button>
            <button
              class="btn-menu-list-layers-vetinh"
              @click="switchLayer('satellite')"
            >
              <p class="text-layers">Vệ tinh</p>
            </button>
          </div>
        </div>

        <div id="map" class="map"></div>
        <LayerQhc v-if="showLayer" />

        <!-- Sidebar for feature details -->
      </div>
    </div>
  </div>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import TheHeader from "../../../components/TheHeader.vue";
import BanVe from "./BanVe.vue";
import ThuyetMinh from "./ThuyetMinh.vue";
import VanBan from "./VanBan.vue";
import LayerQhc from "./LayerQhc.vue";
import "../../../../assets/css/map.css";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import { OSM, XYZ } from "ol/source";
import { fromLonLat } from "ol/proj";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Style, Stroke, Fill } from "ol/style";
import { GeoJSON } from "ol/format";
import { Select } from "ol/interaction";

export default {
  components: {
    TheHeader,
    BanVe,
    ThuyetMinh,
    VanBan,
    LayerQhc,
  },
  setup() {
    const selectedContent = ref("1");
    const showLayer = ref(false);
    const showLayerMenu = ref(false);
    const showControlMenu = ref(false);
    const isFeatureLayerVisible = ref(true);
    const selectedFeature = ref(null);
    const showCommentSidebar = ref(false);
    let mapInstance = null;
    let currentLayer = null;
    let vectorLayer = null;
    let vectorSource = null;
    let view;
    let selectInteraction = null;
    const SubItemSidebarsLeft = ref([
      { col_left: "Mã đối tượng :" },
      { col_left: "Tỷ lệ:" },
      { col_left: "Loại quy hoạch:" },
      { col_left: "Tên bản vẽ" },
      { col_left: "Căn cứ pháp lý :" },
      { col_left: "Địa điểm quy hoạch :" },
      { col_left: "Diện tích khu quy hoach" },
      { col_left: "Dân số khu quy hoạch :" },
      { col_left: "Nhu cầu dùng nước thải khu quy hoạch:" },
      { col_left: "Nhu cầu thoát nước thải khu quy hoạch:" },
      { col_left: "Số lượng thuê bao:" },
      { col_left: "Số ngày quy định phê duyệt nhiệm vụ:" },
      { col_left: "Số quyết định phê duyệt quy hoạch:" },
      { col_left: "Ngày quyết định phê duyệt quy hoạch:" },
      { col_left: "Đồ án liên quan:" },
      { col_left: "Đơn vị lập quy hoạch:" },
    ]);

    const SubItemSidebarsRight = ref([
      { col_right: "H55 " },
      { col_right: "1: 50 000 " },
      { col_right: "Quy hoạch chung" },
      { col_right: "Đồ án quy hoạch chung Tp Huế" },
      { col_right: "5284AAC6/MNB657" },
      { col_right: "Tp Huế" },
      { col_right: "12 352 km2" },
      { col_right: "1 250 354" },
      { col_right: "có" },
      { col_right: "có" },
      { col_right: "1 050 052" },
      { col_right: "145 ngày" },
      { col_right: "67GVAB00" },
      { col_right: "12/04/2023" },
      { col_right: " " },
      { col_right: " " },
    ]);
    const CommentSidebarsLeft = ref([
      { iconLeft: "fa-solid fa-plane-up" },
      { iconLeft: "fa-solid fa-square-plus" },
      { iconLeft: "fa-brands fa-fort-awesome" },
      { iconLeft: "fa-solid fa-utensils" },
      { iconLeft: "fa-solid fa-person-praying" },
      { iconLeft: "fa-solid fa-bridge" },
      { iconLeft: "fa-solid fa-gas-pump" },
      { iconLeft: "fa-solid fa-bus" },
      { iconLeft: "fa-solid fa-school" },
      { iconLeft: "fa-solid fa-sailboat" },
      { iconLeft: "fa-solid fa-charging-station" },
    ]);
    const CommentSidebarsRight = ref([
      { itemRight: "Sân Bay" },
      { itemRight: "Bệnh viện" },
      { itemRight: "Công viên" },
      { itemRight: "Nhà Hàng" },
      { itemRight: "Trường học" },
      { itemRight: "Cầu đường" },
      { itemRight: "Trạm xăng" },
      { itemRight: "Trạm xe bus" },
      { itemRight: "Trường Đại học" },
      { itemRight: "Cảng biển" },
      { itemRight: "Trạm xạc xe điện" },
    ]);
    const zoomIn = () => {
      const currentZoom = view.getZoom();
      view.setZoom(currentZoom + 1);
    };

    const zoomOut = () => {
      const currentZoom = view.getZoom();
      view.setZoom(currentZoom - 1);
    };

    const selectContent = (content) => {
      selectedContent.value = content;
    };

    const currentComponent = computed(() => {
      switch (selectedContent.value) {
        case "1":
          return "BanVe";
        case "2":
          return "ThuyetMinh";
        case "3":
          return "VanBan";
        default:
          return null;
      }
    });

    const toggleLayerMenu = () => {
      showLayerMenu.value = !showLayerMenu.value;
    };
    const toggleShowComment = () => {
      showCommentSidebar.value = !showCommentSidebar.value;
    };
    const toggleControlMenu = () => {
      showControlMenu.value = !showControlMenu.value;
    };
    const closeDetailSidebar = () => {
      selectedFeature.value = false;
    };
    const closeDetailSidebarComment = () => {
      showCommentSidebar.value = false;
    };
    const switchLayer = (layerType) => {
      if (!mapInstance) return;

      mapInstance.removeLayer(currentLayer);
      if (layerType === "osm") {
        currentLayer = new TileLayer({
          source: new OSM(),
        });
      } else if (layerType === "satellite") {
        currentLayer = new TileLayer({
          source: new XYZ({
            url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
          }),
        });
      }

      mapInstance.addLayer(currentLayer);
    };

    const toggleFeatureVisibility = () => {
      if (isFeatureLayerVisible.value) {
        mapInstance.removeLayer(vectorLayer);
      } else {
        mapInstance.addLayer(vectorLayer);
      }
      isFeatureLayerVisible.value = !isFeatureLayerVisible.value;
    };

    const initFeatureInteraction = () => {
      selectInteraction = new Select({ layers: [vectorLayer] });
      selectInteraction.on("select", (event) => {
        const selected = event.selected[0];
        if (selected) {
          selectedFeature.value = selected;
          view.fit(selected.getGeometry().getExtent(), {
            padding: [30, 30, 30, 30],
            duration: 500, // Add zoom animation
          });
        } else {
          selectedFeature.value = null;
        }
      });
      mapInstance.addInteraction(selectInteraction);
    };

    onMounted(() => {
      const hueCoordinates = fromLonLat([107.5806, 16.4675]);

      currentLayer = new TileLayer({
        source: new OSM(),
      });

      vectorSource = new VectorSource();
      vectorLayer = new VectorLayer({
        source: vectorSource,
        style: new Style({
          stroke: new Stroke({
            color: "blue",
            width: 2,
          }),
          fill: new Fill({
            color: "rgba(0, 0, 255, 0.1)",
          }),
        }),
      });

      const geojsonData = `{
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": { "name": "Thành phố Huế", "description": "Mô tả về thành phố Huế" },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [107.56, 16.462],
                  [107.59, 16.462],
                  [107.59, 16.48],
                  [107.56, 16.48],
                  [107.56, 16.462]
                ]
              ]
            }
          },
          {
            "type": "Feature",
            "properties": { "name": "Hương Thủy", "description": "Mô tả về Hương Thủy" },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [107.534, 16.44],
                  [107.57, 16.44],
                  [107.57, 16.46],
                  [107.534, 16.46],
                  [107.534, 16.44]
                ]
              ]
            }
          },
           {
            "type": "Feature",
            "properties": { "name": "Phuoc Vinh", "description": "Mô tả về Phuoc Vinh" },
            "geometry": {
              "type": "Polygon",
              "coordinates": [
                [
                  [107.575, 16.44],
                  [107.617, 16.44],
                  [107.617, 16.46],
                  [107.575, 16.46],
                  [107.575, 16.44]
                ]
              ]
            }
          }
        ]
      }`;

      const format = new GeoJSON();
      vectorSource.addFeatures(
        format.readFeatures(geojsonData, { featureProjection: "EPSG:3857" })
      );

      view = new View({
        center: hueCoordinates,
        zoom: 12,
      });

      mapInstance = new Map({
        target: "map",
        layers: [currentLayer, vectorLayer],
        view: view,
        controls: [],
      });

      initFeatureInteraction();
    });

    return {
      selectedContent,
      selectContent,
      currentComponent,
      showLayer,
      toggleLayerMenu,
      showLayerMenu,
      toggleControlMenu,
      showControlMenu,
      switchLayer,
      zoomIn,
      zoomOut,
      toggleFeatureVisibility,
      selectedFeature,
      SubItemSidebarsLeft,
      SubItemSidebarsRight,
      closeDetailSidebar,
      closeDetailSidebarComment,
      showCommentSidebar,
      toggleShowComment,
      CommentSidebarsLeft,
      CommentSidebarsRight,
    };
  },
};
</script>
