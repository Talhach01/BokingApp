import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import React from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  ImageBackground,
  TouchableOpacity
} from 'react-native'
function Header() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../components/assets/hadrimg.jpg')} style={styles.image}>
        <LinearGradient
          colors={['#00bfff', 'rgba(0, 0, 0, 0)']}
          style={styles.gradient}>
          <View>
            <View style={{ justifyContent: 'center', marginTop: 60, alignItems: 'center', }}>
              <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white', fontFamily: 'Arial' }}>Hotel Search </Text>
              <TouchableOpacity style={styles.tuchbar}>
                <TextInput placeholder='Sarch Hear ' style={styles.inputT} />
                <AntDesign name="search1" style={{ color: 'black', fontSize: 20, marginRight: 10 }} />
              </TouchableOpacity>

            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>


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
  tuchbar: {

    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 350,
    height: 35,
    marginTop: 15
  },
  inputT: {
    marginLeft: 10,
    fontSize: 16,
    color: 'black',
    height: 50,
  }

});

export default Header

