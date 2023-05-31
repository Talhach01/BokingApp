import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import Details from './components/Details';
import { StatusBar } from 'react-native'
import Booknow from './components/booknow';
import Confarmation from './components/Confarmation';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './screens/login/LoginScreen';
import RegistrationScreen from './screens/Regitration/RegistrationScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from './components/Loader';
import Otp from './components/otp';
import LandingPage from './components/LandingPage';
import PreviousBookings from './components/PreviousBookings';
import { BookingProvider } from './components/BookingContext';


const Stack = createNativeStackNavigator();

function componentDidMount() {
  SplashScreen.hide();
}
let App = () => {
  componentDidMount();

  const [initialRouteName, setInitialRouteName] = React.useState('');
  React.useEffect(() => {
    setTimeout(() => {
      authUser();
    },);
  }, []);
  const authUser = async () => {
    try {
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (userData.loggedIn) {
          setInitialRouteName('LandingPage');
        } else {
          setInitialRouteName('LoginScreen');
        }
      } else {
        setInitialRouteName('RegistrationScreen');
      }
    } catch (error) {
      setInitialRouteName('RegistrationScreen');
    }
  };

  return (
    <BookingProvider>
      <NavigationContainer>
        {!initialRouteName ? (
          <Loader visible={false} />
        ) : (
          <>
            <StatusBar
              translucent={true}
              backgroundColor={'transparent'}
              gradientColors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0)']}
              barStyle="light-content"
            />

            <Stack.Navigator
              initialRouteName={initialRouteName}
              screenOptions={{ headerShown: false }}>

              <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="LandingPage" component={LandingPage} />
              <Stack.Screen name="Details" component={Details} />
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Booknow" component={Booknow} />
              <Stack.Screen name="otp" component={Otp} />
              <Stack.Screen name="Confarmation" component={Confarmation} />
              <Stack.Screen name="PreviousBookings" component={PreviousBookings} />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </BookingProvider>
  );
};

export default App;
