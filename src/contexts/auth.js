import React, { createContext, useState } from 'react'
import firebase from '../services/firebasecConnection'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)


    //cadastrando
    async function cadUsuario(email, senha, nome) {
        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(async (value) => {
                let uid = value.user.uid
                await firebase.database().ref('usuarios').child(uid).set({
                    saldo: 0,
                    nome: nome
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            nome: nome,
                            email: value.user.email
                        }
                        setUser(data)
                    })
            })
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, cadUsuario }}>
            {children}
        </AuthContext.Provider>
    )
}