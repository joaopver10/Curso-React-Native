import React,{useContext} from 'react'
import AuthRoutes from './authrouths'
import AppRoutes from './aps.routes'
import {AuthContext} from '../contexts/auth'


export default function Routes(){
    const {signed} = useContext(AuthContext)
    
    return(
        signed ? <AppRoutes/> :  <AuthRoutes/>
    )
}