import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Linking from 'expo-linking';


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
    borderRadius: 8,
    padding: 6,
  }
  // box: {
  //   flex: 1,
  //   backgroundColor: 'black',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }
});

export default function App() {
  // const [isLoading, setLoading] = useState(true);
  // const [imgUri, setimgUri] = useState([]);
  const [joketext, setjoketext] = useState("");

  const joketxt = async () => {
    try {
      const res = await fetch("https://icanhazdadjoke.com/", { headers: { "Accept": "application/json" } });
      const json = await res.json();
      // setimgUri("https://icanhazdadjoke.com/j/" + json.id + ".png");
      setjoketext(json.joke);
      console.log(json);
    }
    catch (error) {
      console.error(error);
    }
    // finally {
    //   setLoading(false);
  }

  // };

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(250,100,150,0.7)', '#2d8794']}
        style={styles.background}>
        <Text>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Manua's joke fetcher {'\n'}</Text>
          {/* <View style={styles.box}> */}
          {/* <Button
            onPress={() => joketxt()
            }
            title="Fetch Joke"
            color="#038cfc"
            accessibilityLabel="Fetch a dad joke on the internet!"
          /> */}
          <Pressable
            onPress={() => joketxt()}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(237, 92, 167)' : 'rgb(222, 67, 145)',
              },
              styles.wrapperCustom,
            ]}>
            <Text style={styles.text}>
              Fetch a dad joke
            </Text>

          </Pressable>
          <Text> {'\n'}{joketext}</Text>
          {/* </View> */}
          {/* <Image source={{ uri: imgUri }}
        style={{ width: '100%', height: '100%', resizeMode: 'contain', }} /> */}
          <StatusBar style="auto" />

          <Text>{'\n\n'}This is a universal app (Android + iOS + web) created by{' '}
            <Text onPress={() => Linking.openURL('http://manuavoltaire.com')}>
              Manua Voltaire
            </Text>
            {'\n\n'}
            Check the project's{' '}
            <Text onPress={() => Linking.openURL('https://github.com/manuavoltaire')}>
              GitHub
            </Text>
          </Text>
        </Text>
      </LinearGradient>
    </View>

  );
}

