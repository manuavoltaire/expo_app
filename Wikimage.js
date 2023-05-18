// import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


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
// export default
export function wikImage({ navigation }) {
	// const [isLoading, setLoading] = useState(true);
	// const [imgUri, setimgUri] = useState([]);
	// const [joketext, setjoketext] = useState("");

	// const joketxt = async () => {
	// 	try {
	// 		const res = await fetch("https://icanhazdadjoke.com/", { headers: { "Accept": "application/json" } });
	// 		const json = await res.json();
	// 		// setimgUri("https://icanhazdadjoke.com/j/" + json.id + ".png");
	// 		setjoketext(json.joke);
	// 		console.log(json);
	// 	}
	// 	catch (error) {
	// 		console.error(error);
	// 	}
	// }

	return (
		<View style={styles.container}>
			<LinearGradient
				// Background Linear Gradient
				colors={['rgba(250,100,150,0.7)', '#2d8794']}
				style={styles.background}>
					<Text style={{ fontSize: 25, fontWeight: 'bold' }}>Browse images from wikipedia{'\n'}</Text>
	
					{/* </View> */}
					{/* <Image source={{ uri: imgUri }}
        style={{ width: '100%', height: '100%', resizeMode: 'contain', }} /> */}
					<Text>{'\n\n'}This section is under construction{'\n\n'}
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
					</Text>
			</LinearGradient>
		</View>

	);
}