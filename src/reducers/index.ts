import user from './user'

const combineReducers = (reducers: any) => {
  return (state: any = {}, action: any) =>
    Object.keys(reducers).reduce(
      (nextState, key) => ({
        ...nextState,
        [key]: reducers[key](state[key], action),
      }),
      {}
    )
}

const combined = combineReducers({ user })

export default combined
