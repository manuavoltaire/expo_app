import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
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
		padding: 6,
	}
});

export function jokeApp({ navigation }) {
	const [joketext, setjoketext] = useState("");

	const joketxt = async () => {
		try {
			const res = await fetch("https://icanhazdadjoke.com/", { headers: { "Accept": "application/json" } });
			const json = await res.json();
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
					<Text style={{ fontSize: 25, fontWeight: 'bold' }}>Manua's joke fetcher {'\n'}</Text>
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
				<Text> {'\n'}{joketext}{'\n'}</Text>
					{/* <StatusBar style="auto" /> */}
					<Pressable
						onPress={() => navigation.popToTop()}
						style={({ pressed }) => [
							{
								backgroundColor: pressed ? 'rgb(237, 92, 167)' : 'rgb(222, 67, 145)',
							},
							styles.wrapperCustom,
						]}>
						<Text style={styles.text}>
							Back to home screen
						</Text>

					</Pressable>
			</LinearGradient>
		</View>

	);
}