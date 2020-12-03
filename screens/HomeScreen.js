import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from '../stylesheet';
import bg_header from '../assets/bg_header.jpg';
import bg_body from '../assets/bg_body.jpg';
import pix from '../assets/jonsnow.png';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
            <View style={styles.otherContainer}></View>
			<View style={styles.headerContainer}>
                <ImageBackground source={bg_header} style={styles.headerBackgroundImage}>
				<Text style={styles.headerText}>Winter is Coming</Text>
                </ImageBackground>
			</View>
			<View style={styles.bodyContainer}>
                <ImageBackground source={bg_body} style={styles.bodyBackgroundImage}>
                <Text style={styles.para}>Everyone in this world owes them a debt that can never be repaid. It is our duty and our honor to keep them alive in memory.</Text>

                    <Image source={pix}></Image>
                </ImageBackground>
			</View>
		</View>
	);
}
