<script setup>
import {ref, onMounted} from "vue";
import Light from "./icons/light.vue";
import Dark from "./icons/dark.vue"
import {setTheme, getTheme} from "../theme-switcher/index";

const theme = ref(getTheme());

const toggleTheme = ()=>
{
  theme.value == "light" ? theme.value = "dark" : theme.value = "light";
  setTheme(theme.value);
}
</script>

<template>
  <button @click="toggleTheme" class="">
    <Light :class="[theme == 'light' ? 'hidden' : '']" />
    <Dark :class="[theme == 'dark' ? 'hidden' : '']" />
  </button>
</template>
