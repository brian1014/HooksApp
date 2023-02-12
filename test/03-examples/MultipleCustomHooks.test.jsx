import { fireEvent, render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks'
import { useCounter } from '../../src/hooks/useCounter'
import { useFetch } from '../../src/hooks/useFetch'

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => {
  
  const increment = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    increment
  })

  beforeEach(() => {
    jest.clearAllMocks()
  })
  
  test('should de mostrar el componente por defecto', () => {
    
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    })

    render(<MultipleCustomHooks />)

    expect(screen.getByText('Loading...')).toBeTruthy()
    expect(screen.getByText('Breaking Bad Quotes')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'Next quote'})
    expect(nextButton.disabled).toBeTruthy()
  })

  test('should de mostrar un Quote', () => {
    
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    })

    render(<MultipleCustomHooks />)
    
    expect(screen.getByText('Hola Mundo')).toBeTruthy()
    expect(screen.getByText('Fernando')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'Next quote'})
    expect(nextButton.disabled).toBeFalsy()
  })

  test('should de llamar la funcion de incrementar', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Fernando', quote: 'Hola Mundo' }],
      isLoading: false,
      hasError: null,
    })
    render(<MultipleCustomHooks />)

    const nextButton = screen.getByRole('button', { name: 'Next quote'})
    fireEvent.click(nextButton)

    expect(increment).toHaveBeenCalled()
    
  })
})