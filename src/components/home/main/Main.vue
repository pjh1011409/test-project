<template>
  <div class="container">
    <button @click="handleDataNo">데이터 0</button>
    <button @click="handleDataYes">데이터 x</button>

    <!-- 데이터 있을 경우 -->
    <div v-if="hasData" class="createBox">
      <div class="alertText">
        <div>
          전술 목록이 비었습니다. 전술을 생성하세요
          <font-awesome-icon icon="fa-solid fa-triangle-exclamation" />
        </div>
      </div>
      <div class="createBtn">
        <v-btn @click="handleClick" rounded="lg">New</v-btn>
      </div>
    </div>
    <!-- 데이터 없을 경우 -->
    <div v-else class="startBox">
      <div class="mainTitle">Welcome To Tactical Board</div>
      <div class="soccerIcon"><font-awesome-icon :icon="['far', 'futbol']" size="3x" /></div>
      <div class="subTitle">전술을 선택하고 전술 보드를 그려보세요.</div>
      <div class="arrowIcon"><font-awesome-icon :icon="['fas', 'arrow-left']" size="2x" /></div>
    </div>
  </div>
</template>
<script lang="ts">
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  setup() {
    const router = useRouter();
    const hasData = ref(false);

    const handleDataNo = () => {
      hasData.value = true;
    };

    const handleDataYes = () => {
      hasData.value = false;
    };

    const handleClick = () => {
      router.push("/tactical");
    };

    return {
      handleClick,
      hasData,
      handleDataNo,
      handleDataYes
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: #dfe188;
}

.createBox {
  border-radius: 15px;
  background-color: #ffffff;
  width: 500px;
  height: 300px;
  margin-bottom: 100px;
  box-shadow: 5px 5px 0px 0px #717977;
}

.alertText {
  display: flex;
  height: 40%;
  justify-content: center;
  align-items: end;
  font-size: 17px;
  font-weight: 700;
}
.createBtn {
  display: flex;
  height: 40%;
  justify-content: center;
  align-items: center;
}

.startBox {
  width: 500px;
  height: 300px;
}

.mainTitle {
  display: flex;
  height: 20%;
  justify-content: center;
  align-items: end;
  font-size: 30px;
  font-weight: 700;
}
.soccerIcon {
  display: flex;
  height: 30%;
  justify-content: center;
  align-items: end;
  font-weight: 700;
}
.subTitle {
  display: flex;
  height: 40%;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}
.arrowIcon {
  display: flex;
  height: 10%;
  justify-content: center;
  align-items: start;
  font-weight: 700;
}
</style>
