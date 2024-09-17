<script setup lang="ts">
import { reactive, ref } from 'vue';

import { useUsersStore } from '../../stores/users';
import router from '../../router';
    const loading = ref(false)
    const error = reactive({
        msgError: '',
        status: 0,
        active: false
    })

    const userStore = useUsersStore()
    const auth = () => {
        loading.value = true
       
        userStore.auth(email.value, password.value)
            .then(() => router.push({name:'admin.home'}))
            .catch(response =>  {
                error.msgError = 'Falha ao autenticar',
                error.status = response.response.status,
                error.active = true

                if(error.status == 422) error.msgError = 'Dados inválidos'
                if(error.status == 404) error.msgError = 'Usuário não encontrado'
        
            })
            .finally(() => loading.value = false)
    }

    const email = ref('')
    const password = ref('')
</script>

<template>
    <div>
        <h1>Login</h1>
        <form action="#" method="post" @submit.prevent="auth">
            <div v-if="error.active">
                <p>
                    {{ error.msgError }}
                </p>
            </div>
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

