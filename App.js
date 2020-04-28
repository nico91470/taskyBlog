import React, { useState } from 'react';
import { Text, View, StyleSheet, Modal } from 'react-native';

import { Octicons } from '@expo/vector-icons'
import Constants from 'expo-constants';

import Firebase, { FirebaseProvider } from './Firebase'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false)

  const addTodo = (tache) => {
    Firebase.addTodos(tache)
    setModalVisible(false)
  }

  return (
    <FirebaseProvider value={Firebase}>
      <View style={styles.container}>

        <Modal visible={modalVisible} animationType='slide'>
          <View>
            <Octicons
              name={'x'}
              size={40}
              style={styles.buttonStyle}
              onPress={() => setModalVisible(false)}
            />
            <AddTodo addTodo={addTodo} />
          </View>
        </Modal>

        <Text style={{
          fontSize: 25,
          textAlign: 'center'
        }}>
          Tâches à traiter
        </Text>
      </View>
      <Octicons
        name={'diff-added'}
        size={40}
        style={styles.buttonStyle}
        onPress={() => setModalVisible(true)} />
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
  buttonStyle: {
    alignSelf: 'center',
    margin: 10
  }
});