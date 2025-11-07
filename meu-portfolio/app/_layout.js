import { Stack } from "expo-router";
import { useState } from "react";
import { Button, View } from "react-native";
import { Provider as PaperProvider, MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export default function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <PaperProvider theme={darkMode ? MD3DarkTheme : MD3LightTheme}>
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: darkMode ? "#222" : "#4a90e2" },
          headerTintColor: "#fff",
          headerRight: () => (
            <View style={{ marginRight: 10 }}>
              <Button
                title={darkMode ? "☀️" : "🌙"}
                onPress={() => setDarkMode(!darkMode)}
              />
            </View>
          ),
        }}
      />
    </PaperProvider>
  );
}
