import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions'


// long -22.756453, lat -43.406751
// -22.754066, -43.407202
// -22.748768, -43.396676
// -22.748103, -43.392162
// -22.754189, -43.390730
// -22.756069, -43.389915

export default function App() {
  const [mapa, setMapa] = useState(null)
  const [destino, setDestino] = useState(null)

  useEffect(() => {
    async function pegaLocal() {
      await navigator.geolocation.getCurrentPosition(
        async ({ coords: { latitude, longitude } }) => {
          setMapa({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          })
        },
        {
          timout: 2000,
          enableHighAccuracy: true,
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
      ref={(mapa) =>{mapa = mapa}}
        style={{ width: 350, height: 350 }}
        region={mapa}
        showsUserLocation
        loadingEnabled
        minZoomLevel={18}
        rotateEnabled={true}
      >
        {destino &&
          <MapViewDirections
            origin={mapa}
            destination={destino}
            apikey="API"
            strokeWidth={5}
            strokeColor="#000"
       
          />
        }

      </MapView>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.box}>
        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn} onPress={ ()=> setDestino({latitude: -22.756453, longitude: -43.406751 })}>
            <Text style={styles.localText}>Ir ate local 1</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn} onPress={ ()=> setDestino({latitude: -22.754066, longitude: -43.407202 })}>
            <Text style={styles.localText}>Ir ate local 2</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn} onPress={ ()=> setDestino({latitude: -22.748103, longitude: -43.396676 })}>
            <Text style={styles.localText}>Ir ate local 3</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localText}>Ir ate local 4</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.localView}>
          <TouchableOpacity style={styles.localBtn}>
            <Text style={styles.localText}>Ir ate local </Text>
          </TouchableOpacity>
        </View>

      

      </ScrollView>


    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150,
  },
  box: {
    marginTop: 10
  },
  localView: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  localBtn: {
    backgroundColor: 'black',
    height: 40,
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  localText: {
    color: 'white'
  }

});
