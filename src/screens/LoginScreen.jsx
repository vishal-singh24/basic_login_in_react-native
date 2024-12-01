import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { colors } from '../utils/colors'
import { fonts } from '../utils/fonts'
import { useNavigation } from '@react-navigation/native'
import { Alert } from 'react-native';



const LoginScreen = () => {
    const navigation = useNavigation();
    const back = () => {
        navigation.navigate("Home")
    };
    const [secureEntry, setSecureEntry] = useState(true);
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading, setLoading]=useState('');
    
    const handleLogin=async()=>{
        if(!email||!password){
            Alert.alert("Alert",": Please Enter both email and password");
            return;
        }
        setLoading(true);
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/posts",
                {
                method:'POST',
                header:{
                    'Content-Type':'*/*'
                },
                body:JSON.stringify({email,password})
            }
        );

        const data=response.json();

            if(response.ok)
            {
                navigation.replace("Home");
                Alert.alert('Success','Login Successfully');
            }
            else{
                Alert.alert('Login Failed','Login Failed for some reason');
            }


        }catch(error){
            Alert.alert('error','An Error occured');

        }finally{
           setLoading(false);

        }
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButtonWrapper} onPress={back}>
                <Ionicons name={"arrow-back-outline"} size={25} />
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text style={styles.headingText}>Hey,</Text>
                <Text style={styles.headingText}>Welcome</Text>
                <Text style={styles.headingText}>Back</Text>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Ionicons name={"mail-outline"} size={25} color={colors.secondary} />
                    <TextInput style={styles.textInput} placeholder='Enter your Email' placeholderTextColor={colors.secondary}
                        keyboardType='email-address'
                    />
                </View>
                <View style={styles.inputContainer}>
                    <SimpleLineIcons name={"lock"} size={25} color={colors.secondary} />
                    <TextInput style={styles.textInput} placeholder='Enter your password' placeholderTextColor={colors.secondary}
                        secureTextEntry={secureEntry}
                    />
                    <TouchableOpacity onPress={() =>
                        setSecureEntry((prev) => !prev)
                    }>
                        <SimpleLineIcons name={"eye"} size={25} color={colors.secondary} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginWrapper} onPress={handleLogin}>
                    <Text style={styles.loginText}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginWrapper:{
        backgroundColor:colors.primary,
        marginTop:20,
        borderRadius:100
       
    },
    loginText:{
        fontSize:20,
        color:colors.white,
        textAlign:'center',
        fontFamily:fonts.SemiBold,
        padding:20


    },
    container: {
        backgroundColor: colors.white,
        flex: 1,
        padding: 20
    },
    textContainer: {
        marginVertical: 20
    },
    backButtonWrapper: {
        backgroundColor: colors.grey,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headingText: {
        fontSize: 32,
        color: colors.primary,
        fontFamily: fonts.SemiBold
    },
    formContainer: {
        marginTop: 20
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 100,
        color: colors.secondary,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 20,
        padding: 5,
        marginVertical: 10,
        //justifyContent: 'space-between'
    },
    textInput: {
        fontSize: 14,
        fontFamily: fonts.Light,
        paddingHorizontal: 20
    },
    forgotPassword: {
        marginTop: 10,
        fontFamily: fonts.Bold,
        textAlign: 'right'
    }

})
export default LoginScreen