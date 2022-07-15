import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import imagemContato from "../../../../assets/contato.png"
import { useNavigation } from "@react-navigation/native"

export default function Corpo(){

    const navigation = useNavigation();

    const [contatos, setContato] = useState([]);

    useEffect(()=> {
        setContato(
            [
                {
                    index: 1,
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

const estilos = StyleSheet.create({
    card: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: "row",
        borderRadius: 8,
        elevation: 4,
    },
    imagem: {
        height: 48,
        width: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginHorizontal: 16,
    },
    informacoes: {
        flex: 1,
        marginVertical: 16,
    },
    nome: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: "bold",
        marginBottom: 8,
    }, 
    numero: {
        fontSize: 18,
        lineHeight: 19,
    },
    botao: {
        backgroundColor: "#4169E1",
        marginHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 20,
    },
    textoBotao: {
        color: "white",
        textAlign: "center",
        fontSize: 15,
    }
});