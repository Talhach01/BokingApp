import React from 'react';

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Details = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params || {};

  const imageUrl = data && data.image ? data.image : null;
  const name = data && data.name ? data.name : '';
  const location = data && data.location ? data.location : '';
  const details = data && data.details ? data.details : '';
  const price = data && data.price ? data.price : '';
  const rating = data && data.rating ? data.rating : 0;

  return (
    <View style={[styles.card, styles.elevation]}>
      <Image source={imageUrl} style={styles.img} />
      <View style={styles.view2}>
        <Text style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#00bfff'
        }}>
          {name}
        </Text>
        <Text style={{ fontSize: 13 }}>
          <Ionicons name='location' style={{
            color: 'black',
            fontSize: 15
          }} />
          {location}
        </Text>
        <Text style={{
          color: '#00bfff',
          fontSize: 17
          , fontWeight: 'bold',
          marginTop: 12
        }}>
          Details
        </Text>
        <Text style={{
          fontSize: 13,
          marginTop: 8
        }}>
          {details}
        </Text>
        <Text style={{
          color: '#00bfff',
          fontSize: 15,
          marginTop: 16,
          fontWeight: 'bold'
        }}>
          Amenities
        </Text>
        <View style={{
          flexDirection: 'row',
          height: 40,
          marginTop: 17,
        }}>

          <Text style={{
            backgroundColor: '#00bfff',
            borderRadius: 10, width: 40,
            color: "white",
            textAlign: "center",
          }} >
            <Fontisto name="wifi" style={{
              color: 'white',
              fontSize: 20,
            }} />
            Wifi
          </Text>
          <Text style={styles.text2} >
            <MaterialCommunityIcons name="air-conditioner" style={{ color: 'white', fontSize: 30, }} />
          </Text>
          <Text style={styles.text2} >
            <MaterialCommunityIcons name="theater" style={{ color: 'white', fontSize: 25, }} />   T.V
          </Text>
          <Text style={styles.text2} >
            <Ionicons name="fast-food" style={{ color: 'white', fontSize: 24, }} />   Food
          </Text>
          <Text style={styles.text2} >
            <FontAwesome5 name="swimming-pool" style={{ color: 'white', fontSize: 20, }} />    Pool
          </Text>
          <Text style={styles.text2} >
            <MaterialCommunityIcons name="car-brake-parking" style={{ color: 'white', fontSize: 22, }} />   Parking
          </Text>
        </View>
        <Text style={{ color: '#00bfff', fontSize: 13, marginTop: 16, fontWeight: 'bold' }}>
          Price
        </Text>
        <Text style={{ fontSize: 12 }}>
          {price}
        </Text>
        <Text style={{
          fontSize: 15,
          marginTop: -34,
          marginLeft: 209,
          fontSize: 12,
          color: '#00bfff',
          fontWeight: 'bold'
        }}>
          Rating in Pakistan
        </Text>
        <Text style={{ fontSize: 10, marginTop: 3, marginLeft: 210 }}>
          {rating.toFixed(1)}
          <AntDesign name="star" style={{ color: '#daa520', fontSize: 12 }} />
          <AntDesign name="star" style={{ color: '#daa520', fontSize: 12 }} />
          <AntDesign name="star" style={{ color: '#daa520', fontSize: 12 }} />
          <AntDesign name="star" style={{ color: '#daa520', fontSize: 12 }} />
          <AntDesign name="staro" style={{ color: 'black', fontSize: 12, }} />
          . . .1544
        </Text>
      </View>
      <View style={{ height: 80 }}>
        <TouchableOpacity style={styles.button} onPress={() =>
          navigation.navigate('Booknow', { name: 'Booknow' })}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    flex: 1,
    width: 410,
    height: 410,


  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    height: 400,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#1e90ff',
  },
  view2: {
    flex: 1,
    marginTop: 12,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40
  },
  text2: {
    backgroundColor: '#00bfff',
    borderRadius: 10,
    width: 40,
    color: "white",
    textAlign: "center",
    marginLeft: 17
  },

  button: {
    backgroundColor: '#00bfff',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
    width: 150,
    height: 45,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 11,
    fontWeight: 'bold'
  },
});

export default Details;






