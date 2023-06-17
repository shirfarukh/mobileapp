import * as React from 'react';
import { View, Text } from 'react-native';

export default function WelcomeScreen() {
  return (
   <View style={{
     flex: 1,
     backgroundColor: 'white',
   }}>
   <Text style={{
     padding: 40,
     fontSize: 30,
     fontWeight: 'bold',
     textAlign: 'center',
     
   }}> Welcome to Euro Mobile Company
    </Text>
    
   <Text style={{
     textAlign: 'center',
     fontSize: 24,
     padding: 20,
     marginVertical: 8,

   }}>
   In Euro Mobile Online our goal is to exceed our customers expectations by providing competitive pricing, unparalleled customer service, and fast shipping.
   </Text>
   </View>
  );
}