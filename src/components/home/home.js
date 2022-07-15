import React from "react";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./cabecalho/cabecalho";
import Corpo from "./corpo/corpo";

export default function Home(){

    return <ScrollView>
        <Cabecalho />
        <Corpo />
    </ScrollView>
}


