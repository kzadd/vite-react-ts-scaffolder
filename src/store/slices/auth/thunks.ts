// TODO: TS
import {
  onGetAccessToken,
  onGetAccessTokenError,
  onGetAccessTokenSuccess
} from './authSlice'

export const onGetAccessTokenThunk =
  (payload: string) => async (dispatch: any) => {
    dispatch(onGetAccessToken())

    try {
      return dispatch(onGetAccessTokenSuccess(payload))
    } catch (error) {
      return dispatch(onGetAccessTokenError('Error'))
    }
  }
