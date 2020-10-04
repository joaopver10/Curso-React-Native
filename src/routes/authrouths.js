import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'


import SignIn from '../pages/SignIn'
import Cadastro from '../pages/Cadastro'

const AuthSatck = createStackNavigator()

export default function AuthRoutes() {
    return (
        <AuthSatck.Navigator>
            <AuthSatck.Screen
                name='SigIn'
                component={SignIn}
                options={{ headerShown: false }}
            />
            <AuthSatck.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ 
                headerStyle:{
                    backgroundColor:"#131313",
                    borderBottomWidth: 1,
                    borderBottomColor: '#00b94a'
                
                },
                headerTintColor: '#FFF',
                headerBackTitleVisible: false,
                headerTitle: 'Voltar'
                }}
            />


        </AuthSatck.Navigator>
    )
}