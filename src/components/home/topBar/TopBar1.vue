<template>
  <div class="container">
    <!-- 구글 로그아웃 -->
    <v-btn v-if="isLogin()" @click="googleLogOut" class="loginBtn" rounded="xl">
      <font-awesome-icon :icon="['fab', 'google']" />
      <p>&nbsp; 구글 로그아웃</p>
    </v-btn>
    <!-- 구글 로그인 -->

    <v-btn v-else @click="googleLogIn" class="loginBtn" rounded="xl">
      <font-awesome-icon :icon="['fab', 'google']" />
      <p>&nbsp; 구글 로그인</p>
    </v-btn>

    <p>{{ JSON.parse(storeUser.getUserMail) }}</p>
  </div>
</template>
<script lang="ts">
import "firebase/auth";
import { useUserStore } from "@/stores/user";
import { googleLogIn, googleLogOut } from "../../../api/auth/auth";

export default {
  setup() {
    const storeUser = useUserStore();

    const isLogin = () => {
      const isToken = window.localStorage.getItem("Token");
      if (isToken) {
        return true;
      } else {
        return false;
      }
    };

    return { isLogin, googleLogIn, googleLogOut, storeUser };
  }
};
</script>

<style scoped>
.container {
  height: 10vh;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #dfe188;
}

.loginBtn {
  margin: 10px 20px;
}
</style>
