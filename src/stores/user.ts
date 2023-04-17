import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore(
  "user",
  () => {
    const initialUserMail: any = ref(null);
    const getUserMail = computed(() => initialUserMail.value);
    function setUserMail(userMail: string) {
      console.log(initialUserMail.value);
      console.log(userMail, "setUserMail");
      initialUserMail.value = userMail;
    }

    function delUserMail() {
      initialUserMail.value = null;
      console.log(initialUserMail.value);
    }

    return { initialUserMail, getUserMail, setUserMail, delUserMail };
  },
  {
    persist: true
  }
);
