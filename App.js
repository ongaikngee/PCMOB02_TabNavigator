import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CounterText from './components/CounterText';
import Accordian from './components/Accordian'

function HomeScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Home!</Text>
		</View>
	);
}

function EventScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Event!</Text>
      <CounterText color="lightgrey" fontSize={10}>Hello</CounterText>
     <CounterText color="lightblue" fontSize={30}>Hello</CounterText>
     <CounterText color="blue" fontSize={60}>Hello</CounterText>
     <CounterText color="navy" fontSize={90}>Hello</CounterText>
		</View>
	);
}

function ContactScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Contact!</Text>
		</View>
	);
}


const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Home') {
							iconName = focused ? 'ios-home' : 'ios-home';
						} else if (route.name === 'Event') {
							iconName = focused ? 'ios-easel' : 'ios-easel';
						} else if (route.name === 'Contact') {
							iconName = focused ? 'ios-paw' : 'ios-paw';
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: 'tomato',
					inactiveTintColor: 'gray'
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Event" component={EventScreen} />
				<Tab.Screen name="Contact" component={ContactScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
