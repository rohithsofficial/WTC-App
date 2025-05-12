import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text, Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const placeholder = require("../../assets/images/1.png");

const menuItems = [
  {
    name: "Espresso",
    price: "₹80",
    description: "Strong and concentrated coffee",
    category: "Hot Coffee",
    image: placeholder,
  },
  {
    name: "Cappuccino",
    price: "₹120",
    description: "Espresso with steamed milk and foam",
    category: "Hot Coffee",
    image: placeholder,
  },
  {
    name: "Latte",
    price: "₹130",
    description: "Espresso with steamed milk",
    category: "Hot Coffee",
    image: placeholder,
  },
  {
    name: "Americano",
    price: "₹100",
    description: "Espresso with hot water",
    category: "Hot Coffee",
    image: placeholder,
  },
  {
    name: "Mocha",
    price: "₹140",
    description: "Espresso with chocolate and milk",
    category: "Hot Coffee",
    image: placeholder,
  },
  {
    name: "Cold Brew",
    price: "₹150",
    description: "Slow-steeped coffee",
    category: "Cold Coffee",
    image: placeholder,
  },
  {
    name: "Iced Latte",
    price: "₹140",
    description: "Chilled latte with ice",
    category: "Cold Coffee",
    image: placeholder,
  },
  {
    name: "Frappuccino",
    price: "₹160",
    description: "Blended iced coffee drink",
    category: "Cold Coffee",
    image: placeholder,
  },
  {
    name: "Club Sandwich",
    price: "₹180",
    description: "Triple-decker with chicken, bacon, and vegetables",
    category: "Sandwiches",
    image: placeholder,
  },
  {
    name: "Grilled Cheese",
    price: "₹120",
    description: "Classic grilled cheese with tomato soup",
    category: "Sandwiches",
    image: placeholder,
  },
  {
    name: "Croissant",
    price: "₹60",
    description: "Buttery, flaky French pastry",
    category: "Pastries",
    image: placeholder,
  },
  {
    name: "Chocolate Muffin",
    price: "₹70",
    description: "Rich chocolate muffin with chocolate chips",
    category: "Pastries",
    image: placeholder,
  },
  {
    name: "Tiramisu",
    price: "₹150",
    description: "Classic Italian coffee-flavored dessert",
    category: "Desserts",
    image: placeholder,
  },
  {
    name: "Cheesecake",
    price: "₹140",
    description: "Creamy New York style cheesecake",
    category: "Desserts",
    image: placeholder,
  },
];

export default function MenuScreen() {
  const router = useRouter();

  const renderMenuSection = (category: string) => (
    <>
      <Text style={styles.sectionTitle}>{category}</Text>
      <View style={styles.menuGrid}>
        {menuItems
          .filter((item) => item.category === category)
          .map((item, index) => (
            <Card key={index} style={styles.menuItem}>
              <Image source={item.image} style={styles.menuItemImage} />
              <Card.Content style={styles.menuItemContent}>
                <View style={styles.menuItemHeader}>
                  <Text style={styles.menuItemName}>{item.name}</Text>
                  <Text style={styles.menuItemPrice}>{item.price}</Text>
                </View>
                <Text style={styles.menuItemDescription} numberOfLines={2}>
                  {item.description}
                </Text>
              </Card.Content>
            </Card>
          ))}
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <MaterialIcons name="arrow-back" size={24} color="#222" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Our Menu</Text>
        <View style={styles.backButton} />
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Coffee Sections */}
        {renderMenuSection("Hot Coffee")}
        {renderMenuSection("Cold Coffee")}

        {/* Food Sections */}
        {renderMenuSection("Sandwiches")}
        {renderMenuSection("Pastries")}
        {renderMenuSection("Desserts")}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#F8E9DB",
    borderBottomWidth: 1,
    borderBottomColor: "#E5D5C5",
  },
  backButton: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1A1A1A",
    marginTop: 20,
    marginBottom: 12,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  menuItem: {
    width: "48%",
    marginBottom: 16,
    borderRadius: 12,
    elevation: 2,
    overflow: "hidden",
  },
  menuItemImage: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  menuItemContent: {
    padding: 12,
  },
  menuItemHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  menuItemName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  menuItemPrice: {
    fontSize: 15,
    fontWeight: "600",
    color: "#B97A56",
  },
  menuItemDescription: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});
