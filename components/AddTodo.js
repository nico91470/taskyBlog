import React, { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Picker } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { firebaseHOC } from '../Firebase'

function AddTodo({ addTodo, firebase }) {

    const [tache, setTache] = useState('')
    const [categories, setCategories] = useState([])
    const [categorie, setCategorie] = useState('')

    useEffect(() => {
        const loadCategories = () => firebase.categories().onSnapshot(
            (querySnapshot) => {
                const list = []
                querySnapshot.forEach(element => {
                    const { categorie } = element.data()
                    list.push({
                        categorie,
                        id: element.id
                    })
                });
                setCategories(list)
            }
        )

        loadCategories()
    }, [])

    const renderCategorie = () => {
        return categories.map(item =>
            <Picker.Item label={item.categorie} value={item.id} key={item.id} />
        )
    }

    return (
        <View>
            <TextInput
                placeholder='Saisir la nouvelle tâche'
                onChangeText={(text) => setTache(text)}
                style={styles.textInput}
                value={tache}
            />
            <Picker
                selectedValue={categorie}
                onValueChange={(value) => setCategorie(value)}
            >
                {renderCategorie()}
            </Picker>
            <MaterialIcons
                name={'save'}
                size={40}
                style={styles.buttonStyle}
                onPress={() => addTodo(tache, categorie)}
            />
        </View>
    )
}

export default firebaseHOC(AddTodo)

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