<template>
  <div>
    <table>
      <tr v-for="(item, index) in colItemsLeft" :key="index" class="wrapper-tr">
        <td class="col-6 td-left">{{ item.col_left }}</td>
        <td class="col-6 td-right">{{ colItemsRight[index]?.col_right || "" }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import { ref, computed } from "vue";
export default {
  name: "ThuyetMinh",
  setup() {
    const colItemsLeft = ref([
      { col_left: "STT :" },
      { col_left: "Mã hồ sơ :" },
      { col_left: "Tên đồ án :" },
      { col_left: "Loại quy hoạch :" },
      { col_left: "Tên đồ án rút gọn :" },
      { col_left: "Tỷ lệ :" },
      { col_left: "Địa điểm quy hoạch :" },
      { col_left: "Quận/Huyện/TX" },
      { col_left: "Số quyết định phê duyệt" },
      { col_left: "Quy hoạch :" },
      { col_left: "Ngày quyết định phê duyệt quy hoạch :" },
      { col_left: "Ngày ra quyết đinh phê duyệt quy hoạch :" },
      { col_left: "Đơn vị tư vấn lập quy hoạch" },
      { col_left: "Đơn vị tra quyết định phê duyệt quy hoạch :" },
      { col_left: "Tình trạng :" },
    ]);
    const colItemsRight = ref([
      { col_right: "1 " },
      { col_right: "MH506742" },
      { col_right: "Đồ án quy hoạch Tp Huế " },
      { col_right: "Quy hoạch chung " },
      { col_right: "Đồ án quy hoạch tp huế " },
      { col_right: "1:50000" },
      { col_right: "Tp Huế Ngựu bình " },
      { col_right: "Ngựu bình" },
      { col_right: "15/8/2023" },
      { col_right: "15/9/2023 " },
      { col_right: "Cty Cổ phần trách nhiệm hữu hạn AACV " },
      { col_right: "HCAC" },
      { col_right: "Đã được phê duyệt" },
      { col_right: " " },
      { col_right: " " },
    ]);
    return {
      colItemsLeft,
      colItemsRight,
    };
  },
};
</script>
<style>
.wrapper-tr {
  font-size: 14px;
  width: 100%;
  height: 100%;
  
}
.td-left {
  padding-top: 10px;
  padding-left: 15px;

  font-weight: bold;
}
</style>
