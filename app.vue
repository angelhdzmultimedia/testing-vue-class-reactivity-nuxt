<script lang="ts" setup>
const authentication = useAuthentication()
const email = ref('')
const password = ref('')

function handleLoginButtonClick(event: MouseEvent): void {
  authentication.login(email.value, password.value)
}
</script>

<template>
  <div style="display: flex; flex-direction: column; row-gap: 8px">
   <span> Is Authenticated: {{ authentication.isAuthenticated }} </span>
    <span>User: {{ authentication.user ?? 'null' }}</span>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" />
    <button
      style="background: #00ccff; color: white; outline: none; border: none"
      @click="handleLoginButtonClick"
    >
      Login
    </button>
  </div>
</template>
