import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { route } from '../../constants'

export default function ForgetPassword(navigation) {
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate(route.SIGNUP)}>
        <Text>ForgetPassword</Text>
      </TouchableOpacity>
    </View>
  )
}