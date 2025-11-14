import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { useRef, useEffect } from "react";

export default function ExperienciaProfissional() {
  const experiencias = [
    {
      cargo: "Estagiária de Pedagogia",
      empresa: "Escola XYZ",
      periodo: "2024 - Atual",
      descricao:
        "Apoio nas atividades pedagógicas, acompanhamento de alunos e contribuição para o planejamento de aulas e projetos educativos.",
    },
    {
      cargo: "Estagiária de TI",
      empresa: "Neurotech",
      periodo: "2025 - Atual",
      descricao:
        "Atuação com análise de dados e suporte no desenvolvimento de soluções tecnológicas voltadas à inovação e eficiência.",
    },
    {
      cargo: "Assistente Educacional",
      empresa: "Escola ABC",
      periodo: "2023 - 2024",
      descricao:
        "Suporte às práticas de ensino e aprendizagem, acompanhamento de turmas e auxílio nas atividades escolares.",
    },
  ];

  const animatedValues = useRef(experiencias.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = experiencias.map((_, i) =>
      Animated.timing(animatedValues[i], {
        toValue: 1,
        duration: 600,
        delay: i * 150,
        useNativeDriver: true,
      })
    );
    Animated.stagger(120, animations).start();
  }, []);

  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>💼 Experiência Profissional</Text>

        {experiencias.map((item, index) => (
          <Animated.View
            key={index}
            style={{
              opacity: animatedValues[index],
              transform: [
                {
                  translateY: animatedValues[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
              width: "100%",
            }}
          >
            <LinearGradient
              colors={["#dbeafe", "#c7d2fe"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
              <Text style={styles.cardTitle}>{item.cargo}</Text>
              <Text style={styles.cardSub}>{item.empresa}</Text>
              <Text style={styles.cardPeriod}>{item.periodo}</Text>
              <Text style={styles.cardDesc}>{item.descricao}</Text>
            </LinearGradient>
          </Animated.View>
        ))}

        <Link href="/" asChild>
          <TouchableOpacity style={styles.botaoVoltar}>
            <Text style={styles.textoVoltar}>⬅ Voltar ao Início</Text>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    padding: 20,
    paddingBottom: 40,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1377dbd3",
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    backgroundColor: "#f8fafc",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1e3a8a",
    marginBottom: 5,
  },
  cardSub: {
    fontSize: 16,
    color: "#475569",
    marginBottom: 4,
  },
  cardPeriod: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#6c95d6ff",
    marginBottom: 8,
  },
  cardDesc: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 22,
    textAlign: "justify",
  },
  botaoVoltar: {
    backgroundColor: "#1377dbd3",
    padding: 15,
    borderRadius: 30,
    alignSelf: "center",
    marginTop: 10,
  },
  textoVoltar: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
