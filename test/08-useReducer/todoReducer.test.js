import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducer', () => {

  const initalState = [{
    id: 1,
    description: 'Demo Todo',
    done: false,
  }]

  test('should de regresar el estado inicial', () => {

    const newState = todoReducer(initalState, {})

    expect(newState).toBe(initalState)
  })

  test('should de agregar un TODO', () => {

    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'Nuevo todo #2',
        done: false
      }
    }

    const newState = todoReducer(initalState, action)
    
    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('should de eliminar un TODO', () => {
    
    const action = {
      type: '[TODO] Remove Todo',
      payload: 1
    }

    const newState = todoReducer(initalState, action)

    expect(newState.length).toBe(0)
    expect(newState).not.toContain(initalState)
  })

  test('should de realizar el Toggle del TODO', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: 1
    }

    const newState = todoReducer(initalState, action)

    expect(newState[0].done).toBeTruthy()
  })
})