import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, TextInput } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, } from '@react-navigation/native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const LandingPage = () => {
    let navigation = useNavigation();
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
        <ScrollView>

            <View style={styles.container}>
                <ImageBackground source={require('../components/assets/hadrimg.jpg')} style={styles.image}>
                    <LinearGradient
                        colors={['#00bfff', 'rgba(0, 0, 0, 0)']}
                        style={styles.gradient}>
                        <View>
                            <View style={{ justifyContent: 'center', marginTop: 60, alignItems: 'center', }}>
                                <Text style={{
                                    fontSize: 25,
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'Arial'
                                }}>
                                    Hotel Booking From Home   </Text>


                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </View>
            <View style={{
                backgroundColor: "#fff", marginLeft: 20, marginRight: 20,
                borderRadius: 7, borderColor: '#00bfff', borderWidth: 3, marginTop: -20
            }}>
                <Text style={{
                    margin: 20,
                    textAlign: 'center',
                    fontSize: 23,
                    color: 'black',
                    fontWeight: 'bold'
                }}>
                    Welcome To The booking Page</Text>
            </View>


            <View style={{
                flex: 1,
                backgroundColor: "white",
                flexDirection: 'row',
                marginTop: 10,
                marginLeft: 7,
                marginRight: 7,
                borderRadius: 10
            }}>
                <View>
                    <TouchableOpacity style={styles.button1} onPress={() =>
                        navigation.navigate('Home', { name: 'Home' })}>
                        <Fontisto name="hotel" style={{ color: 'black', fontSize: 70, marginTop: 20 }} />
                        <Text style={styles.buttonText}>Hotel List</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button2} onPress={() =>
                        navigation.navigate('PreviousBookings', { name: 'PreviousBookings' })}>
                        <MaterialCommunityIcons name="account-details" style={{ color: 'black', fontSize: 70, marginTop: 50 }} />
                        <Text style={styles.buttonText}>Details of Previous Bookings</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex: 1,
                backgroundColor: "white",
                flexDirection: 'row',
                marginLeft: 7,
                marginRight: 7,
                borderRadius: 10,
                marginTop: -10
            }}>
                <View>
                    <TouchableOpacity style={styles.button3} onPress={() =>
                        navigation.navigate('Home', { name: 'Home' })}>
                        <FontAwesome5 name="hotel" style={{ color: 'black', fontSize: 70, marginTop: 50 }} />
                        <Text style={styles.buttonText}>Hotel list in Dubai & Western Areas</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.button4} onPress={logout}>
                        <Entypo name="log-out" style={{ color: 'black', fontSize: 70, marginTop: 20 }} />
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View>
                <Text style={{
                    textAlign: 'center',
                    fontSize: 18,
                    color: 'black',
                    backgroundColor: '#00bfff',
                    padding: 20
                }}>
                    We improve and update our App Very Soon with new Functionality!
                    (MikroStarTech)
                </Text>
            </View>
        </ScrollView>

    )
}
const styles = StyleSheet.create({

    container: {
        height: 280,
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
    button1: {
        backgroundColor: '#f5fffa',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15,
        width: 160,
        height: 160,
        marginLeft: 5,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#00bfff',



    },
    button2: {
        backgroundColor: '#f5fffa',
        alignItems: 'center',
        alignSelf: 'center',
        width: 160,
        height: 250,
        borderRadius: 30,
        margin: 15,
        borderWidth: 3,
        borderColor: '#00bfff'

    },
    button3: {
        backgroundColor: '#f5fffa',
        alignItems: 'center',
        alignSelf: 'center',
        width: 160,
        height: 250,
        marginLeft: 5,
        marginTop: -78,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#00bfff'

    },
    button4: {
        backgroundColor: '#f5fffa',
        alignItems: 'center',
        alignSelf: 'center',
        margin: 15,
        width: 160,
        height: 160,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: '#00bfff'
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 11,
        fontWeight: 'bold'
    },
})
export default LandingPage