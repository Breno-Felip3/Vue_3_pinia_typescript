<script setup lang="ts">
import { onMounted } from 'vue';
import { useUsersStore } from '../../../stores/users';
const useStore = useUsersStore();

onMounted( () => {
    useStore.getMe();
})

</script>

<template>
    <p>Olá {{ useStore.me?.name }}</p>
    <div>Home Admin</div>
   
</template>