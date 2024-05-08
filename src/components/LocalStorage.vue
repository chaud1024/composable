<script setup>
import { onBeforeMount, ref } from "vue";
import { useLocalStorage } from "@/composables/useLocalStorage";

const { data: username } = useLocalStorage("username", "");
// useLocalStorage에서 반환하는 data 이름을 username으로 변경
// key값은 'username'로, 기본값은 빈값
const { data: remember } = useLocalStorage("remember", false);
const password = ref("");

onBeforeMount(() => {
  if (!remember.value) {
    username.value = "";
  }
});
</script>

<template>
  <h1>LocalStorage</h1>
  <div>
    <form>
      <label for="username">아이디: </label>
      <input
        type="text"
        id="username"
        name="username"
        placeholder="아이디 입력"
        autocomplete="off"
        v-model="username" />
      <br />
      <label for="password">비밀번호: </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호 입력"
        autocomplete="off"
        v-model="password" />
      <hr />
      <input type="checkbox" name="remember" id="remember" v-model="remember" />
      <label for="remember">아이디 저장</label>
    </form>
  </div>
</template>

<style lang="scss" scoped></style>
