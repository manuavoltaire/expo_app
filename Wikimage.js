import React, { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, Image } from 'react-native';
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
	},
	input: {
			height: 40,
			margin: 12,
			borderWidth: 1,
			padding: 10,
	},
});

export function WikImage({ navigation }) {
	
	// const [searchkey, setsearchkey] = useState("");

	const wkibrows = async () => {
		const api = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${text}`;
		try {
			const res = await fetch(api, {
				method: 'GET', headers: {
					"Accept": "application/json"
				}
			});
			const json = await res.json();
			// setsearchkey(json.title);
			console.log(json);
		}
		catch (error) {
			console.error(error);
		}
		// finally {
		//   setLoading(false);
	}
	
	const [text, onChangeText] = React.useState('');

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
					<Text>{'\n\n'}Displays images from wikipedia articles.{'\n\n'}
					</Text>
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
				{/* <View style={styles.container}> */}
					< TextInput
						style={styles.input}
						onChangeText={onChangeText}
						placeholder="e.g:flamingo"
						value={text}
					/>
				{/* </View> */}
				<Pressable
					onPress={() => wkibrows()}
					style={({ pressed }) => [
						{
							backgroundColor: pressed ? 'rgb(237, 92, 167)' : 'rgb(222, 67, 145)',
						},
						styles.wrapperCustom,
					]}>

					<Text style={styles.text}>
						Browse Wikipedia
					</Text>

				</Pressable>
			</LinearGradient>
		</View>

	);
}