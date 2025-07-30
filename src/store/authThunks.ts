import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginStart, loginSuccess, loginFailure } from './authSlice'

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async ({ username, password }: { username: string; password: string }, { dispatch }) => {
    dispatch(loginStart())
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    if (username.trim() && password.trim()) {
      const userData = {
        username: username,
        email: `${username.toLowerCase()}@restart.com`
      }
      dispatch(loginSuccess(userData))
      return { success: true, user: userData }
    } else {
      dispatch(loginFailure())
      throw new Error('Invalid credentials')
    }
  }
)
