import { act, renderHook } from '@testing-library/react'
import { useForm } from '../../src/hooks/useForm'

describe('Pruebas en el hook useForm,', () => {

  const initalForm = {
    name: 'Fernando',
    email: 'fernando@google.com',
  }
  
  test('should de regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initalForm))

    expect(result.current).toEqual({
      name: initalForm.name,
      email: initalForm.email,
      formState: initalForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    })
  })

  test('should de cambiar el nombre del formulario', () => {
    const newValue = 'Juan'
    const { result } = renderHook(() => useForm(initalForm))
    
    const { onInputChange } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: newValue }})
    })

    expect(result.current.name).toBe(newValue)
    expect(result.current.formState.name).toBe(newValue)

  })
  
  test('should de realizar el reset del formulario', () => {
    const { result } = renderHook(() => useForm(initalForm))
    
    const { onInputChange, onResetForm } = result.current

    act(() => {
      onInputChange({ target: { name: 'name', value: 'Juan' }})
      onResetForm()
    })

    expect(result.current.name).toBe(initalForm.name)
    expect(result.current.formState.name).toBe(initalForm.name)

  })
})