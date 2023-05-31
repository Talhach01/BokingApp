import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Gradianthader = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../components/assets/himg8.jpg')} style={styles.image}>



                <View style={styles.gradient}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#87cefa', fontFamily: 'Arial' }}> </Text>

                </View>


            </ImageBackground>
        </View>
    )
}
const styles = StyleSheet.create({

    container: {
        height: 250,
    },
    gradient: {
        flex: 1,
        justifyContent: "center",
        alignItems: "baseline",
        marginLeft: 20,
        marginBottom: -190

    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
})

export default Gradianthader