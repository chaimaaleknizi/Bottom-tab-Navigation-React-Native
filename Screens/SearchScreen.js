import { View, Text } from 'react-native'
import React from 'react'

const SearchScreen = () => {
  return (
    <View style={{
      height: '100%',
      backgroundColor:'#E4AFF',
      justifyContent: 'center',
      alignItems: 'center', 
    }}>
      <Text style={{fontSize: 40, fontWeight: 'bold', letterSpacing:5}}>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen;