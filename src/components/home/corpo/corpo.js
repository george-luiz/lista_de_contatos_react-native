import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import imagemContato from "../../../../assets/contato.png"
import { useNavigation } from "@react-navigation/native"
import estilos from "./estilos"

export default function Corpo(){

    const navigation = useNavigation();
    const [contatos, setContato] = useState([]);

    useEffect(()=> {
        setContato(
            [
                {
                    index: Math.floor(Math.random() * 256),
                    imagem: imagemContato,
                    nome: "George",
                    telefone: "981635005"
                },
           ]
        );
    }, []);

    
    return <View>
                {contatos.map(({ index, imagem, nome, telefone}) => {
                        return <View key={index} style={estilos.card}>
                        <Image source={imagem} style={estilos.imagem}/>
                        <View style={estilos.informacoes}>
                            <Text style={estilos.nome}>{nome}</Text>
                            <Text style={estilos.numero}>{telefone}</Text>
                        </View>
                    </View>
                })} 
            <TouchableOpacity style={estilos.botao} 
                onPress = {() => {
                    navigation.navigate("Criar contato", { contatos: contatos, setContato: setContato});
                }}>
                <Text style={estilos.textoBotao}>Criar contato</Text>
            </TouchableOpacity>
    </View>
};
