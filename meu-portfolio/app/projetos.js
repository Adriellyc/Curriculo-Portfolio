import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { useRef, useEffect } from "react";

export default function Projetos() {
  const projetos = [
    {
      nome: "App EducaKids",
      ano: "2024",
      descricao:
        "Aplicativo educativo voltado para crianças de 6 a 10 anos, com jogos de alfabetização e atividades lúdicas. Desenvolvido com React Native e integrado a um backend em Node.js.",
    },
    {
      nome: "Sistema de Monitoramento Escolar",
      ano: "2025",
      descricao:
        "Plataforma que permite professores acompanharem o desempenho de alunos, com dashboards, relatórios e notificações. Projeto desenvolvido como trabalho acadêmico.",
    },
    {
      nome: "Meu Portfólio Pessoal",
      ano: "2023",
      descricao:
        "Website moderno criado com HTML, CSS e JavaScript para apresentar minhas habilidades, projetos e experiências profissionais.",
    },
    {
      nome: "App Agenda Digital",
      ano: "2024",
      descricao:
        "Aplicativo simples para organizar tarefas, compromissos e estudos, com notificações e design minimalista.",
    },
  ];

  const animatedValues = useRef(projetos.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = projetos.map((_, i) =>
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
        <Text style={styles.title}>🚀 Meus Projetos</Text>

        {projetos.map((item, index) => (
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
              <Text style={styles.cardTitle}>{item.nome}</Text>
              <Text style={styles.cardPeriod}>{item.ano}</Text>
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
