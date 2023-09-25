<script lang="ts" setup>
const authentication = useAuthentication()
const email = ref('')
const password = ref('')

function handleLoginButtonClick(event: MouseEvent): void {
  authentication.login(email.value, password.value)
}
</script>

<template>
  <div>
    Is Authenticated: {{ authentication.isAuthenticated }} User:
    {{ authentication.user }}
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" />
    <button @click="handleLoginButtonClick">Login</button>
  </div>
</template>
