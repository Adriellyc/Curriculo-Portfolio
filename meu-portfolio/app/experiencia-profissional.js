import { View, Text } from "react-native";

export default function ExperienciaProfissional() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>
        Experiência Profissional
      </Text>

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        🧑‍💻 Empresa: [Nome da Empresa]
      </Text>
      <Text>Cargo: Desenvolvedora Front-end</Text>
      <Text>Período: 2023 - Atual</Text>
      <Text>Principais atividades:</Text>
      <Text>- Desenvolvimento de apps com React Native</Text>
      <Text>- Integração com APIs</Text>
      <Text>- Publicação no Expo</Text>
    </View>
  );
}
