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
          backgroundColor: '#2E2E2C',
        }
      }}>
        <Screen 
          name="Panel"
          component={Painel} 
          options={{
            headerShown: true,
            header: () => <Header showButtons={true} />
          }}
        />
        <Screen 
          name="Music"
          component={Music} 
          options={{
            headerShown: true,
            header: () => <Header showButtons={false} />
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}