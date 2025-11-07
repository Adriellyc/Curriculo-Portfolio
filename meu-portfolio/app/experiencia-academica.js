import { View, Text } from "react-native";

export default function ExperienciaAcademica() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Experiência Acadêmica</Text>

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        �� Curso: Análise e Desenvolvimento de Sistemas
      </Text>
      <Text>📍 Instituição: Faculdade [Insira o nome]</Text>
      <Text>📅 Período: 2023 - 2025</Text>

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        💻 Curso Complementar: React Native Avançado
      </Text>
      <Text>📅 Conclusão: 2024</Text>
    </View>
  );
}
