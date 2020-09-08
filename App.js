/**Crie uma aplicação React Native com Expo que permita o cadastro e listagem de contatos. 
 * Contatos possuem nome e telefone. 
 * Ela precisará de dois campos para inserção de dados e um botão para fazer a inserção.
 *      //useState para capturar os dados digitados pelo usuário 
 * Use um FlatList, como visto em aula, para exibir os dados de contato. 
 * Garanta que cada contato possui identificadaor único na lista. 
 * A lista de identificadores deve começar de 10 e somente números pares positivos podem ser utilizados como identificadores. 
 * Seja criativo, use “CSS” para descrever como se dá a exibição de cada item na lista.  */

import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const[nome, setNome] = useState('');
  const[telefone, setTelefone] = useState('');
  const [dados, setDados] = useState([]);

  //captura o texto digitado
  const capturaNome = (nome) => setNome(nome);
  const capturaTelefone = (telefone) => setTelefone(telefone);

  //para adicionar o que foi digitado
  const adicionarDadosContato = () => {
    setDados(dados => [...dados, nome, telefone]);
    console.log(dados);
  }

  return (
    <View style={styles.telaPrincipal}>
      <Text style={styles.titulo}>Cadastro de Contatos</Text>
      <View style={styles.informacoes}>
        <TextInput 
          placeholder="Digite seu nome" 
          style={styles.nome}
          onChangeText={capturaNome}
          value={nome}
        />
        <TextInput 
          placeholder="Digite seu telefone" 
          style={styles.telefone}
          onChangeText={capturaTelefone}
          value={telefone}
        />
      </View>
      <View>
        <Button 
          title='Adicionar'
          onPress={adicionarDadosContato}
        />
      </View>
      <View>
        {
          dados.map((nome, telefone) =>
          <View> 
            <Text key={dados} style={styles.itemNaLista}>{nome}</Text>

            <Text key={dados} style={styles.itemNaLista}>{telefone}</Text>
          </View>)
        }
      </View>
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
    width:'40%',

  }
});
