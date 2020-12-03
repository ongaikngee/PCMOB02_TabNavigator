import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center'
	},

	headerContainer: {
		width: '100%',
		backgroundColor: '#798086', // Gray Web
		flex: 0.15,
        borderBottomWidth: 5,
        borderColor:"#D4AFCD",
	},
	headerText: {
		paddingTop: 20,
		fontSize: 50,
		fontWeight: 'bold',
		textAlign: 'center',
        color: '#D4AFCD', //Pink Lavender
        textShadowColor: "black",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 5,
        
	},

	headerBackgroundImage: {
		width: '100%',
		flex: 1
	},

	bodyContainer: {
		width: '100%',
		backgroundColor: '#B79FAD', //Lilac Luster
		flex: 0.85
	},

	bodyText: {
		color: '#D4AFCD', //Pink Lavender
		fontSize: 40,
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 20,
    },
    
    para:{
		color: '#D4AFCD', //Pink Lavender
		fontSize: 20,
        textAlign: 'center',
        padding:5,
        paddingTop:10,
        paddingBottom:10,
    },

	bodyBackgroundImage: {
		width: '100%',
		flex: 1
    },
    
    //EventScreen
    item:{
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    
    title:{
        color:'white',
        fontSize: 32,
    },

    //ContactScreen
    contactImage:{
        alignSelf:"center",
        resizeMode:"stretch",
        // borderWidth:20,
        width:"85%",
        height:"72%",
        // width:"100%",
    },

	otherContainer: {
		width: '100%',
		height: 30,
		backgroundColor: '#B79FAD' //Blue Sapphire
	},

	anotherContainer: {
		width: '100%',
		backgroundColor: '#556F7A' //Cadet
	}

	// color
	// '#798086', //Gray Web
	// '#D4AFCD', //Pink Lavender
	// '#B79FAD', //Lilac Luster
	// '#2E6171', //Blue Sapphire
	// '#556F7A', //Cadet
});

export default styles;
