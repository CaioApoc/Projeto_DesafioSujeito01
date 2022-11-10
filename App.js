import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Usuario from "./src/Usuario";

//nome e cargo

export default function App() {
  const [lista, setLista] = useState([
    { id: "1", nome: "Caio", cargo: "Dev Frontend" },
    { id: "2", nome: "Joao", cargo: "Dev Backend" },
    { id: "3", nome: "juliana", cargo: "Dev Fullstack" },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Seja bem vindo!</Text>
      <FlatList
        data={lista}
        renderItem={({ item }) => <Usuario data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    // justifyContent: "center",
  },
  texto: {
    marginTop: 40,
    fontSize: 25,
    fontWeight: "bold",
  },
});
