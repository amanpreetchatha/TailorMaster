import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'expo-router';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';


const schema = yup.object().shape({
    name: yup
    .string()
    .required('Name is required'),
    email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email'),
    password: yup
    .string()
    .required('Password is required')
    .min(6,'Password must be at least 6 characters long'),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Password is required')
});

const RegisterForm = () =>{
    const {control,handleSubmit,reset,formState: {errors},trigger} = useForm({
        resolver: yupResolver(schema)
    });
    const onSubmit=(data: any)=>{
        console.log(data);
        alert('success form submitted');
        reset();

    }
    return (
        <View>
            <Text>Create Account</Text>
            <Controller control={control} name="name" render={({field:{onChange,onBlur,value}})=>
                <>
                <TextInput placeholder = 'Enter full name' placeholderTextColor="#a0aec0"
                    onBlur={()=>{
                        onBlur() ;
                        trigger('name');
                    }}
                    onChangeText={(text)=>{
                        onChange(text);
                        trigger('name');
                    }}
                    value = {value}
                />
                {
                    errors.name && (
                        <Text>{errors.name?.message?.toString()}</Text>
                    )
                }
                </>
            } />
            <Controller control={control} name="email" render={({field:{onChange,onBlur,value}})=>
                <>
                <TextInput placeholder = 'Enter your email' placeholderTextColor="#a0aec0"
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
                <TextInput placeholder = 'Enter password' placeholderTextColor="#a0aec0"
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
            <Controller control={control} name="confirmPassword" render={({field:{onChange,onBlur,value}})=>
                <>
                <TextInput placeholder = 'Re-enter password' placeholderTextColor="#a0aec0"
                    onBlur={()=>{
                        onBlur() ;
                        trigger('confirmPassword');
                    }}
                    onChangeText={(text)=>{
                        onChange(text);
                        trigger('confirmPassword');
                    }}
                    value = {value}
                    secureTextEntry
                    
                />
                {
                    errors.confirmPassword?.message && (
                        <Text>{errors.confirmPassword.message.toString()}</Text>
                    )
                }
                </>
            } />
            <TouchableOpacity 
            onPress={handleSubmit(onSubmit)}
            >
                <Text >Register</Text>
            </TouchableOpacity>
            <Link href={"/"}>Home</Link>
        </View>
    )
}

export default RegisterForm