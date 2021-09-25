const todos = (state = [], action) => {
  switch (action.type) {
    case 'CRIAR_TODO':
      const { todo } = action.payload
      
      return [
        ...state,
        {
          id: new Date().toString(),
          ...todo
        }
      ]
  
    case 'REMOVER_TODO':
      const { id } = action.payload

      const todosSemExcluido = state.filter(todo => todo.id !== id)

      return todosSemExcluido

    default:
      return state
  }
}

export { todos }