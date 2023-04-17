<template>
  <div class="background">
    <img @click="googleLogIn" src="../assets/login_logo.svg" />
    <br />
    <button @click="googleLogOut">Google 로그아웃</button>
    <p v-if="isLogin()">로그인 O</p>
    <p v-else>로그인 X</p>
  </div>
</template>

<script lang="ts" setup>
import "firebase/auth";
import { googleLogIn, googleLogOut } from "../api/auth/auth";

const isLogin = () => {
  const isToken = window.localStorage.getItem("Token");
  if (isToken) {
    return true;
  } else {
    return false;
  }
};

// googleLogIn();
// googleLogOut();
</script>

<style></style>
