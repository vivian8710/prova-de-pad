export function criarTodo(todo) {
  return {
    type: 'CRIAR_TODO',
    payload: {
      todo
    }
  }
}

export function removerTodo(id) {
  return {
    type: 'REMOVER_TODO',
    payload: {
      id
    }
  }
}