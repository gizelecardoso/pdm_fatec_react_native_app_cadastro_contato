import React ,{useState} from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet
} from 'react-native';


const CadastroInput = (props) => {
    const[nome, setNome] = useState('');
    const[telefone, setTelefone] = useState('');

    const capturaNome = (nome) => {setNome(nome);}
    const capturaTelefone = (telefone) => {setTelefone(telefone);}

    return(
        <View style = {styles.cadastroView}>
            <View style = {styles.inputs}>
                <TextInput 
                    placeholder="Digite seu nome" 
                    style={styles.cadastroInputText}
                    onChangeText={capturaNome}
                    value={nome}
                />
                <TextInput 
                    placeholder="Digite seu telefone" 
                    style={styles.cadastroInputText}
                    onChangeText={capturaTelefone}
                    value={telefone}
                />
            </View>
             <Button 
                title='Adicionar'
                onPress={() => props.onAdicionarContato(nome, telefone)}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    cadastroView: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8
        },
    inputs: {
            flexDirection: 'row',
            width: '80%',
            padding: 2
        },
            
    cadastroInputText: {
        flexDirection: 'row',
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 2
        }
        
});

export default CadastroInput;