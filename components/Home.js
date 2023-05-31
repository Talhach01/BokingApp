import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react'
import Header from '../components/Header';
import {
    Text, View, StyleSheet,
} from 'react-native';
import { RestaurantList } from './Restaurantlist';

const Home = () => {
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


    return (
        <>

            <Header />
            <View style={styles.view1}>
                <Text style={{ fontSize: 13, }}>Hotel list</Text>
                <Text style={{ fontSize: 13, }}> More Details</Text>
            </View>
            <RestaurantList />

        </>
    )
}

export default Home
const styles = StyleSheet.create(
    {
        view1: {

            flexDirection: 'row',
            justifyContent: 'space-between',
            margin: 10,
        }
    }

)