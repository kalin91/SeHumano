import {LayOut, Content} from "../components/LayOut"
import { LINKS } from '../helpers/constants';
const initialState ={
  pageLayOut:  new LayOut("rgb(255,0,0)","rgb(0,255,255)","rgb(0,0,255)",LINKS.home,false),
  pageContent: new Content(null,null),
  logged: false
}

function reducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case 'SET_NAVBAR_THEME': {
      return {
        ...state,
        pageLayOut: payload
      }
    }
    case 'SET_NAVBAR_CONTENT': {
      return {
        ...state,
        pageContent: payload
      }
    }
    case 'SET_LOG_STATUS': {
      return {
        ...state,
        logged: payload
      }
    }
    default: {
      return state
    }
  }
}

export default reducer