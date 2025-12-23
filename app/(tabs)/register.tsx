import {View, Text, TextInput} from 'react-native';
import React from 'react';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

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
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password is required')
});

const RegisterForm = () =>{
    const {control,handleSubmit,reset,formState: {errors},trigger} = useForm();

    return (
        <View>
            <Text>Create Account</Text>
            <Controller control={control} name="name" render={({field:{onChange,onBlur,value}})=>
                <>
                <TextInput placeholder = 'Enter your email' placeholderTextColor="#a0aec0"
                    onBlur={()=>{
                        onBlur() ;
                        trigger('email');
                    }}
                />
                </>
            } />
        </View>
    )
}

export default RegisterForm