import React from 'react'
import { View, Text, Image } from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

export default function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{
                width: '100%', height: 77, alignItems: 'center', justifyContent: 'center',
                marginTop: 15
            }}>
                <Image source={require('./perfil.png')} style={{ width: 65, height: 65 }} />
                <Text style={{color: 'black', fontSize: 17, marginTop: 25, marginBottom: 25}}>
                Bem-vindo
                </Text>
            </View>

            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    )
}