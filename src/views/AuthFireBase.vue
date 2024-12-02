<template>
    <div class="container">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
            </div>

            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="authUser">Iniciar Sesion</button>
        </form>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

    const email = ref('')
    const password = ref('')

    const authUser = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email.value, password.value).then(()=> {
            alert("Usuario logeado con éxito")
        }).catch((error) => {
            alert("Error: " + error.message)
        })
    }
</script>

<style scoped>
</style>