import * as React from 'react';
import { View, Switch } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
import {
	Container,
	Header,
	Title,
	Button,
	Text,
	Content,
	Footer,
	FooterTab,
	Left,
	Right,
	Body,
	Icon,
	ListItem,
	Tab,
	Tabs,
	ScrollableTab,
	Segment, H1, H2, H3
} from 'native-base';
import Tab01 from '../tabs/Tab01';
import Tab02 from '../tabs/Tab02';
import Tab03 from '../tabs/Tab03';

function HomeScreen({ navigation }) {
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={() => navigation.toggleDrawer()}>
						<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Main Page</Title>
				</Body>
				<Right />
			</Header>
			<Content>
				<H1>Native Base</H1>
				<Text>Drawer Navigation is created using React Navigation. </Text>
				<Text>This is an exploration using the Native Base component. </Text>
			</Content>
			<Footer>
				<FooterTab>
					<Button full>
						<Text>Footer</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	);
}

function NotificationsScreen({ navigation }) {
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={() => navigation.toggleDrawer()}>
						<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Buttons</Title>
				</Body>
				<Right />
			</Header>
			<Content>
				<Text>
					Button is a pure NativeBase component. Buttons are the integral part of an application. They are
					used for various purposes like, submit or reset a form, navigate, performing interactive actions
					such as showing or hiding something in an app on click of the button, etc.
				</Text>
				<Button primary onPress={() => navigation.goBack()}>
					<Text>Click Me</Text>
				</Button>
				<Button primary>
					<Text> Primary </Text>
				</Button>
				<Button success>
					<Text> Success </Text>
				</Button>
				<Button info>
					<Text> Info </Text>
				</Button>
				<Button warning>
					<Text> Warning </Text>
				</Button>
				<Button danger>
					<Text> Danger </Text>
				</Button>
				<Button dark>
					<Text> Dark </Text>
				</Button>
			</Content>
			<Footer>
				<FooterTab>
					<Button full>
						<Text>Footer</Text>
					</Button>
				</FooterTab>
			</Footer>
		</Container>
	);
}

function Screen01({ navigation }) {
	return (
		<Container>
			<Header hasTabs>
				<Left>
					<Button transparent onPress={() => navigation.toggleDrawer()}>
						<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>Scrollable Tab</Title>
				</Body>
				<Right />
			</Header>
			<Tabs renderTabBar={() => <ScrollableTab />}>
				<Tab heading="This is Tab 01">
					<Tab01 />
				</Tab>
				<Tab heading="This is a loong Tab 02">
					<Tab02 />
				</Tab>
				<Tab heading="This is also a very loong Tab 03">
					<Tab03 />
				</Tab>
			</Tabs>
		</Container>
	);
}

function Screen02({ navigation }) {
	return (
		<Container>
			<Header>
				<Left>
					<Button transparent onPress={() => navigation.toggleDrawer()}>
						<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Title>List Icon</Title>
				</Body>
				<Right />
			</Header>
			<Content>
				<H1>List Icon</H1>
				<Text>Lists can have icons assigned either to the left and/or right side of each list item. Along with icons, list item can also have badges assigned. To have note kind of text for list item, include note prop with Text component of ListItem.</Text>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: '#FF9501' }}>
							<Icon active name="airplane" />
						</Button>
					</Left>
					<Body>
						<Text>Airplane Mode</Text>
					</Body>
					<Right>
						<Switch value={false} />
					</Right>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: '#007AFF' }}>
							<Icon active name="wifi" />
						</Button>
					</Left>
					<Body>
						<Text>Wi-Fi</Text>
					</Body>
					<Right>
						<Text>GeekyAnts</Text>
						<Icon active name="arrow-forward" />
					</Right>
				</ListItem>
				<ListItem icon>
					<Left>
						<Button style={{ backgroundColor: '#007AFF' }}>
							<Icon active name="bluetooth" />
						</Button>
					</Left>
					<Body>
						<Text>Bluetooth</Text>
					</Body>
					<Right>
						<Text>On</Text>
						<Icon active name="arrow-forward" />
					</Right>
				</ListItem>
			</Content>
		</Container>
	);
}

function Screen03({ navigation }) {
	return (
		<Container>
			<Header hasSegment>
				<Left>
					<Button transparent onPress={() => navigation.toggleDrawer()}>
						<Icon name="menu" />
					</Button>
				</Left>
				<Body>
					<Segment>
						<Button first>
							<Text>Puppies</Text>
						</Button>
						<Button last active>
							<Text>Cubs</Text>
						</Button>
					</Segment>
				</Body>
				<Right>
					<Button transparent>
						<Icon name="search" />
					</Button>
				</Right>
			</Header>
			<Content padder>
				<H1>Segment</H1>
				<Text>Segments are best used as an alternative for tabs. Mainly used in iOS.</Text>
			</Content>
		</Container>
	);
}

function Screen04({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

function Screen05({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

function Screen06({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

function Screen07({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

const Drawer = createDrawerNavigator();

export default function App() {
	return (
		// <NavigationContainer>
		<Drawer.Navigator initialRouteName="Home">
			<Drawer.Screen name="Home" component={HomeScreen} />
			<Drawer.Screen name="Buttons" component={NotificationsScreen} />
			<Drawer.Screen name="Scrollable Tab" component={Screen01} />
			<Drawer.Screen name="List Icon" component={Screen02} />
			<Drawer.Screen name="Segment" component={Screen03} />
			<Drawer.Screen name="Screen04" component={Screen04} />
			<Drawer.Screen name="Screen05" component={Screen05} />
			<Drawer.Screen name="Screen06" component={Screen06} />
			<Drawer.Screen name="Screen07" component={Screen07} />
		</Drawer.Navigator>
		// </NavigationContainer>
	);
}
