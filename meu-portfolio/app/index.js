import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from "react-native";
import { useRouter } from "expo-router";
import { useRef } from "react";
import { MaterialIcons } from "@expo/vector-icons";

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
    <View style={styles.container}>
      {/* FOTO EM CÍRCULO */}
    <Image source={require("../assets/images/foto.jpeg")} style={styles.profileImage} />

      <Text style={styles.title}>Meu Portfólio</Text>
      <Text style={styles.subtitle}>Explore minhas experiências e projetos</Text>

      {routes.map((route) => (
        <AnimatedTouchable
          key={route.name}
          style={[styles.button, { transform: [{ scale: animation }] }]}
          onPress={() => handlePress(`/${route.name}`)}
          activeOpacity={0.8}
        >
          <MaterialIcons name={route.icon} size={20} color="#444" style={{ marginRight: 10 }} />
          <Text style={styles.buttonText}>
            {route.name.split("-").map(capitalize).join(" ")}
          </Text>
        </AnimatedTouchable>
      ))}

      <AnimatedTouchable
        style={[styles.button, styles.contactButton, { transform: [{ scale: animation }] }]}
        onPress={() => handlePress("/contato")}
        activeOpacity={0.8}
      >
        <MaterialIcons name="email" size={20} color="#fff" style={{ marginRight: 10 }} />
        <Text style={[styles.buttonText, { color: "#fff" }]}>Contato</Text>
      </AnimatedTouchable>
    </View>
  );
}

const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // deixa a imagem redonda
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#ccc", // contorno leve
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginVertical: 8,
    width: "80%",
  },
  contactButton: {
    backgroundColor: "#888",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});
