import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
// import * as Linking from 'expo-linking';
import { JokeApp } from './Jokeapp'
import { WikImage } from './Wikimage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { A } from '@expo/html-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d8784',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
  },
  background: {
    flex: 1,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperCustom: {
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
  }
  // box: {
  //   flex: 1,
  //   backgroundColor: 'black',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }
});
// export defaul

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(250,100,150,0.7)', '#2d8794']}
        style={styles.background}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}> (There's no place like) Home {'\n'}</Text>
        <Text>{'\n'}</Text>
          <Pressable
            onPress={() => navigation.push('Jokes')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(237, 92, 167)' : 'rgb(222, 67, 145)',
              },
              styles.wrapperCustom,
            ]}>
            <Text style={styles.text}>
              Go to Jokes
            </Text>
          </Pressable>
        <Text>{'\n'}</Text>
          <Pressable
            onPress={() => navigation.push('Wikimages')}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(237, 92, 167)' : 'rgb(222, 67, 145)',
              },
              styles.wrapperCustom,
            ]}>
            <Text style={styles.text}>
              Wikimages
          </Text>
          </Pressable>
          <Text>{'\n\n'}This is a universal app (Android + iOS + web) created by{' '}
            <A href="http://manuavoltaire.com">Manua Voltaire</A>
          {'\n'}
          </Text>
          <Text>
            Check the project's{' '}
            <A href="https://github.com/manuavoltaire">GitHub</A>
          </Text>
        </LinearGradient>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Jokes" component={JokeApp} />
        <Stack.Screen name="Wikimages" component={WikImage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
