import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { Text, Button, Card, Divider } from "react-native-paper";
import { useLocalSearchParams } from "expo-router";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { addToCart } from "../store/cartSlice";
import { Product } from "../store/productsSlice";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const dispatch = useDispatch();
  const product = useSelector((state: RootState) =>
    state.products.items.find((p: Product) => p.id === id)
  );

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="cover"
      />

      <Card style={styles.card}>
        <Card.Content>
          <Text variant="headlineMedium">{product.name}</Text>
          <Text variant="titleLarge" style={styles.price}>
            ${product.price}
          </Text>

          <Divider style={styles.divider} />

          <Text variant="titleMedium">Description</Text>
          <Text variant="bodyLarge">{product.description}</Text>

          <Divider style={styles.divider} />

          <View style={styles.details}>
            <Text variant="titleMedium">Category: {product.category}</Text>
            <Text variant="titleMedium">Rating: {product.rating}/5</Text>
            <Text variant="titleMedium">Stock: {product.stock}</Text>
          </View>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Button
            mode="contained"
            onPress={handleAddToCart}
            style={styles.addToCartButton}
          >
            Add to Cart
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  image: {
    width: "100%",
    height: 300,
  },
  card: {
    margin: 16,
    elevation: 4,
  },
  price: {
    color: "#2196F3",
    marginTop: 8,
  },
  divider: {
    marginVertical: 16,
  },
  details: {
    gap: 8,
  },
  actions: {
    padding: 16,
  },
  addToCartButton: {
    flex: 1,
  },
});
