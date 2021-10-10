import { observable } from './observer.js'

export const createStore = (reducer) => {
  const state = observable(reducer())
  const frozenState = {}
  Object.keys(state).forEach(key => {
    Object.defineProperty(frozenState, key, {
      get: () => state[key],
    })
  })

  const dispatch = (action) => {
    const newState = reducer(state, action)

    for (const [key, value] of Object.entries(newState)) {1
      if (state[key] === null) continue
      state[key] = value
    }
  }

  const getState = () => frozenState

  return { getState, dispatch }
}