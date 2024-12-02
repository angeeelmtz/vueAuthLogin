import { ref } from "vue";

class AuthService{

    constructor(){
        this.jwt = ref('')
        this.error = ref('')
    }

    getJwt(){
        return this.jwt
    }

    getError(){
        return this.error
    }

    async login(correo, contrasena){
        try{
            const request = await fetch('https://hfp69ilv.directus.app/auth/login/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: correo,
                    password: contrasena
                })
            })
            const response = await request.json()

            if("errors" in response){
                this.error.value = "Login Failed"
                return false
            }

            this.jwt.value = response.data.access_token
            return true
        }catch(error){
            console.log(error)
        }
    }
}

export default AuthService