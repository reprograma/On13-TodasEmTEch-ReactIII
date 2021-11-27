import { render, screen, fireEvent} from '@testing-library/react'
import List from './List'

describe('List.jsx', () => {
  it('should be able to add a task', () => {
    render(<List />)

    const inputElement = screen.getByPlaceholderText('Adicionar nova tarefa')
    const buttonElement = screen.getByTestId('add-task')
    
    fireEvent.change(inputElement, {
      target: {
        value: 'Estudar react'
      }
    })

    fireEvent.click(buttonElement)

    const addedFirstTaskTitle = screen.getByText('Estudar react')

    expect(addedFirstTaskTitle).toHaveTextContent('Estudar react')

    fireEvent.change(inputElement, {
      target: {
        value: 'Estudar teste'
      }
    })

    fireEvent.click(buttonElement)

    const addedSecondTaskTitle = screen.getByText('Estudar teste')
    expect(addedSecondTaskTitle).toHaveTextContent('Estudar teste')


  })

  it('should not be able to add task empty', () => {
    render(<List />)

    const buttonElement = screen.getByTestId('add-task')

    fireEvent.click(buttonElement)

    expect(screen.queryByTestId('task')).not.toBeInTheDocument()
  })

  it('should be able to delete a task', () => {
    render(<List />)

    const inputElement = screen.getByPlaceholderText('Adicionar nova tarefa')
    const buttonElement = screen.getByTestId('add-task')
    
    fireEvent.change(inputElement, {
      target: {
        value: 'Estudar react'
      }
    })

    fireEvent.click(buttonElement)

    fireEvent.change(inputElement, {
      target: {
        value: 'Estudar teste'
      }
    })

    fireEvent.click(buttonElement)

    const addedFirstTaskTitle = screen.getByText('Estudar react')
    const addedSecondTaskTitle = screen.getByText('Estudar teste')

    expect(addedFirstTaskTitle).toBeInTheDocument()
    expect(addedSecondTaskTitle).toBeInTheDocument()

    const [addedFirstTaskTitleRemoveButon] = screen.getAllByTestId('remove-task')
    fireEvent.click(addedFirstTaskTitleRemoveButon)

    expect(addedFirstTaskTitle).not.toBeInTheDocument()
    expect(addedSecondTaskTitle).toBeInTheDocument()
  })
})