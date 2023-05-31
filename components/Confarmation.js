import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
const Confarmation = ({ navigation }) => {
    const [userDetails, setUserDetails] = React.useState();
    React.useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        const userData = await AsyncStorage.getItem('userData');
        if (userData) {
            setUserDetails(JSON.parse(userData));
        }
    };

    const logout = () => {
        AsyncStorage.setItem(
            'userData',
            JSON.stringify({ ...userDetails, loggedIn: false }),
        );
        navigation.navigate('LoginScreen');
    };

    return (
        <>
            <View style={styles.container}>
                <ImageBackground source={require('../components/assets/background.jpg')} style={styles.image}>
                    <LinearGradient
                        colors={['#87cefa', '#00bfff', '#00bfff']}
                        style={styles.gradient}>
                        <View style={{ justifyContent: 'center', }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white', fontFamily: 'Arial' }}>Confarmation </Text>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>

            <View style={{
                alignItems: 'center',
                height: 400,
                marginLeft: 12,
                marginRight: 12,
                borderColor: "#00bfff",
                borderRadius: 20,
                borderWidth: 5,
                marginTop: -70,
                backgroundColor: 'white'
            }}>

                <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 35 }}>Transaction Success
                </Text>
                <Text style={{ marginTop: 20 }} >
                    <MaterialCommunityIcons name="bank-check" style={{ color: '#00bfff', fontSize: 70, }} />
                </Text>
                <Text style={{ margin: 20, textAlign: 'center', fontSize: 18, }}> Youe book our Roome it pleaure for us and our team
                    You are the valuable customer.Your holidays are spend
                    more exiting. thanks from our team.
                </Text>

            </View>

            <View style={{ height: 80, flexDirection: 'row', }}>
                <TouchableOpacity style={styles.button} onPress={() =>
                    navigation.navigate('Booknow', { name: 'Booknow' })}>
                    <Text style={styles.buttonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={logout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>

        </>
    )
}
const styles = StyleSheet.create({


    container: {
        height: 250,
    },
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    },
    button: {
        backgroundColor: '#00bfff',
        alignItems: 'center',
        alignSelf: 'center',
        marginBottom: 20,
        width: 100,
        height: 45,
        borderRadius: 30,
        marginLeft: 52,
        marginTop: 50
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 11,
        fontWeight: 'bold'
    },
})
export default Confarmation