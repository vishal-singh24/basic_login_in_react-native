import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation=useNavigation();
    const handleLogin=()=>{
        navigation.navigate("Login");
    }
    return (
        <View style={styles.container}>
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Image source={require("../assets/man.png")} style={styles.bannerImage} />
            <Text style={styles.title}>Lorem ipsum dolor</Text>
            <Text style={styles.subtitle} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit tempora est possimus nesciunt autem pariatur maxime voluptatum nobis necessitatibus eaque!</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.loginButtonWrapper,{backgroundColor:colors.primary}]}>
                    <Text style={[styles.loginText,{color:colors.white}]} onPress={handleLogin}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButtonWrapper}>
                    <Text style={styles.loginText}>
                        Signup
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',


    },
    logo: {
        height: 30,
        width: 130,
        marginVertical: 50

    },
     bannerImage: {
        height: 250,
        width: 230,
        marginVertical: 20

    },
    title:{
        fontSize:40,
        fontFamily:fonts.Bold,
        paddingHorizontal:40,
        textAlign:'center',
        color:colors.primary,
        marginTop:20
    },
    subtitle:{
        fontsize:20,
        fontFamily:fonts.Medium,
        textAlign:'center',
        paddingHorizontal:40,
        color:colors.secondary
    },
    buttonContainer:{
        flexDirection:"row",
        marginTop:40,
        borderWidth:3,
        borderColor:colors.primary,
        width:"85%",
        height:50,
        borderRadius:30
    },
    loginButtonWrapper:{
        justifyContent:'center',
        paddingLeft:50,
        width:"50%",
        borderRadius:50

    },
    loginText:{
        fontsize:18,
        fontFamily:fonts.SemiBold
    },



})

export default HomeScreen