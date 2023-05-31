import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Hotallistcard = ({ data }) => {
    const navigation = useNavigation();

    const navigateToDetails = () => {
        navigation.navigate('Details', {
            data: {
                image: data.image,
                name: data.name,
                location: data.location,
                details: data.details,
                price: data.price,
                rating: data.rating,
            },
        });
    };

    return (
        <View style={[styles.card, styles.elevation]}>
            <View>
                <Image source={data.image} style={styles.img} />
            </View>
            <View style={styles.view2}>
                <Text style={{ fontSize: 15 }}>{data.name}</Text>
                <Text style={{ fontSize: 10 }}>
                    <Ionicons name="location" style={{ color: 'black', fontSize: 15 }} />
                    {data.location}
                </Text>
                <Text style={{ fontSize: 10, marginTop: 5 }}>
                    <AntDesign name="star" style={{ color: '#daa520', fontSize: 12 }} />
                    <AntDesign name="star" style={{ color: '#daa520', fontSize: 12 }} />
                    <AntDesign name="star" style={{ color: '#daa520', fontSize: 12 }} />
                    <AntDesign name="star" style={{ color: '#daa520', fontSize: 12 }} />
                    <AntDesign name="staro" style={{ color: 'black', fontSize: 12 }} />
                    Rating in Pakistan
                </Text>
            </View>
            <View>
                <TouchableOpacity style={styles.button} onPress={navigateToDetails}>
                    <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Hotallistcard;

const styles = StyleSheet.create({
    img: {
        height: '100%',
        width: 80,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    card: {
        height: 80,
        flexDirection: 'row',
        marginLeft: 12,
        marginRight: 12,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 8,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#1e90ff',
    },
    view2: {
        flex: 1,
        margin: 5,
        marginTop: 12,
    },

    button: {
        flex: 1,
        textAlign: 'center',
        marginTop: 40,
        marginLeft: 10,
        width: 70,
        height: 35,
        borderRadius: 10,
    },
    buttonText: {
        color: '#00bfff',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 8,
        fontWeight: 'bold'
    },
});