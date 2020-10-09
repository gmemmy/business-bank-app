import initialState from './initialState'

type actionType = {
  type: string
  payload: any
}

const userReducer = (state: any = initialState, action: actionType) => {
  switch (action.type) {
    case 'CURRENT_USER':
      return {
        ...state,
        isAuthenticated: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
