<template>
  <!-- 综合态势 -->
  <div class="comprehensiveSituational">
    <router-view></router-view>
  </div>
</template>

<script>
import { loginApi } from '@/api/user';
import { setToken } from '@/utils/token.js';
export default {
  name: 'comprehensiveSituational',
  data() {
    return {};
  },
  created() {
    // loginApi({
    //   username: '17621210366',
    //   password: '919999',
    //   grant_type: 'password',
    //   client_id: 'qxsmartcity-admin',
    //   client_secret: '123456',
    // }).then((r) => {
    //   if (r.data.code == 200) {
    //     setToken(r.data.data.token);
    //   }
    // });
  },
  methods: {},
};
</script>

<style lang="less" scoped></style>
