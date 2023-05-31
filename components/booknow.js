import React, { useState } from 'react';
import { useContext } from 'react';
import { BookingContext } from './BookingContext';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from '@react-native-picker/picker';
import LinearGradient from 'react-native-linear-gradient';

const Booknow = () => {
    const [selectedDates, setSelectedDates] = useState({});
    const [isDateSelected, setIsDateSelected] = useState(false);
    const [guests, setGuests] = useState(1);
    const [rooms, setRooms] = useState('Single');
    const roomPrice = 250;
    const navigation = useNavigation();
    const { updateBookingData } = useContext(BookingContext);

    const handleDateSelect = (date) => {
        const updatedDates = { ...selectedDates };

        if (Object.keys(updatedDates).length === 2) {
            // If two dates are already selected, reset the selection
            setSelectedDates({});
        } else if (Object.keys(updatedDates).length === 1) {
            // If one date is already selected, select the second date and the dates in between
            const currentDate = Object.keys(updatedDates)[0];
            const selectedRange = getDatesInRange(currentDate, date);
            selectedRange.forEach((d) => {
                updatedDates[d] = { selected: true };
            });
            setSelectedDates(updatedDates);
            setIsDateSelected(true);
        } else {
            // If no date is selected, select the first date
            updatedDates[date] = { selected: true };
            setSelectedDates(updatedDates);
        }
    };

    const getDatesInRange = (startDate, endDate) => {
        const dates = [];
        const currentDate = new Date(startDate);

        while (currentDate <= new Date(endDate)) {
            dates.push(currentDate.toISOString().split('T')[0]);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dates;
    };

    const handleGuestsChange = (itemValue) => {
        setGuests(itemValue);
    };

    const handleRoomsChange = (itemValue) => {
        setRooms(itemValue);
    };


    const handleCalculateBill = () => {
        if (isDateSelected) {
            const selectedDatesArray = Object.keys(selectedDates);
            const numberOfNights = selectedDatesArray.length - 1; // Subtract 1 to get the number of nights
            const totalBill = numberOfNights * roomPrice;
            // Store the booking details
            const bookingData = {
                dates: selectedDatesArray,
                guests,
                rooms,
                totalBill,
            };
            updateBookingData(bookingData);
            alert(`Your Total Bill is: $${totalBill}. If you want to pay, press OK`);
            navigation.navigate('otp', { name: 'otp' });
        } else {
            alert('Please select a date range');
        }
    };

    const renderSelectedDates = () => {
        const selectedDatesArray = Object.keys(selectedDates);
        if (selectedDatesArray.length === 0) {
            return null;
        }
        if (selectedDatesArray.length === 1) {
            return <Text style={{ color: 'black' }}>{selectedDatesArray[0]}</Text>;
        }
        return (
            <Text style={{ color: 'black' }}>{selectedDatesArray[0]} To {selectedDatesArray[selectedDatesArray.length - 1]}</Text>
        );
    };

    return (
        <>
            <ScrollView contentContainerStyle={{ flex: 1 }}>
                <View style={styles.container}>
                    <ImageBackground source={require('../components/assets/background.jpg')} style={styles.image}>
                        <LinearGradient
                            colors={['#87cefa', '#00bfff', '#00bfff']}
                            style={styles.gradient}
                        >
                            <View style={{ justifyContent: 'center', marginTop: -90 }}>
                                <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', fontFamily: 'Arial' }}>Hotel Booking</Text>
                            </View>
                        </LinearGradient>
                    </ImageBackground>
                </View>

                <View style={{
                    flex: 1,
                    marginTop: -130,
                    minHeight: 200,
                    padding: 20,
                }}>
                    <View>
                        <Calendar
                            style={styles.calendar}
                            markedDates={selectedDates}
                            onDayPress={(day) => handleDateSelect(day.dateString)}
                        />
                    </View>

                    <Text style={styles.text2}>Date</Text>

                    <View style={styles.dropdown}>
                        {renderSelectedDates()}
                    </View>

                    <Text style={styles.text2}>Guests</Text>
                    <Picker
                        style={{
                            backgroundColor: '#f5fffa',
                            fontSize: 15,
                            flexDirection: 'row',
                            height: 80
                        }}
                        selectedValue={guests}
                        onValueChange={handleGuestsChange}
                    >
                        <Picker.Item label="1" value={1} />
                        <Picker.Item label="2" value={2} />
                        <Picker.Item label="3" value={3} />
                        <Picker.Item label="4" value={4} />
                        <Picker.Item label="5" value={5} />
                        <Picker.Item label="6" value={6} />
                    </Picker>

                    <Text style={styles.text2}>Rooms</Text>
                    <Picker
                        style={styles.dropdown}
                        selectedValue={rooms}
                        onValueChange={handleRoomsChange}
                    >
                        <Picker.Item label="Single" value="Single" />
                        <Picker.Item label="Double" value="Double" />
                        <Picker.Item label="Suite" value="Suite" />
                    </Picker>
                </View>

                <View style={{ height: 80 }}>
                    <TouchableOpacity
                        style={[styles.button, { opacity: isDateSelected ? 1 : 0.5 }]}
                        onPress={handleCalculateBill}
                    >
                        <Text style={styles.buttonText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    );
};

const styles = {
    container: {
        height: 230,
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
    calendar: {
        borderWidth: 1,
        borderColor: 'lightblue',
        height: 330,
        width: 327,
        borderRadius: 20,
    },
    text2: {
        color: '#00bfff',
        fontSize: 15,
        marginTop: 12,
        fontWeight: 'bold',
    },
    dropdown: {
        backgroundColor: '#f5fffa',
        fontSize: 15,
        flexDirection: 'row',
        height: 80,
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
};

export default Booknow;