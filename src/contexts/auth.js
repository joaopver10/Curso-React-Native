import React, { createContext, useState, useEffect } from 'react'
import firebase from '../services/firebasecConnection'
import AsyncStorage from '@react-native-community/async-storage'
import { format } from 'date-fns'
export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)


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
        setLoadingAuth(true)
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
                setLoadingAuth(false)
            })
        })
            .catch((error) => {
                alert(error.code)
                setLoadingAuth(false)
            })
    }

    //cadastrando
    async function cadUsuario(email, senha, nome) {
        setLoadingAuth(true)
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
                        setLoadingAuth(false)
                    })
            })
            .catch((error) => {
                alert(error.code)
                setLoadingAuth(false)
            })
    }

    async function storageUser(data){
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data))
    }

    async function deslogando(){
        await firebase.auth().signOut()
        await AsyncStorage.clear()
        .then( () => {
            setUser(null)
        })
    }
    return (
        <AuthContext.Provider value={{ signed: !!user, user, cadUsuario, usuarioEntrando, load, deslogando, loadingAuth}}>
            {children}
        </AuthContext.Provider>
    )
}