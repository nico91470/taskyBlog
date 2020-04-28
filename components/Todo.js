import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function Todo({ todo }) {

    return (
        <View>
            <Text style={styles.text}>{todo}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 5,
        fontSize: 15,
        textAlign: 'center'
    }
})