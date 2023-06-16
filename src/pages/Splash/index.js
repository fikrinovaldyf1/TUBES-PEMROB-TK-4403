import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'
import { BG, LOGO } from '../../assets/images'

const Splash = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000)
  }, [navigation])

  return (
    <ImageBackground source={BG} style={styles.BG}>
      <Image source={LOGO} style={styles.LOGO} />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  BG: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LOGO: {
    width: 280,
    height: 198
  }
})