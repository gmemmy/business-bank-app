import { setIsAuthenticated } from './user'

export default (dispatch: Function) => {
  return {
    setIsAuthenticated: setIsAuthenticated.bind(null, dispatch),
  }
}
