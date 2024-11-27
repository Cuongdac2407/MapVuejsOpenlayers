<template>
  <div class="container-wrapper">
    <ul class="accordion-list">
      <!-- QHC -->
      <li class="accordion-list">
        <div class="accordion-header" @click="toggle(0)">
          <span class="toggle-icon">{{ expandedIndex === 0 ? "-" : "+" }}</span>
          <span class="item-title-text">Quy hoạch chung TP. Huế</span>
        </div>
        <div v-if="expandedIndex === 0" class="accordion-content">
          <div
            v-for="(subItem, index) in subItems"
            :key="index"
            class="sub-item-list"
          >
            <div class="sub-item">
              <div class="container sub-item-button">
                <i class="fa-regular fa-folder-open button-icon-folder"></i>
                <span class="sub-item-text">{{ subItem.title }}</span>

                <button class="btn-click-right" @click="selectItem(subItem)">
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <!-- Add more sections as needed -->
      <li class="accordion-list">
        <div class="accordion-header" @click="toggle(1)">
          <span class="toggle-icon">{{ expandedIndex === 1 ? "-" : "+" }}</span>
          <span class="item-title-text">Quy hoạch chung TP. Huế</span>
        </div>
        <div v-if="expandedIndex === 1" class="accordion-content">
          <div
            v-for="(subItem, index) in subItems"
            :key="index"
            class="sub-item-list"
          >
            <div class="sub-item">
              <div class="container sub-item-button">
                <i class="fa-regular fa-folder-open button-icon-folder"></i>
                <span class="sub-item-text">{{ subItem.title }}</span>

                <button class="btn-click-right" @click="selectItem(subItem)">
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
      <!-- Other items omitted for brevity -->
      <li class="accordion-list">
        <div class="accordion-header" @click="toggle(2)">
          <span class="toggle-icon">{{ expandedIndex === 2 ? "-" : "+" }}</span>
          <span class="item-title-text">Quy hoạch chung TP. Huế</span>
        </div>
        <div v-if="expandedIndex === 2" class="accordion-content">
          <div
            v-for="(subItem, index) in subItems"
            :key="index"
            class="sub-item-list"
          >
            <div class="sub-item">
              <div class="container sub-item-button">
                <i class="fa-regular fa-folder-open button-icon-folder"></i>
                <span class="sub-item-text">{{ subItem.title }}</span>

                <button class="btn-click-right" @click="selectItem(subItem)">
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>

    <!-- Primary Sidebar to display selected item -->
    <div v-if="selectedItem" class="sidebar">
      <div class="row-sidebar header-sidebar">
        <div class="col-1 btn-left-sidebar">
          <button class="btn-click-left-sidebars" @click="closeSidebar">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
        </div>
        <div class="col-10 text-content-header">Thông Tin</div>
        <div class="col-1 btn-close-sidebar">
          <button class="btn-click-close-sidebars" @click="closeSidebar">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>
      <p class="title-content-sidebars">{{ selectedItem.title }}</p>
      <a
        href="#"
        type="button"
        class="click-content-sidebars"
        @click.prevent="openDetailSidebar"
        >Xem thêm thông tin</a
      >
      <h5 class="content-text-sidebars">Danh Sách Layer Bản Vẽ</h5>
      <hr />
      <form class="form-checkbox-sidebars">
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            <span class="icon-check-box">
              <i class="fa-solid fa-layer-group"></i
            ></span>
            <span class="text-check-box">Công trình năng lượng</span>
          </label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            <span class="icon-check-box">
              <i class="fa-solid fa-layer-group"></i
            ></span>
            <span class="text-check-box">Công trình năng lượng</span>
          </label>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            <span class="icon-check-box">
              <i class="fa-solid fa-layer-group"></i
            ></span>
            <span class="text-check-box">Công trình năng lượng</span>
          </label>
        </div>
      </form>
    </div>

    <div v-if="showDetailSidebar" class="overlay-sidebar">
      <div class="fixed-header">
        <div class="row-sidebar header-sidebar">
          <div class="col-1 btn-left-sidebar">
            <button class="btn-click-left-sidebars" @click="closeDetailSidebar">
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div class="col-10 text-content-header">Thông Tin Chi Tiết</div>
          <div class="col-1 btn-close-sidebar">
            <button class="btn-click-close-sidebars" @click="closeSidebar">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="fixed-siderbar">
        <p class="title-content-sidebars">{{ selectedItem.title }}</p>
        <a
          href="#"
          type="button"
          class="click-content-sidebars"
          @click.prevent="openAdditionalSidebar"
          >Xem thêm thông tin</a
        >
        <h5 class="content-text-sidebars">Thông Tin Bản vẽ</h5>
        <hr />

        <table class="table-infomation">
          <tr
            v-for="(item, index) in colItemsLeft"
            :key="index"
            class="wrapper-tr"
          >
            <td class="col-5 td-left">{{ item.col_left }}</td>
            <td class="col-7 td-right">
              {{ colItemsRight[index]?.col_right || "" }}
            </td>
          </tr>
        </table>
        <h5 class="content-text-sidebars">Danh Sách Layer Bản Vẽ</h5>
        <hr />
        <form class="form-checkbox-sidebars">
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              <i class="fa-solid fa-layer-group"></i>
              <span class="text-check-box">Công trình năng lượng</span>
            </label>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              <i class="fa-solid fa-layer-group"></i>
              <span class="text-check-box">Công trình năng lượng</span>
            </label>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              <i class="fa-solid fa-layer-group"></i>
              <span class="text-check-box">Công trình năng lượng</span>
            </label>
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              <i class="fa-solid fa-layer-group"></i>
              <span class="text-check-box">Công trình năng lượng</span>
            </label>
          </div>
        </form>
      </div>
    </div>
    <!--sidebar object-->
    <div v-if="showAdditionalSidebar" class="additional-sidebar">
      <div class="fixed-header">
        <div class="row-sidebar header-sidebar">
          <div class="col-1 btn-left-sidebar">
            <button
              class="btn-click-left-sidebars"
              @click="closeAdditionalSidebar"
            >
              <i class="fa-solid fa-arrow-left"></i>
            </button>
          </div>
          <div class="col-10 text-content-header">Thông Tin Chi Tiết</div>
          <div class="col-1 btn-close-sidebar">
            <button
              class="btn-click-close-sidebars"
              @click="closeAdditionalSidebar"
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="fixed-sidebar">
        <table class="table-infomation">
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
  </div>
</template>

<script>
import { ref } from "vue";
import "../../../../assets/css/banve.css";

export default {
  name: "BanVe",
  setup() {
    const expandedIndex = ref(-1);
    const selectedItem = ref(null);
    const showAdditionalSidebar = ref(false);
    const showDetailSidebar = ref(false);
    const subItems = ref([
      { title: "QH cung cấp năng lượng, điện,chiếu sáng đô thị" },
      { title: "QH thông tin liên lạc" },
      { title: "QH chuẩn bị kỹ thuật" },
      { title: "QH cấp nước" },
      { title: "QH thoát nước thải, vệ sinh môi" },
      { title: "QH giao thông" },
      { title: "QH tổng mặt bằng sử dụng đất" },
      { title: "Sơ đồ tổ chức không gian, kiến trúc" },
    ]);
    const colItemsLeft = ref([
      { col_left: "STT:" },
      { col_left: "Mã hồ sơ:" },
      { col_left: "Số hiệu bản vẽ:" },
      { col_left: "Tên rút gọn:" },
      { col_left: "Mã bản vẽ:" },
      { col_left: "Tên bản vẽ:" },
      { col_left: "Số tờ:" },
      { col_left: "Tỷ lệ" },
      { col_left: "Tên thư mục:" },
      { col_left: "Ghi chú:" },
    ]);
    const colItemsRight = ref([
      { col_right: "1 " },
      { col_right: "MH506742" },
      { col_right: "KT01 " },
      { col_right: "SDVT " },
      { col_right: "234 " },
      { col_right: "Bản vẽ cung cấp năng lượng điện chiếu sáng đô thị" },
      { col_right: "245 " },
      { col_right: "1:50000" },
      { col_right: " " },
      { col_right: "15/9/2023 " },
      { col_right: "5284AAC6/MNB657 " },
    ]);
    const SubItemSidebarsLeft = ref([
      { col_left: "Mã đối tượng:" },
      { col_left: "Tỷ lệ:" },
      { col_left: "Loại quy hoạch:" },
      { col_left: "Tên bản vẽ:" },
      { col_left: "Căn cứ pháp lý:" },
      { col_left: "Địa điểm quy hoạch:" },
      { col_left: "Diện tích khu quy hoạch:" },
      { col_left: "Dân số khu quy hoạch :" },
      { col_left: "Nhu cầu dùng nước thải khu quy hoạch :" },
      { col_left: "Nhu cầu thoát nước thải khu quy hoạch :" },
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
    const toggle = (index) => {
      expandedIndex.value = expandedIndex.value === index ? -1 : index;
    };
    const selectItem = (item) => {
      selectedItem.value = item;
    };

    const closeSidebar = () => {
      selectedItem.value = null;
      showDetailSidebar.value = false;
    };

    const openDetailSidebar = () => {
      showDetailSidebar.value = true;
    };

    const closeDetailSidebar = () => {
      showDetailSidebar.value = false;
    };
    const openAdditionalSidebar = () => {
      showAdditionalSidebar.value = true;
    };
    const closeAdditionalSidebar = () => {
      showAdditionalSidebar.value = false;
    };

    return {
      expandedIndex,
      toggle,
      selectItem,
      closeSidebar,
      openDetailSidebar,
      closeDetailSidebar,
      selectedItem,
      showDetailSidebar,
      subItems,
      colItemsLeft,
      colItemsRight,
      SubItemSidebarsLeft,
      SubItemSidebarsRight,
      showAdditionalSidebar,
      openAdditionalSidebar,
      closeAdditionalSidebar,
    };
  },
};
</script>
