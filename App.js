import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
// import React, { useState } from 'react';
// import React from 'react';
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}


function SettingScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Setting Screen</Text>
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
