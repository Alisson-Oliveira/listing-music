import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Header from './components/Header';
import Painel from './pages/Panel';
import Music from './pages/Music';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ 
        headerShown: false,
        cardStyle: {
          backgroundColor: '#f2f3f5',
        }
      }}>
        <Screen 
          name="Panel"
          component={Painel} 
          options={{
            headerShown: true,
            header: () => <Header title="Listing Music"/>
          }}
        />
        <Screen name="Music" component={Music} />
      </Navigator>
    </NavigationContainer>
  );
}