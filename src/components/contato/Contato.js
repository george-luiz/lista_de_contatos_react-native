import React from "react";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from "react-native";
import imagemContato from "../../../assets/contato.png";
import { useNavigation } from "@react-navigation/native";
import estilos from "./estilos";

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
                index: Math.floor(Math.random() * 256),
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