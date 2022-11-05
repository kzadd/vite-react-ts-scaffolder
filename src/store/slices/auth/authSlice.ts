// TODO: TS
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  accessToken: string | null
  error: string | null
  loading: boolean
}

const initialState: AuthState = {
  accessToken: null,
  error: null,
  loading: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onGetAccessToken: state => {
      state.loading = true
    },
    onGetAccessTokenError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
    },
    onGetAccessTokenSuccess: (state, action: PayloadAction<string | null>) => {
      state.loading = false
      state.accessToken = action.payload
    }
  }
})

export const {
  onGetAccessToken,
  onGetAccessTokenError,
  onGetAccessTokenSuccess
} = authSlice.actions
