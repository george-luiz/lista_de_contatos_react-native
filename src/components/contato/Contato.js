import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import imagemContato from "../../../assets/contato.png"
import { useNavigation } from "@react-navigation/native"

export default function Contato( props) {
const navigation = useNavigation();
const [nome, setNome] = useState("");
const [telefone, setTelefone] = useState("");

function validacoes(){
    if(nome.trim() === ""){
        return Alert.alert("Campo Nome não pode ser vazio.");
    }

    if(nome.length <= 3){
        return Alert.alert("Campo Nome não pode ser menor ou igual a 3 caracteres.");
    }

    if(telefone.trim() === ""){
        return Alert.alert("Campo Telefone não pode ser vazio.");
    }

    if(telefone.length < 8){
        return Alert.alert("Campo Telefone não pode ser menor ou igual a 8 caracteres.");
    }

    props.route.params.setContato(
        [
            ...props.route.params.contatos, 
            {
                index: 2,
                imagem: imagemContato,
                nome: nome,
                telefone: telefone,
            }
        ]
    );
    navigation.navigate("Contatos");
}

    return <View>
        <Text style={estilos.textoNome}>Nome:</Text>
        <TextInput style={estilos.input}
        autoCapitalize="words" 
        keyboardType="name-phone-pad"
        value={nome}
        placeholder="Jessica"
        onChangeText={(e)=> {setNome(e)}}
        />
        <Text style={estilos.textoTelefone}>Telefone:</Text>
        <TextInput style={estilos.input}
        value={telefone}
        maxLength={11}
        placeholder="981635005"
        keyboardType="numeric"
        onChangeText={(e)=> {setTelefone(e)}}
        />
        <TouchableOpacity style={estilos.botao} 
            onPress = {() => {
                validacoes();
                
            }}>
                <Text style={estilos.textoBotao}>Salvar</Text>
            </TouchableOpacity>
    </View>
}


const estilos = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#000",
        padding: 10,
        marginHorizontal: 15,
        marginVertical: 4,
        borderRadius: 4,
    },
    textoNome: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 5,
        marginHorizontal: 15,
    }, 
    textoTelefone: {
        fontSize: 20,
        marginTop: 10,
        marginBottom: 5,
        marginHorizontal: 15,
    }, 
    botao: {
        backgroundColor: "#4169E1",
        marginTop: 20,
        marginHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
    },
    textoBotao: {
        color: "white",
        textAlign: "center",
        fontSize: 20,
    }
});