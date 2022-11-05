// TODO: TS
import {
  TypedUseSelectorHook,
  useDispatch as BaseUseDispatch,
  useSelector as BaseUseSelector
} from 'react-redux'
import type { RootState, Dispatch } from '@/store'

/**
 * Use throughout your app instead of plain `useDispatch` and `useSelector`
 */
export const useDispatch: () => Dispatch = BaseUseDispatch
export const useSelector: TypedUseSelectorHook<RootState> = BaseUseSelector
