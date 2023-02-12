import { fireEvent, render, screen } from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('Pruebas en <LoginPage />', () => {
  
  const user = { id: 123, name: 'Juan', email: 'juan@google.com' }

  const setUserMock = jest.fn()

  test('should de mostrar el componente sin el usuario', () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    )
    
    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('null')
  })
  
  test('should de llamar la funcion setUser cuando se da click', () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )
    
    const btn = screen.getByRole('button')
    fireEvent.click(btn)

    expect(setUserMock).toHaveBeenCalled()
    expect(setUserMock).toHaveBeenCalledWith(user)

  })
})