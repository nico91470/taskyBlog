import * as firebase from 'firebase'
import 'firebase/firestore'

import firebaseConfig from './config'

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const Firebase = {
    todos: () => {
        return db.collection('todos')
    },
    addTodos: (tache) => {
        return db.collection('todos').add({ tache })
    }
}

export default Firebase