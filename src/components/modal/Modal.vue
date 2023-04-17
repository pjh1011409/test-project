<template>
  <div v-if="isOpen" class="modal-container" @click="closeModalOutside">
    <div class="modal-content" @click.stop>
      <p>{{ text }}</p>
      <div class="btnRow">
        <VCol cols="12" sm="6" md="4">
          <VBtn @click="confirm" block rounded="lg" class="modal-btn yes-btn">Yes</VBtn>
        </VCol>
        <VCol cols="12" sm="6" md="4">
          <VBtn @click="closeModal" block rounded="lg" class="modal-btn close-btn">Close</VBtn>
        </VCol>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  setup(props, { emit }) {
    const confirm = () => {
      emit("confirm");
    };

    const closeModal = () => {
      emit("closeModal");
    };

    const closeModalOutside = () => {
      closeModal();
    };

    return {
      confirm,
      closeModal,
      closeModalOutside
    };
  }
};
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 2rem;
  text-align: center;
  height: 180px;
  font-weight: 800;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.btnRow {
  display: flex;
  justify-content: center;
  height: 100px;
  align-items: center;
}

.modal-btn {
  font-weight: bold;
  padding: 1rem;
  cursor: pointer;
}

.yes-btn {
  background-color: #62adeb;
  color: #ffffff;
}

.close-btn {
  background-color: #fd685e;
  color: #ffffff;
}
</style>
