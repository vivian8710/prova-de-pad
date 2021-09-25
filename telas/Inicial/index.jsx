import React, { useState } from 'react'
import { ScrollView, TouchableOpacity, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import menu from '../../fotos/storage.png'
import { useNavigation } from '@react-navigation/core'
import deletar from '../../fotos/close.png'
import styled from 'styled-components/native';

import { criarTodo, removerTodo } from '../../store/tarefas/actions'

const Tela = styled.View`
  flex: 1;
  padding: 0 30px;
  background-color: #E5E5E5;
`;

const BlocoTitulo = styled.View`
  height: 128px;
  width: 100%;
  background-color: #fff;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 36px;
  align-items: center;
  justify-content: center;
`

const TituloApp = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
const BlocoCriar = styled.View`
margin-top: 40px;
  width: 100%;
  background: #FFFFFF;
  border-radius: 12px;
  height: 206px;
  padding: 18px 22px;
  align-items: center;
`
const TituloCriar = styled.Text`
  font-size: 24px;
  font-weight: bold;
`
const CaixaTexto = styled.TextInput`
  width: 100%;
  background: #E5E5E5;
  border: 1px solid rgba(0, 0, 0, 0.5);
  height: 60px;
  border-radius: 10px;
  margin-top: 18px;
  padding: 0 17px;
  font-size: 18px;

`







const BotãoCriar = styled.TouchableOpacity`
  margin-top: 28px;
  background: #6200EE;
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
const TextoBotãoCriar = styled.Text`
  font-size: 18px;
  color: #fff;
`





const Todo = styled.View`
  margin-top: 34px;
  height: 122px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 0 12px;
`

const TopoTodo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const TituloTodo = styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
`

const TodoTexto = styled.Text`
  margin-top: 10px;
  color: rgba(0, 0, 0, 0.5);
  font-weight: 300;
  font-size: 14px;
`

export function Inicio() {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const todos = useSelector(state => state.todos)

  const [texto, setTexto] = useState('')

  function addTodo() {
    dispatch(criarTodo({ titulo: todos.length, texto }))
  }

  function apagarTodo(id) {
    dispatch(removerTodo(id))
  }

  function redirecionar(todo) {
    navigation.navigate('Edição', { todo })
  }
  return (
    <Tela>
      <BlocoTitulo>
          <TituloApp>Aplicativo ToDo list</TituloApp>
        </BlocoTitulo>
      <BlocoCriar>
        <TituloCriar>Adicione aqui uma tarefa
      </TituloCriar>

      <CaixaTexto placeholder="tarefa" onChangeText={(e) => setTexto(e)} />
      <BotãoCriar onPress={addTodo}><TextoBotãoCriar>ADICIONAR TAREFA</TextoBotãoCriar></BotãoCriar>
      </BlocoCriar>

      <ScrollView style={{marginTop: 14}} showsVerticalScrollIndicator={false}>
        {todos.map(todo => (
          <Todo key={todo.id}>
          <TopoTodo>
            <TouchableOpacity onPress={() => redirecionar(todo)}>
              <Image source={menu} />
            </TouchableOpacity>
            <TituloTodo>{"Tarefa#" + todo.titulo}</TituloTodo>
            <TouchableOpacity onPress={() => apagarTodo(todo.id)}>
              <Image source={deletar} />
            </TouchableOpacity>
          </TopoTodo>
    
          <TodoTexto>{todo.texto}</TodoTexto>
        </Todo>
        ))}
      </ScrollView>
    </Tela>
  )
}