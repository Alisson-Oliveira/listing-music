import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import logoListingMusicImg from '../images/logo-listing-music.png';

interface HeaderProps {
  showButtons: boolean;
}

export default function Header({showButtons = true}: HeaderProps) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {
        showButtons ? (
          <Image source={logoListingMusicImg} height={24} width={24} />
        ) : (
          <View style={styles.containerButtons}>
            <BorderlessButton onPress={navigation.goBack}>
              <Feather name='arrow-left' size={24} color='#FFFFFF'/>
            </BorderlessButton>
            <BorderlessButton>
              <Feather name='more-horizontal' size={24} color='#FFFFFF'/>
            </BorderlessButton>
          </View>
        )
      }
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexDirection: 'row',
    backgroundColor: '#555353',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  containerButtons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});