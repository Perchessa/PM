import * as ACTION_TYPES from '../types/auth'
import { IUserDataProps } from '@interfaces/auth'

export const requestAuth = () => {
  return {
    type: ACTION_TYPES.REQUEST_AUTH,
  }
}

export const authSuccess = (value: any) => {
  return {
    type: ACTION_TYPES.AUTH_SUCCESS,
    payload: value,
  }
}

export const authError = () => {
  return {
    type: ACTION_TYPES.AUTH_ERROR,
  }
}

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  }
}

export const updateUserSuccess = (value: IUserDataProps) => {
  return {
    type: ACTION_TYPES.UPDATE_USER_SUCCESS,
    payload: value,
  }
}
