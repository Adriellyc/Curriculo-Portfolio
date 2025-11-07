import { View, Text, StyleSheet, TouchableOpacity, Animated } from "react-native";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from '@expo/vector-icons';

export default function Home() {
  const router = useRouter();
  const animation = useRef(new Animated.Value(1)).current;

  function animateButton() {
    Animated.sequence([
      Animated.timing(animation, { toValue: 0.95, duration: 100, useNativeDriver: true }),
      Animated.timing(animation, { toValue: 1, duration: 100, useNativeDriver: true }),
    ]).start();
  }

  function handlePress(route) {
    animateButton();
    setTimeout(() => router.push(route), 200);
  }

  const routes = [
    { name: "sobre", icon: "person" },
    { name: "experiencia-academica", icon: "school" },
    { name: "experiencia-profissional", icon: "work" },
    { name: "projetos", icon: "code" },
  ];

  return (
    <LinearGradient
      colors={['#1e2a78', '#0d1b3d']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <Text style={styles.title}>Meu Portfólio</Text>
      <Text style={styles.subtitle}>Explore minhas experiências e projetos</Text>

      {routes.map((route) => (
        <AnimatedTouchable
          key={route.name}
          style={[styles.button, { transform: [{ scale: animation }] }]}
          onPress={() => handlePress(`/${route.name}`)}
          activeOpacity={0.8}
        >
          <MaterialIcons name={route.icon} size={24} color="#0d1b3d" style={{ marginRight: 12 }} />
          <Text style={styles.buttonText}>{route.name.split("-").map(capitalize).join(" ")}</Text>
        </AnimatedTouchable>
      ))}

      <AnimatedTouchable
        style={[styles.button, styles.contactButton, { transform: [{ scale: animation }] }]}
        onPress={() => handlePress("/modal")}
        activeOpacity={0.8}
      >
        <MaterialIcons name="email" size={24} color="#fff" style={{ marginRight: 12 }} />
        <Text style={[styles.buttonText, { color: "#fff" }]}>Contato</Text>
      </AnimatedTouchable>
    </LinearGradient>
  );
}

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
    paddingVertical: 50,
  },
  title: {
    fontSize: 42,
    fontWeight: "900",
    color: "#FFC857",
    textShadowColor: "#ffa726",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 6,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    color: "#e0c097",
    marginBottom: 40,
    fontWeight: "500",
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFC857",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 40,
    marginVertical: 12,
    width: "85%",
    shadowColor: "#ffb700",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 8,
  },
  contactButton: {
    backgroundColor: "#d94f3d",
    shadowColor: "#d94f3d",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0d1b3d",
    textAlign: "center",
  },
});
cnpx expo start --tunnelnpx expo start --tunnel