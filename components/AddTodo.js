import React, { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function AddTodo({ addTodo }) {

    const [tache, setTache] = useState('')
    return (
        <View>
            <TextInput
                placeholder='Saisir la nouvelle tâche'
                onChangeText={(text) => setTache(text)}
                style={styles.textInput}
                value={tache}
            />
            <MaterialIcons
                name={'save'}
                size={40}
                style={styles.buttonStyle}
                onPress={() => addTodo(tache)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignSelf: 'center',
        margin: 10
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        margin: 5,
        fontSize: 18,
        borderRadius: 6,
    }
})