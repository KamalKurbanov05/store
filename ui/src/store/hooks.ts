import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'
import type { RootAppState, AppDispatch } from './index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootAppState> = useSelector;