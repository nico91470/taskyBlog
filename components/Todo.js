import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Todo({ todo }) {

    return (
        <View>
            <Text style={{ padding: 5 }}>{todo}</Text>
        </View>
    )
}