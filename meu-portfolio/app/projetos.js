import { View, Text } from "react-native";

export default function Projetos() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Projetos</Text>

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        �� Projeto: Meu Portfólio App
      </Text>
      <Text>Descrição: App criado com Expo Router e React Native Paper.</Text>

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        💻 Projeto: Sistema de Tarefas
      </Text>
      <Text>Descrição: Aplicativo para controle de tarefas com armazenamento local.</Text>
    </View>
  );
}
