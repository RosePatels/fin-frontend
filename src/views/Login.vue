<template>
    <div class="bg-yellow-400">
        <h2>Login</h2>
        <form class="flex flex-col">
            <label>Email: </label>
            <input type="email" />

            <label>Password</label>
            <input type="password" />
            <div class="card flex justify-center">
        <Button label="Verify" />
    </div>
        </form>
    </div>
</template>

<script setup>
import Button from "primevue/button"

</script>

<style scoped>

</style>