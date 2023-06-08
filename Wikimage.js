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
	const [imgUri, setimgUri] = useState("");
	const [imajis, setimajis] = useState("");
	var imcount = -1;
	
	const [text, onChangeText] = React.useState('');
	
	const wkibrows = async () => {
		const api = `https://en.wikipedia.org/w/api.php?action=query&redirects=1&format=json&prop=images&imlimit=max&origin=*&titles=${text}`;
		try {
			const res = await fetch(api, {
				method: 'GET', headers: {
					"Accept": "application/json"
				}
			});
			const json = await res.json();
			
			var imajs = [];
			var pages = json.query.pages;
			for (var page in pages) {
				for (var img of pages[page].images) {
					// console.log(img.title);
					imajs.push(encodeURI(img.title));
				}
			}
			
			setimgUri(`https://commons.wikimedia.org/wiki/${imajs[1]}`);
			// setimgUri(`https://upload.wikimedia.org/wikipedia/commons/b/b5/1dayoldkitten.JPG`);
			// setimgUri(`https://i.redd.it/i5aksclir04b1.jpg`);
			const imgsrc = `https://en.wikipedia.org/w/api.php?action=query&format=json&prop=imageinfo&iiprop=url&origin=*&titles=${imajs[0]}`;
			const imgres = await fetch(imgsrc, {
				method: 'GET', headers: {
					"Accept": "application/json"
				}
			});
			const imgjson = await imgres.json();
			var imajis = "";
			var ipages = imgjson.query.pages;
			for (var page in ipages) {
				for (var img of ipages[page].imageinfo) {
					// console.log(img.title);
					setimajis(encodeURI(img.url));
				}
			}
			// setsearchkey(json.title);
			// console.log(json);
			console.log(imgjson);
			console.log(imajis);
			// console.log(imgUri);
			// console.log(imajs.length);
		}
		catch (error) {
			console.error(error);
		}
		// finally {
		//   setLoading(false);
	}
	
	return (
		<View style={styles.container}>
			<LinearGradient
				// Background Linear Gradient
				colors={['rgba(250,100,150,0.7)', '#2d8794']}
				style={styles.background}>
					<Text style={{ fontSize: 25, fontWeight: 'bold' }}>Browse images from wikipedia{'\n'}</Text>
					<Text>{'\n\n'}Display images from wikipedia articles.{'\n\n'}</Text>
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
						<Image source={{ uri: imajis }}
							style={{ width: '100%', height: '100%', resizeMode: 'contain'}} />
			</LinearGradient>
		</View>

	);
}