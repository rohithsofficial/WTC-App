import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Card, Button, Avatar, List } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { logout } from "../store/authSlice";
import { router } from "expo-router";

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    router.replace("/");
  };

  if (!user) {
    return (
      <View style={styles.container}>
        <Text variant="headlineMedium">Please log in to view your profile</Text>
        <Button
          mode="contained"
          onPress={() => router.push("/login")}
          style={styles.loginButton}
        >
          Log In
        </Button>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.profileCard}>
        <Card.Content style={styles.profileHeader}>
          <Avatar.Text
            size={80}
            label={user.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          />
          <Text variant="headlineMedium" style={styles.name}>
            {user.name}
          </Text>
          <Text variant="bodyLarge">{user.email}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.menuCard}>
        <List.Section>
          <List.Item
            title="My Orders"
            left={(props) => <List.Icon {...props} icon="package" />}
            onPress={() => router.push("/orders")}
          />
          <List.Item
            title="Shipping Address"
            left={(props) => <List.Icon {...props} icon="map-marker" />}
            onPress={() => router.push("/address")}
          />
          <List.Item
            title="Payment Methods"
            left={(props) => <List.Icon {...props} icon="credit-card" />}
            onPress={() => router.push("/payment")}
          />
          <List.Item
            title="Settings"
            left={(props) => <List.Icon {...props} icon="cog" />}
            onPress={() => router.push("/settings")}
          />
        </List.Section>
      </Card>

      <Button
        mode="outlined"
        onPress={handleLogout}
        style={styles.logoutButton}
      >
        Log Out
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  profileCard: {
    margin: 16,
    elevation: 4,
  },
  profileHeader: {
    alignItems: "center",
    padding: 16,
  },
  name: {
    marginTop: 16,
    marginBottom: 8,
  },
  menuCard: {
    margin: 16,
    marginTop: 0,
    elevation: 4,
  },
  loginButton: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  logoutButton: {
    margin: 16,
    marginTop: 0,
  },
});
