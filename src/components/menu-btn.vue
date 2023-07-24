<script setup>
import {ref} from "vue";
import Bars from "./icons/bars.vue";
import Cross from "./icons/cross.vue";

const expanded = ref(false);
const toggle = ()=> expanded.value = !expanded.value;
</script>

<template>
  <div @click="toggle">
    <Cross :class="[expanded == false ? 'hidden' : '']" />
    <Bars :class="[expanded ? 'hidden' : '']" />
  </div>
</template>


