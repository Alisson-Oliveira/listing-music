
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function Panel() {
  const navigation = useNavigation();
  
  function handleToMusic() {
    navigation.navigate('Music');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      
      <View style={styles.containerSearch}>
        <Feather name='search' size={24} color='#FFFFFF' />
        <TextInput
          style={styles.search} 
          placeholder='Song Artist Genre'
          placeholderTextColor='#FFFFFF'
        />
      </View>

      <View style={styles.containerFolders}>
        <Text style={styles.titleFolders}>Your folders</Text>
        <RectButton style={styles.containerMusic} onPress={handleToMusic}>
          <View style={styles.image}>
            <Feather name="folder" size={54} color='#FFFFFF'/>
          </View>
          <Text style={styles.title}>Rock</Text>
        </RectButton>
        <RectButton style={styles.containerMusic} onPress={handleToMusic}>
          <View style={styles.image}>
            <Feather name="folder" size={54} color='#FFFFFF'/>
          </View>
          <Text style={styles.title}>Sertanejo</Text>
        </RectButton>
        <RectButton style={styles.containerMusic} onPress={handleToMusic}>
          <View style={styles.image}>
            <Feather name="folder" size={54} color='#FFFFFF'/>
          </View>
          <Text style={styles.title}>Pop</Text>
        </RectButton>
        <RectButton style={styles.containerMusic} onPress={handleToMusic}>
          <View style={styles.image}>
            <Feather name="folder" size={54} color='#FFFFFF'/>
          </View>
          <Text style={styles.title}>Eletrônica</Text>
        </RectButton>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
  containerSearch: {
    marginTop: 24,
    marginHorizontal: 12,
    marginBottom: 6,
    height: 52,
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    flexDirection: 'row',
    color: '#FFFFFF',
    backgroundColor: '#555353',
    elevation: 5,
  },

  search: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 12,
    marginRight: 24,
  },

  containerFolders: {
    marginLeft: 12,
    marginRight: 12,
    marginBottom: 12,
  },

  titleFolders: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 12,
  },

  containerMusic: {
    marginTop: 6,
    marginBottom: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  
  image: {
    height: 84,
    width: 84,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555353',
    elevation: 2,
  },

  title: {
    fontWeight: '600',
    color: '#FFFFFF',
    fontSize: 18,
  },
});