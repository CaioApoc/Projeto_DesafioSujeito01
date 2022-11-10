import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Usuario(props) {
  return (
    <View style={styles.areaUsuario}>
      <Text style={styles.textoUsuario}>Nome: {props.data.nome}</Text>
      <Text style={styles.textoUsuario}>Cargo: {props.data.cargo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  areaUsuario: {
    backgroundColor: "blue",
    height: 150,
    width: 411,
    justifyContent: "center",
    marginTop: 20,
  },
  textoUsuario: {
    color: "#fff",
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Usuario;
