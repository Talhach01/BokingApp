import React from 'react';
import { View, Text } from 'react-native';
import { useContext } from 'react';
import { BookingContext } from './BookingContext';

const PreviousBookings = () => {
    const { bookingData } = useContext(BookingContext);

    return (
        <View>
            <Text>Previous Bookings</Text>
            {bookingData && (
                <>
                    <Text>Dates: {bookingData.dates.join(' - ')}</Text>
                    <Text>Guests: {bookingData.guests}</Text>
                    <Text>Rooms: {bookingData.rooms}</Text>
                    <Text>Total Bill: {bookingData.totalBill}</Text>
                </>
            )}
        </View>
    );
};


export default PreviousBookings;