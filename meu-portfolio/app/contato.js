import React from "react";
import { View, Text, TouchableOpacity, Image, Linking, StyleSheet, ScrollView } from "react-native";

export default function Contato() {
  const contatos = [
    {
      nome: "GitHub",
      link: "https://github.com/seuusuario",
      icone: require("../assets/images/github.png"), // coloque o ícone aqui
    },
    {
      nome: "LinkedIn",
      link: "https://linkedin.com/in/seuusuario",
      icone: require("../assets/images/linkedin.png"),
    },
    {
      nome: "WhatsApp",
      link: "https://wa.me/55seunumerocomddd", // exemplo: https://wa.me/5581999999999
      icone: require("../assets/images/whatsapp.png"),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Entre em Contato</Text>
      <Text style={styles.subtitulo}>Sinta-se à vontade para me chamar em qualquer uma das redes abaixo:</Text>

      <View style={styles.caixaContatos}>
        {contatos.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.botao}
            onPress={() => Linking.openURL(item.link)}
          >
            <Image source={item.icone} style={styles.icone} />
            <Text style={styles.textoBotao}>{item.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#3b3b3b1e", // fundo preto (segue padrão do portfólio)
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  titulo: {
    color: "#575656ff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitulo: {
    color: "#635f5fff",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  caixaContatos: {
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
  botao: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3f5f8ff", // azul escuro
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 15,
    width: "90%",
    shadowColor: "#8f8f8f42",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 5,
  },
  icone: {
    width: 50,
    height: 50,
    borderRadius: 40, // deixa redondo
    resizeMode: "cover", // corta o branco das bordas
    marginRight: 15,
    backgroundColor: "#fff", // caso o ícone tenha fundo transparente
  },
  textoBotao: {
    color: "#838181ff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
