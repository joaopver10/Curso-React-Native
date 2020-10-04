import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { Text, View, StatusBar } from 'react-native'
import styled from 'styled-components/native'

import Routes from "./src/routes";

console.disableYellowBox = true

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#131313' barStyle='light-content' />
      <Routes />
    </NavigationContainer>
  )
}

