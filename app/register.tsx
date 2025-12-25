import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'expo-router';
import React from 'react';
import {useState} from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './styles'

import { Alert, AppState } from 'react-native';
import { supabase } from './../utils/supabase';



const RegisterForm = () =>{
    const router = useRouter();
    const [username,SetName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    async function signUpWithEmail() {
        const {
          data: { session },
          error,
        } = await supabase.auth.signUp({
          
          username: username,
          email: email,
          password: password,
        })
    
        if (error) Alert.alert(error.message)
        
      }
    
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Create Account</Text>
                    <Pressable  onPress={handleSubmit(onSubmit)}>Register</Pressable>
        </View>
    )
}

export default RegisterForm