import { createStore } from './store/createStore'

const initState = {
    path: '', userId: '', category: ''
}

export const SET_CATEGORY = 'setCategory'
export const SET_LOGIN = 'login'
export const SET_LOGOUT = 'logout'
export const SET_PATH = 'setPath'

export const store = createStore((state = initState, action = {}) => {
  switch (action.type) {
    case 'setPath':
      return { ...state, path: action.path }
    case 'login':
      return { ...state, userId: action.id, category: '' }
    case 'logout':
      return { path: '', userId: '', category: ''}
    case 'setCategory' :
      return { ...state, category: action.val }
    default:
      return state
  }
})

export const setCategory = val => ({ type: SET_CATEGORY, val })
export const setLogin = (id, dong1, dong2, currentDong) => ({ type: SET_LOGIN, id, dong1, dong2, currentDong })
export const setLogout = () => ({ type: SET_LOGOUT })
export const setPath = path => ({ type: SET_PATH, path })