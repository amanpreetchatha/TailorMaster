import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import * as yup from 'yup';
import styles from './styles';

import { Alert, AppState } from 'react-native';
import { supabase } from './../utils/supabase';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})


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
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);

    
    
    async function signInWithEmail() {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
          email: email,
          password: password,
        })
        
        if (error) Alert.alert(error.message)
        setLoading(false)
      }
    
    return (
        <View style={styles.container}>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Text style={styles.heading}>Login</Text>
                <Input
                    label="Email"
                    leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                    placeholder="email@address.com"
                    autoCapitalize={'none'}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                    label="Password"
                    leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder="Password"
                    autoCapitalize={'none'}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button title= "Login" onPress={()=>signInWithEmail()} disabled={loading}/>
            </View>
            
            
        </View>
    )
}

export default LoginForm