// // store.js (Pinia store)

// import { defineStore } from "pinia";

// export const useMyStore = defineStore({
//   id: "myStore",
//   state: () => ({
//     items: [
//       {
//         name: "예시 전술판1",
//         id: 1,
//         clicked: false
//       },
//       {
//         name: "예시 전술판2",
//         id: 2,
//         clicked: false
//       },
//       {
//         name: "예시 전술판3",
//         id: 3,
//         clicked: false
//       }
//     ] // items 데이터를 관리하는 상태
//   }),
//   getters: {
//     // items 데이터를 반환하는 getter
//     getItems(state) {
//       return state.items;
//     }
//   },
//   actions: {
//     // items 데이터를 업데이트하는 action
//     updateItems(newItems) {
//       this.items = newItems;
//     }
//   }
// });
