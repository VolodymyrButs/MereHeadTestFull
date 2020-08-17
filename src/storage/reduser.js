import throtle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import { createStore } from 'redux'

const initState = loadState()
const users = (users = initState, action) => {
    switch (action.type) {
        case 'add':
            return {
                users: action.data,
            }
        default:
            return users
    }
}

export const store = createStore(users)
store.subscribe(
    throtle(() => {
        saveState({ users: store.getState().users })
    }, 1000)
)
