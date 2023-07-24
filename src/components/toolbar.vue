<script setup>
import {ref} from "vue";
import ToggleTheme from "./toggle-theme.vue";
import logo from "../assets/to-do.png";
import MenuBtn from "./menu-btn.vue";
import Link from "./composable/link.vue"

const show = ref(false);

const toggle = ()=>{
  show.value = !show.value;
}
</script>

<template>
  <div class="text-white bg-pink-600 shadow-md">
    <div class="flex items-center p-3">
      <div class="flex-grow"><img :src="logo"></div>
      <div @click="toggle">
        <!-- toggle here -->
        <MenuBtn />
      </div>
    </div>
    <div :class="[show ? '' : 'hidden']" class="w-full my-2">
      <Link class="flex p-3 text-base">
        <span class="flex-grow">Theme</span>
        <ToggleTheme />
      </Link>
      <Link class="p-3 text-base">About</Link>
    </div>
  </div>
</template>
