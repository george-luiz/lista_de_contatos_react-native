import React from "react";
import {StyleSheet, View, Text} from "react-native"

export default function Cabecalho() {
    return <View style={estilos.cabecalho}>
            <Text style={estilos.titulo}>
                Contatos
            </Text>
        </View>
};

const estilos = StyleSheet.create({
    cabecalho: {
        backgroundColor: "#4169E1",
        paddingVertical: 10,
        elevation: 4,
        marginBottom: 8,
    },
    titulo: {
        textAlign: "center",
        fontSize: 20,
        color: "white",
    }
});