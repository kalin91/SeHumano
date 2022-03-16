//import axios from 'axios'

export function setNavbarTheme(pageLayOut) {
  return { type: 'SET_NAVBAR_THEME', payload: pageLayOut }
}
export function setNavbarContent(pageContent) {
  return { type: 'SET_NAVBAR_CONTENT', payload: pageContent }
}
export function setLogStatus(logged) {
  return { type: 'SET_LOG_STATUS', payload: logged }
}