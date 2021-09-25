import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { removerTodo} from '../../store/tarefas/actions'

import styled from 'styled-components/native';
const Tela = styled.View`
  flex: 1;
  padding: 0 30px;
  background-color: #E5E5E5;
`
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
const Todo =styled.View`
  margin-top: 46px;
  width: 100%;
  height: 370px;
  background: #fff;
  border-radius: 10px;
`



const TituloTodo= styled.Text`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  text-align: center;
`

const TextoTodo = styled.Text`
  margin-top: 8px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 14px;
  color: rgba(0, 0, 0, 0.5);
`

const Editar=styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #6200EE;
  border-radius: 4px;
  margin-top: 26px;
  align-items: center;
  justify-content: center;
`

const Deletar = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #EB3223;
  border-radius: 4px;
  margin-top: 26px;
  align-items: center;
  justify-content: center;
`

const TextoBotões = styled.Text`
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
`

export function Edição({ route }) {
  const { todo } = route.params

  const dispatch = useDispatch()
  const navigation = useNavigation()

  function remover() {
    dispatch(removerTodo(todo.id))
    navigation.goBack()
  }

  return (
    <Tela>
      <BlocoTitulo>
        <TituloApp>Aplicativo ToDo list</TituloApp>
      </BlocoTitulo>
      
      <Todo>
        <TituloTodo>{'Tarefa#' + todo.titulo}</TituloTodo>
        <TextoTodo>{todo.texto}</TextoTodo>
      </Todo><Editar>
        <TextoBotões>EDITAR TAREFA</TextoBotões></Editar>
      <Deletar onPress={remover}><TextoBotões>REMOVER TAREFA</TextoBotões></Deletar>
    </Tela>
  )
}