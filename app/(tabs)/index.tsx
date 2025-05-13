import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Text, Card, Button, Avatar, Badge } from "react-native-paper";
import {
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import { useRouter } from "expo-router";

const placeholder = require("../../assets/images/1.png");

const quickActions = [
  { label: "Menu", icon: "restaurant-menu", sub: "Explore" },
  { label: "Coffee", icon: "coffee", sub: "Beans" },
  { label: "Offers", icon: "local-offer", sub: "2 New", badge: true },
  { label: "Cafes", icon: "storefront", sub: "Explore" },
];

const categories = [
  { label: "Beverages", image: placeholder },
  { label: "Meal Combos", image: placeholder },
  { label: "Food", image: placeholder },
  { label: "Ice Cream", image: placeholder },
  { label: "Quick Bites", image: placeholder },
  { label: "Coffee At Home", image: placeholder },
  { label: "Merchandise", image: placeholder },
  { label: "Manual Brew Coffee", image: placeholder },
];

const quickPicks = [
  { title: "Slices of Joy", image: placeholder },
  { title: "Sandwich Deli", image: placeholder },
  { title: "Croissant", image: placeholder },
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Fixed Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.storeSelector}>
          <MaterialIcons name="store" size={28} color="#222" />
          <Text style={styles.storeText}>Select store</Text>
          <MaterialIcons name="keyboard-arrow-down" size={20} color="#222" />
        </TouchableOpacity>
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.iconBtn}>
            <Feather name="search" size={22} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="person-circle-outline" size={28} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Greeting & Partner Card */}
        <Text style={styles.greeting}>Hi, Chethan!</Text>

        {/* Quick Actions */}
        <View style={styles.quickActionsRow}>
          {quickActions.map((action, idx) => (
            <TouchableOpacity
              key={action.label}
              style={styles.quickAction}
              onPress={() => action.label === "Menu" && router.push("/menu")}
            >
              <View style={styles.quickActionIconWrap}>
                <MaterialIcons name={action.icon} size={28} color="#222" />
                {action.badge && <Badge style={styles.badge}>!</Badge>}
              </View>
              <Text style={styles.quickActionLabel}>{action.label}</Text>
              <Text style={styles.quickActionSub}>{action.sub}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* What's on your mind */}
        <Text style={styles.sectionTitle}> Get your Food to Dine-in Now </Text>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => router.push("/menu")}
        >
          <MaterialIcons name="menu-book" size={22} color="#222" />
          <Text style={styles.menuBtnText}>More Menu</Text>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#222" />
        </TouchableOpacity>

        {/* Categories Grid */}
        <View style={styles.categoriesGrid}>
          {categories.map((cat) => (
            <View key={cat.label} style={styles.categoryItem}>
              <Image source={cat.image} style={styles.categoryImg} />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </View>
          ))}
        </View>

        {/* What's on your mind */}
        <Text style={styles.sectionTitle}> Order your Coffee Beans </Text>

        {/* Categories Grid */}
        <View style={styles.categoriesGrid}>
          {categories.map((cat) => (
            <View key={cat.label} style={styles.categoryItem}>
              <Image source={cat.image} style={styles.categoryImg} />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>Connect With Us</Text>
          <View style={styles.socialLinks}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() =>
                Linking.openURL("https://www.instagram.com/westernterrain/")
              }
            >
              <FontAwesome5 name="instagram" size={24} color="#E1306C" />
              <Text style={styles.socialText}>Instagram</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={() =>
                Linking.openURL("https://www.facebook.com/westernterraincafe")
              }
            >
              <FontAwesome5 name="facebook" size={24} color="#1877F2" />
              <Text style={styles.socialText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  scrollView: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#F8E9DB",
    borderBottomWidth: 1,
    borderBottomColor: "#E5D5C5",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 1000,
  },
  storeSelector: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    elevation: 1,
  },
  storeText: {
    marginLeft: 8,
    fontWeight: "600",
    fontSize: 15,
    color: "#222",
  },
  topIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  iconBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 8,
    elevation: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "700",
    margin: 16,
    marginBottom: 8,
    color: "#1A1A1A",
  },
  partnerCard: {
    margin: 16,
    marginTop: 8,
    backgroundColor: "#B97A56",
    borderRadius: 16,
    elevation: 3,
  },
  partnerContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  partnerLeft: {
    alignItems: "center",
    marginRight: 16,
  },
  partnerLevel: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "600",
    marginTop: 4,
  },
  partnerCenter: {
    flex: 1,
    alignItems: "center",
  },
  partnerOrders: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "600",
  },
  progressBarBg: {
    width: 80,
    height: 6,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 3,
    marginTop: 6,
  },
  progressBarFill: {
    width: 30,
    height: 6,
    backgroundColor: "#FFD700",
    borderRadius: 3,
  },
  partnerRight: {
    alignItems: "center",
    marginLeft: 16,
  },
  partnerDays: {
    color: "#fff",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "600",
  },
  quickActionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    paddingHorizontal: 8,
  },
  quickAction: {
    alignItems: "center",
    flex: 1,
  },
  quickActionIconWrap: {
    position: "relative",
    marginBottom: 6,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    elevation: 2,
  },
  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: "#FF6F61",
  },
  quickActionLabel: {
    fontWeight: "600",
    fontSize: 13,
    color: "#1A1A1A",
    marginTop: 4,
  },
  quickActionSub: {
    fontSize: 11,
    color: "#666",
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    margin: 16,
    marginBottom: 12,
    color: "#1A1A1A",
  },
  menuBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 20,
    elevation: 2,
  },
  menuBtnText: {
    flex: 1,
    marginLeft: 12,
    fontWeight: "600",
    fontSize: 16,
    color: "#1A1A1A",
  },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 20,
  },
  categoryItem: {
    width: "23%",
    alignItems: "center",
    marginBottom: 16,
  },
  categoryImg: {
    width: 70,
    height: 70,
    borderRadius: 16,
    marginBottom: 8,
    backgroundColor: "#fff",
    elevation: 2,
  },
  categoryLabel: {
    fontSize: 13,
    textAlign: "center",
    color: "#1A1A1A",
    fontWeight: "500",
  },
  quickPicksRow: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  quickPickCard: {
    width: 160,
    marginRight: 16,
    borderRadius: 16,
    elevation: 3,
  },
  quickPickImg: {
    width: 160,
    height: 100,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  quickPickTitle: {
    fontWeight: "600",
    fontSize: 15,
    marginTop: 8,
    color: "#1A1A1A",
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  footer: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  footerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 16,
  },
  socialLinks: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    marginBottom: 16,
  },
  socialButton: {
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    padding: 12,
    borderRadius: 12,
    width: 100,
  },
  socialText: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "500",
    color: "#1A1A1A",
  },
  copyright: {
    textAlign: "center",
    fontSize: 12,
    color: "#666",
    marginTop: 8,
  },
});
