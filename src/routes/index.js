import React,{useContext} from 'react'
import {View, ActivityIndicator } from 'react-native'
import AuthRoutes from './authrouths'
import AppRoutes from './aps.routes'
import {AuthContext} from '../contexts/auth'


export default function Routes(){
    const {signed, load} = useContext(AuthContext)

    if(load){
        return(
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size='large' color='#131313'/>
            </View>
        )
    }
    
    return(
        signed ? <AppRoutes/> :  <AuthRoutes/>
    )
}