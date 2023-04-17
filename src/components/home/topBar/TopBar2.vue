<template>
  <div class="container">
    <v-btn class="loginBtn" rounded="xl">
      <font-awesome-icon :icon="['fas', 'list']" />
      <p>&nbsp; 전술 목록으로</p>
    </v-btn>
    <v-btn class="loginBtn" rounded="xl">
      <font-awesome-icon :icon="['fas', 'rotate-right']" />
      <p>&nbsp; 초기화</p>
    </v-btn>
    <v-btn class="loginBtn" rounded="xl">
      <font-awesome-icon :icon="['fab', 'google']" />
      <p>&nbsp; 구글 로그인</p>
    </v-btn>
  </div>
</template>
<script lang="ts">
export default {};
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
  margin: 10px 15px;
}
</style>
