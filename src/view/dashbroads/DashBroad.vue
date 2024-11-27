<template>
  <div class="container-wrapper">
    <div class="wrapper-home-content">
      <div class="row">
        <div class="col-12 text-header text-center">
          <h2>CÔNG TY CỔ PHẦN CÔNG NGHỆ DỊCH VỤ TÀI NGUYÊN VÀ MÔI TRƯỜNG</h2>
        </div>
      </div>
      <div class="row nav-container">
        <div class="col-4 nav-link-content">
          <a href="#" class="col-4 nav-link">
            <img class="nav-icon" src="../../image/iconhouse.png" alt="" />
            <p class="nav-text" style="margin-bottom: 11px">Trang chủ</p></a
          >
        </div>
        <div class="col-4 nav-link-content">
          <a class="col-4 nav-link" href="#"
            ><img
              class="nav-icon icon-nav2"
              src="../../image/iconinter.png"
              alt=""
            />
            <p class="nav-text">Thủ tục hành chính</p></a
          >
        </div>
        <div class="col-4 nav-link-content">
          <a class="col-4 nav-link" href="#"
            ><img class="nav-icon" src="../../image/icondate.png" alt="" />
            <p class="nav-text">Sự kiện nổi bật</p></a
          >
        </div>
      </div>
      <div class="row link-item">
        <div class="row link-item-top">
          <div class="col-2">
            <p class="text-item-p text-item-left">Địa điểm :</p>
          </div>
          <div class="col-8 text-item">
            <p class="text-item-p text-item-right">Loại quy hoạch:</p>
          </div>
        </div>
        <div class="row link-item-bot">
          <form action="" class="form-item">
            <select name="" id="" class="item-select">
              <option value="1">--Chọn tỉnh/thành phố--</option>
              <option value="2">--Chọn tỉnh/thành phố--</option>
              <option value="3">--Chọn tỉnh/thành phố--</option>
              <option value="4">--Chọn tỉnh/thành phố--</option>
              <option value="5">--Chọn tỉnh/thành phố--</option>
            </select>
            <select name="" id="" class="item-select">
              <option value="1">--Chọn tỉnh/thành phố--</option>
              <option value="2">--Chọn tỉnh/thành phố--</option>
              <option value="3">--Chọn tỉnh/thành phố--</option>
              <option value="4">--Chọn tỉnh/thành phố--</option>
              <option value="5">--Chọn tỉnh/thành phố--</option>
            </select>
            <div class="search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input
                type="text"
                placeholder="      Tìm Kiếm"
                class="item-select-search"
              />
            </div>
          </form>
        </div>
      </div>
      <div class="row information">
        <div class="col-12">
          <h2 style="color: #014f86">
            <a href="#" class="information-a">THÔNG TIN CẦN BIẾT</a>
          </h2>
        </div>
      </div>
      <div class="container-content-wrapper">
        <div
          class="row content"
          v-for="(image, index) in SubImage"
          :key="index"
        >
          <div class="col-4 content-link">
            <div class="row">
              <a href="#" class="content-link-item">
                <div class="col-3">
                  <img :src="image.url" :alt="image.alt" />
                </div>
                <div class="col-8">
                  <p>Tra cứu thông tin quy hoạch chung Tp.Huế</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/css/home.css";
import { ref } from "vue";
export default {
  setup() {
    const SubImage = ref([
      { url: "src/image/bd-qhc.png", alt: "image" },
      { url: "src/image/bd-qhc.png", alt: "image" },
      { url: "src/image/bd-qhc.png", alt: "image" },
      { url: "src/image/bd-qhc.png", alt: "image" },
      { url: "src/image/bd-qhc.png", alt: "image" },
      { url: "src/image/bd-qhc.png", alt: "image" },
      { url: "src/image/bd-qhc.png", alt: "image" },
      { url: "src/image/bd-qhc.png", alt: "image" },
      { url: "src/image/bd-qhc.png", alt: "image" },
    ]);
    const SubContent = ref([
      { title: "Tra cứu thông tin quy hoạch chung Tp.Huế" },
      { title: "Tra cứu thông tin quy hoạch chung Tp.Huế" },
      { title: "Tra cứu thông tin quy hoạch chung Tp.Huế" },
      { title: "Tra cứu thông tin quy hoạch chung Tp.Huế" },
      { title: "Tra cứu thông tin quy hoạch chung Tp.Huế" },
      { title: "Tra cứu thông tin quy hoạch chung Tp.Huế" },
      { title: "Tra cứu thông tin quy hoạch chung Tp.Huế" },
      { title: "Tra cứu thông tin quy hoạch chung Tp.Huế" },
      { title: "Tra cứu thông tin quy hoạch chung Tp.Huế" },
    ]);
    return {
      SubImage,
      SubContent,
    };
  },
};
</script>
<style></style>
