import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { StyleSheet, Text, View, Image } from 'react-native';
import { RectButton, ScrollView, TextInput } from 'react-native-gesture-handler';

export default function Panel() {
  const navigation = useNavigation();
  
  function handleToMusic() {
    navigation.navigate('Music');
  }

  return (
    <View style={styles.container}>
      
      <TextInput 
        style={styles.search}
        placeholder="Song Artist Genre"
      />

      <View style={styles.containerScroll}>
        <Text style={styles.titleFolders}>Your folders</Text>
        <ScrollView>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
          <RectButton style={styles.containerMusic} onPress={handleToMusic}>
            <View style={styles.image}></View>
            <Text style={styles.title}>Rock</Text>
          </RectButton>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  search: {
    height: 52,
    margin: 12,

    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 12,
    borderColor: '#8fa7b3',

    padding: 12,

    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f3f5'
  },

  containerScroll: {
    marginLeft: 12,
    marginRight: 12,
  },

  containerMusic: {
    marginTop: 6,
    marginBottom: 6,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f2f3f5'
  },
  
  image: {
    height: 64,
    width: 64,

    marginLeft: 12,
    marginRight: 12,
    
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 6,
    
    backgroundColor: '#dddddd',
    borderColor: '#8fa7b3',
  },

  title: {
    fontWeight: '600',
    fontSize: 18,
  },

  titleFolders: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 12,
  }
});