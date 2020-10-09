export const setIsAuthenticated = (
  dispatch: Function,
  isAuthenticated: boolean
) => {
  return dispatch({
    type: 'CURRENT_USER',
    payload: isAuthenticated,
  })
}
