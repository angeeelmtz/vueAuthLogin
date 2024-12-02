<template>
    <div class="container">
        <h1>Social login</h1>
        <button type="button" class="mx-1 btn btn-warning" @click="loginGoogle">Login With Google</button>
        <button type="button" class="mx-1 btn btn-primary" @click="loginFacebook">Login With Facebook</button>
        <button type="button" class="mx-1 btn btn-info" @click="loginTwitter">Login With Twitter</button>
        <button type="button" class="mx-1 btn btn-dark" @click="loginGit">Login With GitHub</button>
    </div>
</template>

<script setup>
    import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider } from 'firebase/auth';
    
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const loginGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((resultado) => {
            const credential = GoogleAuthProvider.credentialFromResult(resultado)
            const token = credential?.accessToken;
            console.log(token)
            alert("Success")
        })
        .catch((error) => {
            alert("Error: " + error.message)
        })
    }

    const facebookProvider = new FacebookAuthProvider()
    const loginFacebook = () => {
        signInWithPopup(auth, facebookProvider)
        .then((resultado) => {
            const credential = FacebookAuthProvider.credentialFromResult(resultado)
            const token = credential?.accessToken
            console.log(token)
            alert("Success")
        })
        .catch((error) => {
            alert("Error: " + error.message)
        })
    }

    const twitterProvider = new TwitterAuthProvider()
    const loginTwitter = () => {
        signInWithPopup(auth, twitterProvider)
        .then((resultado) => {
            const credential = TwitterAuthProvider.credentialFromResult(resultado)
            const token = credential?.accessToken
            console.log(token)
            alert("Success")
        })
        .catch((error) => {
            alert("Error: " + error.message)
        })
    }

    const gitHubProvider = new GithubAuthProvider()
    const loginGit = () => {
        signInWithPopup(auth, gitHubProvider)
        .then((resultado) => {
            const credential = GithubAuthProvider.credentialFromResult(resultado)
            const token = credential?.accessToken
            console.log(token)
            alert("Success")
        })
        .catch((error) => {
            alert("Error: " + error.message)
        })
    }
</script>

<style scoped>
</style>