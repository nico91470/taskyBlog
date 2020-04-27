import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { firebaseHOC } from '../Firebase'
import Todo from './Todo'

function Todos({ firebase }) {
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const loadTodos = () => firebase.todos().onSnapshot(
            (query) => {
                const list = []
                query.forEach(doc => {
                    const { tache } = doc.data()
                    list.push({
                        id: doc.id,
                        tache
                    })
                })
                setTodos(list)
                setLoading(false)
            }
        )

        loadTodos()
    }, [])

    const renderTodos = () => {
        return todos.map(item =>
            <Todo todo={item.tache} key={item.id} />
        )
    }

    if (loading) {
        return null
    }

    return (
        <View>
            {renderTodos()}
        </View>
    )
}

export default firebaseHOC(Todos)