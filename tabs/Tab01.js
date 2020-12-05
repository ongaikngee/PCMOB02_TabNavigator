import React from 'react';
import {View} from 'react-native';
import {Container, Content, Text, H1, H3} from 'native-base';



export default function Tab01(){
    return(
        <Container>
            <Content>
                <H1>Exploration on Navigation</H1>
                <H3>You have reached this screen via Tab Navigation, Drawer Navigation and Finally Tab Navigation in a screen</H3>
            </Content>
        </Container>
    );
}