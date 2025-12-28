import { View } from 'react-native'

import LoginForm from './login'
import Dashboard from './dashboard'
import  useUserContext  from './providers/context'




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