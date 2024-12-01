import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from '../../App'

type Homeprops=NativeStackScreenProps<RootStackParamList,'Home'>

const Home = ({navigation}:Homeprops) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button title='Go to Details Screen' onPress={()=>navigation.navigate("Details",{productId:"86"})}/>
     
    </View>
  )
}

export default Home

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