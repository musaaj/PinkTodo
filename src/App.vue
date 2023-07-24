<script setup>
import {ref, onMounted} from "vue";
import Toolbar from "./components/toolbar.vue";
import TodoCreator from "./components/todo-creator.vue";

onMounted(()=>{
  const my_todos = localStorage.getItem("todos");
  my_todos? todos.value = JSON.parse(my_todos) : null;
});

const todos = ref([]);

const addTodo = (value)=> {
  value ? todos.value = [{done: false, text: value}, ...todos.value] : null;
  localStorage.setItem("todos", JSON.stringify(todos.value));
}

const removeTodo = e=> {
  todos.value = todos.value.filter((item, idx)=>idx != e.target.parentNode.id);
  localStorage.setItem("todos", JSON.stringify(todos.value));
}

const toggleDone = e=> {
  const id = e.target.parentNode.id;
  todos.value[id].done? todos.value[id].done = false : todos.value[id].done = true;
  localStorage.setItem("todos", JSON.stringify(todos.value));
}
</script>

<template>
  <div class="bg-[--bg-primary] text-[--text-primary]">
    <Toolbar class="sticky top-0 left-0" /> 
      <ul class="my-2">
        <li class="flex items-center p-2 bg-gradient" v-for="item, idx in todos" :id="idx"><span class="flex-grow" @click="toggleDone" :class="[item.done? 'line-through' : '']">{{item.text}}</span> <button class="font-sans font-thin text-red-500 btn-circle" @click="removeTodo">&times;</button></li>
      </ul>
      <p v-if="todos.length  == 0" class="p-8 text-lg text-center">
        No entries yet. Click the + icon to add new entries
      </p>
      <!-- todo editor here -->
      <TodoCreator @save="addTodo" />
  </div>
</template>


