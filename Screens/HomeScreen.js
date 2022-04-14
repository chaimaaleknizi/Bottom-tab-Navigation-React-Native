import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={{
      height: '100%',
      backgroundColor:'#E4AFF',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Text style={{fontSize: 40, fontWeight:'bold', letterSpacing: 5}}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen