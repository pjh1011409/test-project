<template>
  <div class="sideBar">
    <h1 class="myBoard">My Board</h1>

    <div class="menuBox">
      <VCard v-if="items.length > 0" class="mx-auto" max-width="90%" height="90%">
        <VList @click="handleItemClick" :items="items" item-title="name" item-value="id"></VList>
      </VCard>
      <VCard v-else class="mx-auto" max-width="90%" height="90%">
        <VList class="noDataBox"
          >전술리스트가 비었습니다. <font-awesome-icon :icon="['far', 'file-circle-xmark']" />
        </VList>
      </VCard>
    </div>

    <VRow justify="center">
      <VCol cols="12" sm="6" md="4">
        <VBtn @click="handleNewButtonClick" block rounded="lg">생성</VBtn>
      </VCol>
      <VCol cols="12" sm="6" md="4">
        <VBtn @click="handleEditButtonClick" block rounded="lg">편집</VBtn>
      </VCol>
      <VCol cols="12" sm="6" md="4">
        <VBtn @click="handleModalOpen" block rounded="lg">삭제</VBtn>
      </VCol>
    </VRow>
    <Modal
      :text="modalText"
      :isOpen="showModal"
      @confirm="handleDeleteButtonClick"
      @closeModal="handleModalClose"
    />
  </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Modal from "../../modal/Modal.vue";

export default {
  components: {
    Modal
  },
  setup() {
    const router = useRouter();

    const showModal = ref(false);
    const modalText = ref("해당 전술 데이터를 삭제하시겠습니까?");

    const dialog = ref(false);
    const items = ref([
      {
        name: "예시 전술판1",
        id: 1,
        clicked: false
      },
      {
        name: "예시 전술판2",
        id: 2,
        clicked: false
      },
      {
        name: "예시 전술판3",
        id: 3,
        clicked: false
      }
    ]);

    const handleItemClick = (item: { clicked: { value: boolean } }) => {
      if (item.clicked) {
        item.clicked.value = true;
      }
    };

    const handleNewButtonClick = () => {
      router.push(`/newDefault`);
    };

    const handleEditButtonClick = () => {
      const clickedItem = items.value.find((item) => item.clicked.valueOf);
      if (clickedItem) {
        router.push(`/예시 전술판${clickedItem.id}`);
      }
    };

    const handleDeleteButtonClick = () => {
      const clickedIndex = items.value.findIndex((item) => item.clicked.valueOf);
      if (clickedIndex !== -1) {
        items.value.splice(clickedIndex, 1);
      }
      showModal.value = false;
    };

    const handleModalOpen = () => {
      showModal.value = true;
    };
    const handleModalClose = () => {
      showModal.value = false;
    };

    return {
      modalText,
      showModal,
      handleModalClose,
      items,
      handleItemClick,
      handleNewButtonClick,
      handleEditButtonClick,
      handleDeleteButtonClick,
      handleModalOpen,
      dialog
    };
  }
};
</script>

<style scoped>
.sideBar {
  width: 300px;
  background-color: #80a335;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 20px;
}
.myBoard {
  text-align: center;
}

.menuBox {
  height: 70%;
  background-color: #f8efce;
  border-radius: 15px;
  box-shadow: 5px 5px 0px 0px #8f827e;
  margin: 20px 0px;
  padding: 20px 10px;
}
.list {
  font-size: 10px;
}

.noDataBox {
  display: flex;
  height: 90%;
  justify-content: center;
  align-items: center;
}
</style>
