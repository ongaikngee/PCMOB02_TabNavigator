import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import EventScreen from './screens/EventScreen';
import ContactScreen from './screens/ContactScreen';
import FormScreen from './screens/FormScreen'
import DrawerScreen from './screens/DrawerScreen'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CounterText from './components/CounterText';
import Accordian from './components/Accordian'



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
						} else if (route.name === 'Form') {
							iconName = focused ? 'ios-attach' : 'ios-attach';
						} else if (route.name === 'Drawer') {
							iconName = focused ? 'ios-images' : 'ios-images';
						}

						// You can return any component that you like here!
						return <Ionicons name={iconName} size={size} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: '#D4AFCD',
					inactiveTintColor: 'gray'
				}}
			>
				<Tab.Screen name="Home" component={HomeScreen} />
				<Tab.Screen name="Event" component={EventScreen} />
				<Tab.Screen name="Contact" component={ContactScreen} />
				<Tab.Screen name="Form" component={FormScreen} />
				<Tab.Screen name="Drawer" component={DrawerScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
