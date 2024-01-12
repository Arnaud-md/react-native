import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, useWindowDimensions, Button, Image } from 'react-native';
// import React, { useState } from 'react';
// import React from 'react';
import * as React from 'react';
import { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MapView from 'react-native-maps';
import {Marker, Circle} from 'react-native-maps';
import {
  SafeAreaView
} from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import * as ImagePicker from 'expo-image-picker';

function HomeScreen() {
  const {height, width, scale, fontScale} = useWindowDimensions();
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <Text>Home Screen</Text>
      <Text>Height: {height}</Text>
      <Text>Width: {width}</Text>
      <Text>Font scale: {fontScale}</Text>
      <Text>Pixel ratio: {scale}</Text>
      <MapView
        region={{
          latitude: 45.188529,
          longitude: 5.924524,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map} 
      >
        <Marker
          coordinate={{
            latitude: 45.199629,
            longitude: 5.924524
          }}
          title={"Thomas"}
          description={"Chez Arnaud"}
        />
        <Circle 
          center={{
            latitude: 45.188529,
            longitude: 5.924524,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          radius={2000}
        />
      </MapView>
      
    </View>
    </SafeAreaView>
    
  );
}


function SettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
    </View>
  );
}

function LocalisationScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  let latitude = 0;
  let longitude = 0;
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    // latitude = JSON.stringify(location.coords.latitude);
    // longitude = JSON.stringify(location.coords.longitude);
    latitude = location.coords.latitude;
    longitude = location.coords.longitude;
  }

  return (
    // <View style={styles.container}>
    //   <Text style={styles.paragraph}>{Text}</Text>
    // </View>
    <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
      <Text>Localisation Screen</Text>
      
      <MapView
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map} 
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude
          }}
          title={"Thomas"}
          description={"Chez Arnaud"}
        />
      </MapView>
      
    </View>
    </SafeAreaView>
  );
}

function ImageScreen() {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchCameraAsync()
    console.log('image appareil photo', result)

    // let result = await ImagePicker.launchImageLibraryAsync({
    //   mediaTypes: ImagePicker.MediaTypeOptions.All,
    //   allowsEditing: true,
    //   aspect: [4, 3],
    //   quality: 1,
    // });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
}

const Tab = Platform.OS === "ios" ? createBottomTabNavigator() : createMaterialBottomTabNavigator()

export default function App() {

  return (
    // <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Setting" component={SettingScreen} />
          <Tab.Screen name="Geolocalisation" component={LocalisationScreen} />
          <Tab.Screen name="Image" component={ImageScreen} />
        </Tab.Navigator>
      </NavigationContainer>
   ) 
   /* <View>
        <Text>Rouge et indicateur "Maintenir"</Text>
        <Text>supérieur à 2 piles et indicateur "FRK"</Text>
        <Text>supérieur à 1 pile et indicateur "Exploser"</Text>
        <Text>immédiatement relacher</Text>
        <Text>autre cas</Text>
        <Text>bande bleue arreter sur le chiffre 4</Text>
        <Text>bande jaune arreter sur le chiffre 5</Text>
        <Text>bande autre couleur arreter sur le chiffre 1</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Text>appuie + relache</Text>
        <View style={styles.container2}>
          <View style={styles.red_button}></View>
          <Text>Supérieur à 2 piles + FRK</Text>
          <Text>Supérieur à 1 pile + Explose</Text>
        </View>
        <Text>appuie long</Text>
          <View style={styles.container2}>
            <View style={styles.blue_strip}></View>
            <Text>=4</Text>
            <View style={styles.yellow_strip}></View>
            <Text>=5</Text>
            <Text>Sinon 1</Text>
          </View>
      </View>
    </View> */
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
  },
  red_button: {
    width: 50,
    height: 50,
    backgroundColor: '#00f',
  },
  blue_strip: {
    flex: 1,
    width: 20,
    height: 50,
  }
});
