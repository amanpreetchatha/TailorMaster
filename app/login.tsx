import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import {styles} from './styles'

const schema = yup.object().shape({
    email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email'),
    password: yup
    .string()
    .required('Password is required')
    .min(6,'Password must be at least 6 characters long'),
});

const LoginForm = () =>{
    const {control,handleSubmit,reset,formState: {errors},trigger} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit=(data: any)=>{
        console.log(data);
        alert('login success');
        reset();

    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <Controller control={control} name="email" render={({field:{onChange,onBlur,value}})=>
                <>
                <TextInput style={styles.inputField} placeholder = 'Enter your email' placeholderTextColor="#a0aec0"
                    onBlur={()=>{
                        onBlur() ;
                        trigger('email');
                    }}
                    onChangeText={(text)=>{
                        onChange(text);
                        trigger('email');
                    }}
                    value = {value}
                    keyboardType='email-address'
                    autoCapitalize='none'
                />
                {
                    errors.email && (
                        <Text>{errors.email?.message?.toString()}</Text>
                    )
                }
                </>
            } />
            <Controller control={control} name="password" render={({field:{onChange,onBlur,value}})=>
                <>
                <TextInput style={styles.inputField} placeholder = 'Enter password' placeholderTextColor="#a0aec0"
                    onBlur={()=>{
                        onBlur() ;
                        trigger('password');
                    }}
                    onChangeText={(text)=>{
                        onChange(text);
                        trigger('password');
                    }}
                    value = {value}
                    secureTextEntry
                    
                />
                {
                    errors.password?.message && (
                        <Text>{errors.password.message.toString()}</Text>
                    )
                }
                </>
            } />
            <Pressable style={styles.button} onPress={handleSubmit(onSubmit)}>Login</Pressable>
        </View>
    )
}

export default LoginForm