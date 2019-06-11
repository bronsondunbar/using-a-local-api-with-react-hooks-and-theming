import React from 'react'

export const Store = React.createContext()

const initialState = {
  posts: [],
  post: [],
  favourites: [],
  selectedTheme: 'default'
}

function reducer(state, action) {
  switch (action.type) {
  	case 'UPDATE_THEME':
      return { ...state, selectedTheme: action.payload }
    case 'GET_POSTS':
      return { ...state, posts: action.payload }
    case 'GET_POST':
      return {
        ...state,
        post: [action.payload]
      }
    case 'ADD_FAV':
		  return {
		    ...state,
		    favourites: [...state.favourites, action.payload]
		  }
		case 'REMOVE_FAV':
		  return {
		    ...state,
		    favourites: action.payload
			}
    default:
      return state;
  }
}

export function StoreProvider(props) {
	const [state, dispatch] = React.useReducer(reducer, initialState)
	const value = { state, dispatch }
  return <Store.Provider value={value}>{props.children}
  </Store.Provider>
}