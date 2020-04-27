import React, { createContext, Component } from 'react'

const FirebaseContext = createContext({})

export const FirebaseProvider = FirebaseContext.Provider
export const FirebaseConsumer = FirebaseContext.Consumer

export const firebaseHOC = Component => props => (
    <FirebaseConsumer>
        {state => <Component {...props} firebase={state} />}
    </FirebaseConsumer>
)