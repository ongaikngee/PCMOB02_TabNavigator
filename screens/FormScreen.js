import React from 'react';
import { View, ActivityIndicator, ImageBackground } from 'react-native';
import styles from '../stylesheet';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header, Text, PricingCard, Card, ListItem, Button, Icon, Image } from 'react-native-elements';
import jonsnow from '../assets/jonsnow.png';

const users = [
	{
		name: 'brynn',
		avatar: 'https://randomuser.me/api/portraits/lego/6.jpg'
	},
	{
		name: 'Jack',
		avatar: 'https://randomuser.me/api/portraits/lego/1.jpg'
	}
	// more users here
];

function mainScreen() {
	return (
		<View style={styles.container}>
			<Header
				leftComponent={{ icon: 'menu', color: '#fff' }}
				centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
				rightComponent={{ icon: 'home', color: '#fff' }}
			/>
			<Text h1>React Native Element</Text>
			<Text h4>This is an exploration with React Native Element.</Text>
			<PricingCard
				color="#4f9deb"
				title="Free"
				price="$0"
				info={[ '1 User', 'Basic Support', 'All Core Features' ]}
				button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
			/>
			<Card containerStyle={{ padding: 0 }}>
				<Card.Title>CARD WITH DIVIDER</Card.Title>
				<Card.Divider />
				{users.map((u, i) => {
					return <ListItem key={i} roundAvatar title={u.name} leftAvatar={{ source: { uri: u.avatar } }} />;
				})}
			</Card>
			<Card>
				<Card.Title>HELLO WORLD</Card.Title>
				<Card.Divider />
				{/* <Card.Image source={require('../assets/jonsnow.png')} /> */}
				<Card.Image source={jonsnow} />
				<Text style={{ marginBottom: 10 }}>
					The idea with React Native Elements is more about component structure than actual design.
				</Text>
				<Button
					icon={<Icon name="code" color="#ffffff" />}
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title="VIEW NOW"
				/>
			</Card>
			<Image source={jonsnow} style={{ width: 200, height: 200 }} PlaceholderContent={<ActivityIndicator />} />
			<Image source={jonsnow} style={styles.contactImage} />
		</View>
	);
}

const Stack = createStackNavigator();

export default function FormScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={mainScreen} />
		</Stack.Navigator>
	);
}
