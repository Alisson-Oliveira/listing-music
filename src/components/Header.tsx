import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string,
}

export default function Header({title}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f9fafc',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#8fa7b3',
    fontSize: 16,
    fontWeight: 'bold',
  }
});