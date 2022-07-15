import { StyleSheet } from "react-native";
 
export default StyleSheet.create({
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
        fontSize: 20,
    }
});