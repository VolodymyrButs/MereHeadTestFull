import throtle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'

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

export const store = createStore(users, applyMiddleware(ReduxThunk))

store.subscribe(
    throtle(() => {
        saveState({ users: store.getState().users })
    }, 500)
)
