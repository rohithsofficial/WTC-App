import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Text, Card, Button, IconButton } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { router } from "expo-router";

export default function CartScreen() {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state: RootState) => state.cart);

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    } else {
      handleRemoveItem(id);
    }
  };

  const handleCheckout = () => {
    router.push("/checkout");
  };

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text variant="headlineMedium">Your cart is empty</Text>
        <Button
          mode="contained"
          onPress={() => router.push("/")}
          style={styles.continueShoppingButton}
        >
          Continue Shopping
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.itemsContainer}>
        {items.map((item) => (
          <Card key={item.id} style={styles.cartItem}>
            <Card.Content style={styles.cartItemContent}>
              <Card.Cover
                source={{ uri: item.image }}
                style={styles.itemImage}
              />
              <View style={styles.itemDetails}>
                <Text variant="titleMedium">{item.name}</Text>
                <Text variant="bodyLarge">${item.price}</Text>
                <View style={styles.quantityContainer}>
                  <IconButton
                    icon="minus"
                    size={20}
                    onPress={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
                  />
                  <Text variant="titleMedium">{item.quantity}</Text>
                  <IconButton
                    icon="plus"
                    size={20}
                    onPress={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                  />
                </View>
              </View>
              <IconButton
                icon="delete"
                size={24}
                onPress={() => handleRemoveItem(item.id)}
              />
            </Card.Content>
          </Card>
        ))}
      </ScrollView>

      <Card style={styles.summaryCard}>
        <Card.Content>
          <Text variant="titleLarge">Total: ${total.toFixed(2)}</Text>
        </Card.Content>
        <Card.Actions>
          <Button
            mode="contained"
            onPress={handleCheckout}
            style={styles.checkoutButton}
          >
            Proceed to Checkout
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  continueShoppingButton: {
    marginTop: 16,
  },
  itemsContainer: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    marginBottom: 16,
  },
  cartItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  summaryCard: {
    margin: 16,
    elevation: 4,
  },
  checkoutButton: {
    flex: 1,
  },
});
