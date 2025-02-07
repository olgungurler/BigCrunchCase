import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Header } from "../components";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Epilogue: require("../assets/fonts/Epilogue.ttf"),
    EpilogueSemiBold: require("../assets/fonts/Epilogue-SemiBold.ttf"),
    EpilogueBold: require("../assets/fonts/Epilogue-Bold.ttf"),
    EpilogueExtraBold: require("../assets/fonts/Epilogue-ExtraBold.ttf"),
    Rubik: require("../assets/fonts/Rubik.ttf"),
    RubikMedium: require("../assets/fonts/Rubik-Medium.ttf"),
  });

  const pathname = usePathname();

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {pathname !== "/not-found" && <Header />}
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" backgroundColor="#FBFBFB" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
