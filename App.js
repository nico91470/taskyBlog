import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Firebase, { FirebaseProvider } from './Firebase'
import Todos from './components/Todos';

export default function App() {
  return (
    <FirebaseProvider value={Firebase}>
      <View style={styles.container}>
        <Text style={{
          fontSize: 25,
          textAlign: 'center'
        }}>
          Tâches à traiter
        </Text>
      </View>
      <Todos />
    </FirebaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});