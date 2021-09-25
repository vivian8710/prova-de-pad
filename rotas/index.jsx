import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Edição } from '../telas/Edição'
import { Inicio } from '../telas/Inicial'
const stack = createNativeStackNavigator()

export function Rotas() {
  return (
    <NavigationContainer>
      <stack.Navigator screenOptions={{headerShown: false}}>
        <stack.Screen name="Inicio" component={Inicio} />
        <stack.Screen name="Edição" component={Edição} />
      </stack.Navigator>
    </NavigationContainer>
  )
}