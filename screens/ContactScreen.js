import React from 'react';
import {Text, View, ImageBackground, Image} from 'react-native';
import styles from '../stylesheet';
import bg_header from '../assets/bg_header.jpg';
import bg_body from '../assets/bg_body.jpg';
import pix from '../assets/ironthrone.png';

export default function ContactScreen() {
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
                    <Text style={styles.bodyText}>Iron Throne</Text>
                    <Text style={styles.para}>The throne was allegedly forged from the 1,000 swords that had been surrendered to Aegon in the War of Conquest by the lords</Text>
                    {/* <Text style={styles.bodyText}>Iron Throne</Text> */}
                    <Image source={pix} style={styles.contactImage}></Image>
                </ImageBackground>
			</View>
		</View>
	);
}