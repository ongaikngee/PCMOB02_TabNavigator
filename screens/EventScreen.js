import React from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, SafeAreaView, FlatList } from 'react-native';
import CounterText from '../components/CounterText';
import styles from '../stylesheet';
import bg_header from '../assets/bg_header.jpg';
import bg_body from '../assets/bg_body.jpg';
import pix from '../assets/got.jpg';

export default function EventScreen() {
	const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'The Red Wedding',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'The Battle Of The Bastards',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Cersei Destroys The Sept Of Baelor',
        },
      ];
      
      const Item = ({ title }) => (
        <View style={styles.item}>
          <Text style={styles.title}>{title}</Text>
        </View>
      );
      
    //   const App = () => {
        const renderItem = ({ item }) => (
          <Item title={item.title} />
        );

	return (
		<View style={styles.container}>
			<View style={styles.otherContainer} />
			<View style={styles.headerContainer}>
				<ImageBackground source={bg_header} style={styles.headerBackgroundImage}>
					<Text style={styles.headerText}>Winter is Coming</Text>
				</ImageBackground>
			</View>
			<View style={styles.bodyContainer}>
				<ImageBackground source={bg_body} style={styles.bodyBackgroundImage}>
					<Text style={styles.bodyText}>Events</Text>
					<SafeAreaView style={styles.container}>
						<FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
					</SafeAreaView>
				</ImageBackground>
			</View>
		</View>
	);
}
