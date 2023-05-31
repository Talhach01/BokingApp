import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Gradianthader from './Gradianthader';


const Otp = () => {
    const navigation = useNavigation();

    let navigate = () => {
        navigation.navigate('Confarmation', { name: 'Confarmation' });
    };

    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return () => subscriber();
    }, []);

    function onAuthStateChanged(user) {
        if (user) {
            console.log(user, 'user');
        }
    }

    async function signInWithPhoneNumber() {
        try {
            const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
            setConfirm(confirmation);
        } catch (error) {
            console.log('Network error occurred:', error);
        }
    }


    async function confirmCode() {
        try {
            await confirm.confirm(code);
            navigate();
        } catch (error) {
            alert('Invalid code.');
        }
    }


    if (!confirm) {
        return (
            <View>
                <Gradianthader />
                <Text style={{ margin: 20, textAlign: 'center', fontSize: 18, }}> Please Enter Number With Countery code! </Text>
                <TextInput
                    value={phoneNumber}
                    onChangeText={(text) => setPhoneNumber(text)}
                    style={styles.input}
                    placeholder="Phone Number"
                />
                <Button
                    title="Phone Number Sign In"
                    onPress={() => signInWithPhoneNumber()}
                />

            </View>
        );
    }

    return (


        <View style={styles.container}>
            <TextInput
                value={code}
                onChangeText={(text) => setCode(text)}
                style={styles.input}
                placeholder="OTP Code"
            />
            <Button
                title="Confirm Code"
                onPress={() => confirmCode()}
                style={styles.button}
            />
        </View>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },
    button: {
        backgroundColor: '#00bfff',
        alignItems: 'center',
        alignSelf: 'center',
        width: 150,
        height: 45,
        borderRadius: 30,
        marginTop: 30,
        minHeight: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 11,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#00bfff',
        borderWidth: 2,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: "#dcdcdc",
        width: 200,
        borderRadius: 5,
        alignSelf: 'center',
        marginTop: 29
    },
});

export default Otp;