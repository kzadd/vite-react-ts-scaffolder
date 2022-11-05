// TODO: TS
import { configureStore } from '@reduxjs/toolkit'
import Reducers from './reducers'

const store = configureStore({ reducer: Reducers })

/**
 * Infer the `RootState` and `Dispatch` types from the store itself
 */
export type RootState = ReturnType<typeof store.getState>

/**
 * Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
 */
export type Dispatch = typeof store.dispatch

export default store
