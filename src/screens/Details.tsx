import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NativeStackNavigationProp, NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../App'
import {useNavigation} from '@react-navigation/native'



type Detailsprops=NativeStackScreenProps<RootStackParamList,'Details'>

const Details = ({route}:Detailsprops) => {
  const {productId}=route.params
  
  const navigation=useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details of the product id{productId}</Text>
      <Button title='Go to Home' onPress={()=>navigation.goBack()}></Button>
      <Button title='Go back to first screen' onPress={()=>navigation.popToTop()}></Button>

    </View>
  )
}

export default Details

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:22
  }

})