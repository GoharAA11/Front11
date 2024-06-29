import { useEffect, useReducer } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { reducer } from './lib/reducer'
import { InitialState } from './lib/InitialState'
import { ToDoContext } from './lib/context'
import { getAll } from './lib/api'
import { ActionTypes } from './lib/types'


function App() {

  const [state, dispatch] = useReducer(reducer, InitialState)
  useEffect(() => {
    getAll()
      .then(res => {
        dispatch({ type: ActionTypes.setTodos, payload: res })
      })
  }, [])
  
  return (
    <>
      <ToDoContext.Provider value={{ state, dispatch }}>
        <ToDoList

        />
      </ToDoContext.Provider>



    </>)
}

export default App

