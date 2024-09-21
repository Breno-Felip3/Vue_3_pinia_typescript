<script lang="ts">
export default {
    name: 'DefaulLayout',
}
</script>

<template>
    <div>
        <router-link :to="{name: 'admin.home'}" v-can="'admin.home'">Home</router-link>
        <router-link :to="{name: 'users.index'}" v-can="'user.index'">Users</router-link>
    </div>
    <div>
        <router-view></router-view>
    </div>
</template>