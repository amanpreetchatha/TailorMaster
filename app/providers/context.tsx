import { User } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';


export const DashboardContext = createContext<User | undefined>(undefined);

export function useUserContext(){
  const user = useContext(DashboardContext);
  
  if(user===undefined){
    return undefined;
    
  }
  return user;
} 
