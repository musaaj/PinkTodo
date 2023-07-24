<script setup>
 import {ref} from "vue";
import Check from "./icons/check.vue" ;

const todo = ref('');
const isEditing = ref(false);
const emit = defineEmits(["save"]);
const onCheck = ()=> {
  isEditing.value ? isEditing.value = false : isEditing.value = true;
  emit("save", todo.value);
  todo.value = "";
}
</script>

<template>
  <div :class="[isEditing ? '' : 'hidden']" class="fixed top-0 bottom-0 w-full h-full" @click="isEditing = false"> 
   <div :class="[isEditing ? '' : 'hidden']" class="fixed flex items-center w-full p-4 bg-transparent bottom-12">
     <input class="flex-grow bg-[--bg-primary] p-2 px-5 focus:outline-none rounded-full border-solid border-pink-800 border-2" type="text" @click.stop="" v-model.trim="todo" placeholder="type something"/>
     <button class="p-3 ml-2 text-white bg-pink-600 rounded-full" @click.stop="onCheck"><Check /></button>
   </div>
 </div>
   <button :class="[isEditing ? 'hidden' : '']" class="fixed font-sans font-thin text-white bg-pink-600 shadow btn-circle right-12 bottom-12" @click.stop="isEditing = true">&plus;</button>
</template>
