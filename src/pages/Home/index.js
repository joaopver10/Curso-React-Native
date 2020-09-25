import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home() {
  const navigation = useNavigation();
 return (
   <View style={{margin: 89}}>
     <Text>Home</Text>
     <Button
     title="Contato"
     onPress={ () => navigation.navigate('Contato') }  />
     <Button title="Abrir menu" 
     onPress={() => navigation.toggleDrawer()}
     />
   </View>
  );
}