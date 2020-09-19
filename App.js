/**1. Refatore a sua aplicação. Crie, ao menos, dois componentes que serão utilizados
pelo componente principal.
2. Torne os itens da lista clicáveis.
3. Apague um contato da lista quando um toque longo (diferente da aula, em que
decidimos apagar com um toque simples) sobre ele acontecer. Descubra a propriedade
de TouchableOpacity que viabiliza identificar esse evento. */

import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

import CadastroItem from './components/CadastroItem';
import CadastroInput from './components/CadastroInput';

export default function App() {
  const [dados, setDados] = useState([]);
  const[idContato, setIdContato] = useState(10);

  //para adicionar o que foi digitado
  const adicionarDadosContato = (nome, telefone) => {
    console.log(dados);
    setIdContato (idContato + 2);
    setDados([...dados, {key: idContato.toString(), value:[nome, telefone]}]);
  }

  const removerDadosContato = (keyASerRemovida) => {
    setDados(dados => {
      return dados.filter((nome) => {
        nome.key !== keyASerRemovida
      })
    });
  }

  return (
    <View style={styles.telaPrincipal}>
      <Text style={styles.titulo}>Cadastro de Contatos</Text>
      <CadastroInput onAdicionarContato={adicionarDadosContato}/>
      <FlatList
          data = {dados}
          renderItem = {
            nome =>(
              <CadastroItem
                chave = {nome.item.key} 
                nome={nome.item.value}
                onDelete={removerDadosContato}/>
            )
          }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: "center"
  },
  telaPrincipal:{
    padding: 10
  },
  informacoes:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:"center"
  },
  nome: {
    width:'40%',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 4
  },
  telefone: {
    width:'40%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 2,
    marginBottom: 4
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
    }
    
});
