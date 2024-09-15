<script setup lang="ts">
import { ref } from 'vue';

import { useUsersStore } from '../../stores/users';
    const loading = ref(false)

    const userStore = useUsersStore()
    const auth = () => {
        loading.value = true
       
        userStore.auth(email.value, password.value)
            .then(response => alert(response.data.token))
            .catch(() => alert('ops, falha'))
            .finally(() => loading.value = false)
    }

    const email = ref('')
    const password = ref('')
</script>

<template>
    <div>
        <h1>Login</h1>
        <form action="#" method="post" @submit.prevent="auth">
            <input type="text" name="email" id="" placeholder="email" v-model="email">
            <input type="password" name="password" id="" placeholder="senha" v-model="password">

            <button type="submit">
                <span v-if="loading">Carregando</span>
                <span v-else>Entrar</span>
            </button>
        </form>
        <a href="/esqueci-a-senha">Esqueci a senha</a>
    </div>
</template>

