import * as firebase from 'firebase'
import 'firebase/firestore'

import firebaseConfig from './config'

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const Firebase = {
    todos: () => {
        return db.collection('todos')
    },
    addTodos: (tache, categorie) => {
        return db.collection('todos').add(
            {
                tache,
                categorie: db.doc('categorie/' + categorie)
            })
    },
    categories: () => {
        return db.collection('Categorie')
    }
}

export default Firebase