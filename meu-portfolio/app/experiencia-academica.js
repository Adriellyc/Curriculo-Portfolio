import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { useRef, useEffect } from "react";

export default function ExperienciaAcademica() {
  const experienciasAcademicas = [
    {
      curso: "Sistemas para Internet",
      instituicao: "Universidade Católica de Pernambuco (UNICAP)",
      periodo: "2024 - Atual",
      descricao:
        "Formação voltada para desenvolvimento web, APIs, banco de dados, lógica de programação e tecnologias modernas do mercado.",
    },
    {
      curso: "Pedagogia",
      instituicao: "UNINASSAU",
      periodo: "2023 - Atual",
      descricao:
        "Estudos sobre educação infantil, processos de aprendizagem, desenvolvimento cognitivo e práticas pedagógicas.",
    },
    {
      curso: "Curso de Desenvolvimento Mobile",
      instituicao: "Digital Academy",
      periodo: "2024",
      descricao:
        "Curso com foco em React Native, Expo, integração com APIs e publicação de aplicativos.",
    },
    {
      curso: "Formação em UX/UI Design",
      instituicao: "Tech School",
      periodo: "2023",
      descricao:
        "Aprendizado sobre design centrado no usuário, criação de interfaces intuitivas e pesquisa de experiência do usuário.",
    },
  ];

  const animatedValues = useRef(
    experienciasAcademicas.map(() => new Animated.Value(0))
  ).current;

  useEffect(() => {
    const animations = experienciasAcademicas.map((_, i) =>
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
        <Text style={styles.title}>📚 Experiência Acadêmica</Text>

        {experienciasAcademicas.map((item, index) => (
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
              <Text style={styles.cardTitle}>{item.curso}</Text>
              <Text style={styles.cardSub}>{item.instituicao}</Text>
              <Text style={styles.cardPeriod}>{item.periodo}</Text>
              <Text style={styles.cardDesc}>{item.descricao}</Text>
            </LinearGradient>
          </Animated.View>
        ))}

        {/* Botão Voltar */}
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
