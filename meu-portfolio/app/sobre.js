import { ScrollView, Text } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 10 }}>
        Sobre Mim
      </Text>

      <Text style={{ fontSize: 16, marginBottom: 20 }}>
        Olá! Sou Adrielly, desenvolvedora mobile apaixonada por tecnologia e
        design. Este app foi feito como parte do meu portfólio usando React
        Native e Expo.
      </Text>

      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
        Tecnologias utilizadas:
      </Text>
      <Text>- React Native + Expo</Text>
      <Text>- Expo Router</Text>
      <Text>- React Native Paper</Text>
      <Text>- Tema Claro/Escuro (funcionalidade extra)</Text>
    </ScrollView>
  );
}
