import { json } from "express"
import { USERS } from "../data/Users.js"

export const authEmailWithPass = async (req, res) => {
    console.log("Login ...")
    console.log(req.body)
    const user = req.body
    const login = onCheckeEmailAndPass(user.email, user.pass)
    try {
        if(login && login!="pass incorrect"){
            const data = {
                id: login.id,
                nombre: login.nombre,
                apellidoPaterno: login.apellidoPaterno,
                email: login.email,
                login:'true',
                rol: login.rol
            }
            return res.status(200).json(data)
        }
        if(login === "pass incorrect")
            throw new Error("auth/wrong-email or password");
            //return res.status(200).json({'email':'incorrect', 'pass': 'incorrect'})
    
        else throw new Error("auth/user-not-found")
    } catch (error) {
            return res.status(400).send(error.message)
    }
    
}
const onCheckeEmailAndPass = (email, pass) =>{

    const data = USERS.find((item) => item.email == email)
    if(data){
        if(data.pass == pass)
            return data
        else 
            return "pass incorrect"
    }
    if(data) return data
    else null
}
export const onAuthUserVerify = (req, res )=>{
    console.log(req.body)
    return res.status(200).json('login-auth')
}