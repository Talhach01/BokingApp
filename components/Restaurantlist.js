import Hotallistcard from './hotallistcard';
import React from 'react'
import { ScrollView } from 'react-native'
const RestaurantList = () => {
    return (
        <ScrollView>
            {uerData.map((item) => (
                <Hotallistcard key={item.id} data={item} />
            ))}
        </ScrollView>
    );
}; const uerData = [
    {
        id: 1,
        name: 'Monal Hotel Islamabad',
        location: 'Main Labarty Chok islamabad ',
        rating: 4,
        image: require('../components/assets/himg1.jpg'),
        details: 'We did not travel with our kids but wished we did its a very nice hotel almost like a resort with the activities they provide for the whole family. As well as being very clean We will definitely be back with the kids next time. We normally travel to Orlando for the parks but we are coming back next time to spend a day at this hotel with the kids',
        price: '250$'
    },
    {
        id: 2,
        name: 'Green View HotaL ',
        location: 'Block C Muslim Town Lahore ',
        rating: 3,
        image: require('../components/assets/himg2.jpg'),
        details: 'We did not travel with our kids but wished we did its a very nice hotel almost like a resort with the activities they provide for the whole family. As well as being very clean We will definitely be back with the kids next time. We normally travel to Orlando for the parks but we are coming back next time to spend a day at this hotel with the kids',
        price: '250$'
    },
    {
        id: 3,
        name: 'Star Hotel Lahore ',
        location: 'Main Labarty Chok Gulbarg Town',
        rating: 3.4,
        image: require('../components/assets/himg3.jpg'),
        details: 'We did not travel with our kids but wished we did its a very nice hotel almost like a resort with the activities they provide for the whole family. As well as being very clean We will definitely be back with the kids next time. We normally travel to Orlando for the parks but we are coming back next time to spend a day at this hotel with the kids',
        price: '250$'
    },
    {
        id: 4,
        name: 'Hotel Day In Emporium ',
        location: 'Block H-2, Phase 2 Johar Town',
        rating: 3.8,
        image: require('../components/assets/himg4.jpg'),
        details: 'We did not travel with our kids but wished we did its a very nice hotel almost like a resort with the activities they provide for the whole family. As well as being very clean We will definitely be back with the kids next time. We normally travel to Orlando for the parks but we are coming back next time to spend a day at this hotel with the kids',
        price: '250$'
    },
    {
        id: 5,
        name: 'City View Restaurant',
        location: '3.3Km to center.Block F Gulberg ',
        rating: 4,
        image: require('../components/assets/himg5.jpg'),
        details: 'We did not travel with our kids but wished we did its a very nice hotel almost like a resort with the activities they provide for the whole family. As well as being very clean We will definitely be back with the kids next time. We normally travel to Orlando for the parks but we are coming back next time to spend a day at this hotel with the kids',
        price: '250$'
    },
    {
        id: 6,
        name: 'Avari Towers Karachi ',
        location: '2 Fatima Jinnah Road, Karachi',
        rating: 4.0,
        image: require('../components/assets/himg6.jpg'),
        details: 'We did not travel with our kids but wished we did its a very nice hotel almost like a resort with the activities they provide for the whole family. As well as being very clean We will definitely be back with the kids next time. We normally travel to Orlando for the parks but we are coming back next time to spend a day at this hotel with the kids',
        price: '250$'
    },
    {
        id: 7,
        name: 'Beach Luxury Hotel ',
        location: 'Ali Tamizuddin Rd,Karachi',
        rating: 4.0,
        image: require('../components/assets/himg9.jpg'),
        details: 'We did not travel with our kids but wished we did its a very nice hotel almost like a resort with the activities they provide for the whole family. As well as being very clean We will definitely be back with the kids next time. We normally travel to Orlando for the parks but we are coming back next time to spend a day at this hotel with the kids',
        price: '250$'
    },
    {
        id: 8,
        name: 'PC5 Luxury Hotel',
        location: 'Moulvi Tamizuddin Khan Karachi',
        rating: 3.9,
        image: require('../components/assets/himg11.jpg'),
        details: 'We did not travel with our kids but wished we did its a very nice hotel almost like a resort with the activities they provide for the whole family. As well as being very clean We will definitely be back with the kids next time. We normally travel to Orlando for the parks but we are coming back next time to spend a day at this hotel with the kids',
        price: '250$'
    },
]
export { RestaurantList };