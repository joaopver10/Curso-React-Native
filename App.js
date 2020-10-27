import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps'

export default function App() {
  const [mapa, setMapa] = useState(null)

  useEffect(() => {
    async function pegaLocal() {
      await navigator.geolocation.getCurrentPosition(
        async ({coords:{latitude, longitude} }) => {
          setMapa({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta:0.0922,
            longitudeDelta: 0.0421
          })
        },
         {
           timout: 2000,
           maximumAge: 1000,

         }
      )
    }
    pegaLocal()
  }, [])

  return (
    <View style={styles.container}>

      <Text>Projeto mapas!</Text>
      <StatusBar style="auto" />
      <MapView
        style={{ width: 350, height: 350 }}
        region={mapa}
        showsUserLocation
        loadingEnabled
        minZoomLevel={18}
        rotateEnabled={true}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
