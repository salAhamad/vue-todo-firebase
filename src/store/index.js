import { createStore } from 'vuex'
import router from '../router'
import { auth, db } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"


export default createStore({
  state: {
    user: null,
    validationError: true,
    errorMessage: null,
  },
  getters: {
  },
  mutations: {

    SET_USER(state, user) {
      state.user = user
    },   

    CLEAR_USER(state) {
      state.user = null
    },

    FORM_VALIDATION(state, {err, errMsg}) {
      state.validationError = err
      state.errorMessage = errMsg
    }

  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;
      try {
        await signInWithEmailAndPassword(auth, email, password)
        router.push('/');
      } catch (error) {
        switch (error.code) {
          case ('auth/user-not-found'):
            alert('User not found')
            break;
          case ('auth/wrong-password'):
            alert('Wrong password')
            break;        
          default:
            alert('Something went wrong')
        }
      }
      commit('SET_USER', auth.currentUser);
      console.log(auth.currentUser);

    },

    async register({ commit }, details) {
      const {userName, firstName, lastName, email, password } = details;

      try {
        const { user = {} } = await createUserWithEmailAndPassword(auth, email, password);
        if (user.uid) {
          await setDoc(doc(db, 'users', user.uid), {
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: lastName,
            todos: [
              {
                userId: user.uid,
                todo: '',
                progress: false,
              }
            ]
          }).then(res => console.log(res)).then(err => console.log(err))
        }        
        router.push('/');

      } catch (error) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use");
            break;
          case 'auth/invalid-email':
            alert("Invalid email");
            break;
          case 'auth/operation-not-allowed':
            alert("Operation not allowed");
            break;
          case 'auth/weak-password':
            alert("Weak password");
            break;
          default:
            alert("Something went wrong");
        }
        return;
      }

      commit('SET_USER', auth.currentUser);
      console.log(auth.currentUser);
    },    
    
    async logout({ commit }) {
      await signOut(auth)
      commit('CLEAR_USER')
      router.push('/login')
    },
    
    fetchUser({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)
          if (router.isReady() && router.currentRoute.value.path === '/login')
            router.push('/')
        }
      })
    }
  },
  modules: {}
})
