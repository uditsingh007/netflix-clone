import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAHDm5k8ho6YyFiy9jKZpmsJV3nefdKn_Q',
  authDomain: 'netflix-clone-be92c.firebaseapp.com',
  projectId: 'netflix-clone-be92c',
  storageBucket: 'netflix-clone-be92c.appspot.com',
  messagingSenderId: '497259068148',
  appId: '1:497259068148:web:2ecf1fc5d7b89b28efbca1',
  measurementId: 'G-GXZMENLXFS',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
