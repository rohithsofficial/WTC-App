import { Stack } from "expo-router";
import { Provider as PaperProvider } from "react-native-paper";
import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";
import { theme } from "./utils/theme";

export default function RootLayout() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="product/[id]"
            options={{
              title: "Product Details",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="cart"
            options={{
              title: "Shopping Cart",
              headerShown: true,
            }}
          />
          <Stack.Screen
            name="checkout"
            options={{
              title: "Checkout",
              headerShown: true,
            }}
          />
        </Stack>
      </PaperProvider>
    </StoreProvider>
  );
}
