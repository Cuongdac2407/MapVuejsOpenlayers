<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <img class="logo-login" src="../../../../image/Logo.png" alt="" />
        <h3>Đăng Nhập</h3>
        <form class="form-login">
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="     Tài Khoản..."
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="    Mật Khẩu..."
            />
          </div>
          <div class="btn-login">
            <button type="button" class="btn btn-danger">Hủy</button>
            <button type="submit" class="btn btn-primary">Đăng Nhập</button>
          </div>
        </form>
      </div>
    </div>
  </div>  
</template>
<script>
import "../../../../assets/css/login.css"
</script>
<style>

</style>
