<template>
  <div class="wrapper-vanban">
    <div v-for="(item, index) in SubItemFileWord" :key="index" class="content">
      <div class="col-1 icon-word-left">
        <i class="fa-regular fa-file-word"></i>
      </div>
      <div class="col-8">
        <a class="text-file" href="#">{{ item.title }}</a>
      </div>
      <div class="col-3 btn-file-text">
        <button class="btn-show-word" style="margin-right: 2px">
          <i class="fa-regular fa-eye"></i>
        </button>
        <button class="btn-down-word">
          <i class="fa-solid fa-cloud-arrow-down"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "VanBan",
  setup() {
    const SubItemFileWord = ref([
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
      { title: "File word quy hoạch chung thành phố Huế" },
    ]);
    return {
      SubItemFileWord,
    };
  },
};
</script>
<style>
.content {
  padding-top: 5px;
  padding-left: 4px;
  display: flex;
  flex-wrap: wrap;
}

.btn-file-text {
  display: flex;
  color: #014f86;
  padding-top: 4px;
  padding-left: 3px;
}
.icon-word-left {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
}
.btn-down-word {
  width: 39px;
  border-radius: 10px;
  height: 30px;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.btn-show-word {
  width: 39px;
  border-radius: 10px;
  height: 30px;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.text-file {
  text-decoration: none;
  color: #014f86;
  font-size: 15px;
}
.fa-file-word {
  width: 35px;
  height: 35px;
  color: #014f86;
}
</style>
