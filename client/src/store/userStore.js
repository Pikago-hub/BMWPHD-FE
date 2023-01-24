import { defineStore } from 'pinia';
import userApi from '@/apis/userapi';

export default defineStore('user', {
  state: () => {
    return {
      userInfo: {},
    };
  },
  actions: {
    async getUserInfo() {
      const res = await userApi.info();
      this.userInfo = res.data;
      console.log("User Info:", this.userInfo);
    },
  },
});