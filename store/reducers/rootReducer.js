import authReducer from './authReducer'
import projectReducer from './projectReducer'
import shopReducer from './shopReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
    shop: shopReducer,
})

export default rootReducer