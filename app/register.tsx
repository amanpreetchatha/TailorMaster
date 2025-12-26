import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { supabase } from './../utils/supabase';
import styles from './styles';



const RegisterForm = () =>{
    const router = useRouter();
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading, setLoading] = useState(false);


    async function signUpWithEmail() {
      setLoading(true);  
      
      const {
          data: { session },
          error,
        } = await supabase.auth.signUp({
          email,
          password,
          options: { data: { full_name: fullName } },   //send data here
        });
    
        if (error) Alert.alert(error.message)
        setLoading(false);
      }
    
    return (
      <View style={styles.container}>
        <View style={[styles.verticallySpaced, styles.mt20]}>
          <Input
            label="Full Name"
            leftIcon={{ type: 'font-awesome', name: 'user' }}
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            placeholder="Full Name"
          />
        </View>
        <View style={[styles.verticallySpaced]}>
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
          <Button title="Register" disabled={loading} onPress={() => signUpWithEmail()} />
        </View>
      </View>
        )
}

export default RegisterForm