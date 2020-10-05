import React, { createContext, useState, useEffect } from 'react'
import firebase from '../services/firebasecConnection'
import AsyncStorage from '@react-native-community/async-storage'
export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)


    useEffect( ()=> {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user')

            if(storageUser){
                setUser(JSON.parse(storageUser))
                setLoad(false)
            }
            setLoad(false)
        }
        loadStorage()
    },[])
    //logar 
    async function usuarioEntrando(email, senha) {
        await firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(async(value) => { 
            let uid = value.user.uid
            await firebase.database().ref('usuarios').child(uid).once('value')
            .then((snapshot) =>{
                let data ={
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                }
                setUser(data)
                storageUser(data)
            })
        })
            .catch((error) => {
                alert(error.code)
            })
    }

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
                        storageUser(data)
                    })
            })
            .catch((error) => {
                alert(error.code)
            })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, cadUsuario, usuarioEntrando, load}}>
            {children}
        </AuthContext.Provider>
    )
}