import { View } from 'react-native';
import Dashboard from './dashboard';
import LoginForm from './login';
import useUserContext from './providers/context';


export default function App() {
  const user=useUserContext();
  
  return (
    
    <View>
      {
        user!==undefined ? <Dashboard /> : <LoginForm />
      }
    </View>
  )
  
} 