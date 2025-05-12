import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text, Card, Button, Avatar, Badge } from "react-native-paper";
import {
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

const placeholder = require("../../assets/images/1.png");

const quickActions = [
  { label: "Coins", icon: "monetization-on", sub: "Ledger" },
  { label: "Wallet", icon: "account-balance-wallet", sub: "Load", badge: true },
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
  return (
    <ScrollView style={styles.container}>
      {/* Top Bar */}
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
            <Feather name="help-circle" size={22} color="#222" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="person-circle-outline" size={28} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Greeting & Partner Card */}
      <Text style={styles.greeting}>Good Afternoon, Chethan!</Text>
      <Card style={styles.partnerCard}>
        <Card.Content style={styles.partnerContent}>
          <View style={styles.partnerLeft}>
            <FontAwesome5 name="medal" size={18} color="#C89B3C" />
            <Text style={styles.partnerLevel}>Partner{"\n"}Level 1</Text>
          </View>
          <View style={styles.partnerCenter}>
            <Text style={styles.partnerOrders}>0/15{"\n"}Orders</Text>
            <View style={styles.progressBarBg}>
              <View style={styles.progressBarFill} />
            </View>
          </View>
          <View style={styles.partnerRight}>
            <Text style={styles.partnerDays}>
              15 Orders in 87{"\n"}Days to go
            </Text>
          </View>
        </Card.Content>
      </Card>

      {/* Quick Actions */}
      <View style={styles.quickActionsRow}>
        {quickActions.map((action, idx) => (
          <View key={action.label} style={styles.quickAction}>
            <View style={styles.quickActionIconWrap}>
              <MaterialIcons name={action.icon} size={28} color="#222" />
              {action.badge && <Badge style={styles.badge}>!</Badge>}
            </View>
            <Text style={styles.quickActionLabel}>{action.label}</Text>
            <Text style={styles.quickActionSub}>{action.sub}</Text>
          </View>
        ))}
      </View>

      {/* Promo Banner */}
      <Card style={styles.promoCard}>
        <Card.Content style={styles.promoContent}>
          <View style={{ flex: 1 }}>
            <Text style={styles.promoTitle}>Explore Combo</Text>
            <Text style={styles.promoDesc}>Craft your perfect meal</Text>
            <Text style={styles.promoOffer}>Upto ₹125 OFF</Text>
            <Button mode="contained" style={styles.promoBtn}>
              ORDER NOW
            </Button>
          </View>
          <Image
            source={require("../../assets/images/1.png")}
            style={styles.promoImg}
          />
        </Card.Content>
      </Card>

      {/* What's on your mind */}
      <Text style={styles.sectionTitle}>What's on your mind?</Text>
      <TouchableOpacity style={styles.menuBtn}>
        <MaterialIcons name="menu-book" size={22} color="#222" />
        <Text style={styles.menuBtnText}>Explore our Menu</Text>
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

      {/* Quick Picks */}
      <Text style={styles.sectionTitle}>Quick Picks For You!</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.quickPicksRow}
      >
        {quickPicks.map((pick) => (
          <Card key={pick.title} style={styles.quickPickCard}>
            <Image source={pick.image} style={styles.quickPickImg} />
            <Card.Content>
              <Text style={styles.quickPickTitle}>{pick.title}</Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5" },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#F8E9DB",
  },
  storeSelector: { flexDirection: "row", alignItems: "center" },
  storeText: { marginLeft: 8, fontWeight: "bold", fontSize: 16, color: "#222" },
  topIcons: { flexDirection: "row", alignItems: "center" },
  iconBtn: { marginLeft: 16 },
  greeting: { fontSize: 22, fontWeight: "bold", margin: 16, marginBottom: 0 },
  partnerCard: {
    margin: 16,
    marginTop: 8,
    backgroundColor: "#B97A56",
    borderRadius: 12,
  },
  partnerContent: { flexDirection: "row", alignItems: "center", padding: 0 },
  partnerLeft: { alignItems: "center", marginRight: 12 },
  partnerLevel: { color: "#fff", fontSize: 12, textAlign: "center" },
  partnerCenter: { flex: 1, alignItems: "center" },
  partnerOrders: { color: "#fff", fontSize: 12, textAlign: "center" },
  progressBarBg: {
    width: 60,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 3,
    marginTop: 4,
  },
  progressBarFill: {
    width: 20,
    height: 6,
    backgroundColor: "#FFD700",
    borderRadius: 3,
  },
  partnerRight: { alignItems: "center", marginLeft: 12 },
  partnerDays: { color: "#fff", fontSize: 12, textAlign: "center" },
  quickActionsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  quickAction: { alignItems: "center", flex: 1 },
  quickActionIconWrap: { position: "relative", marginBottom: 4 },
  badge: {
    position: "absolute",
    top: -6,
    right: -10,
    backgroundColor: "#FF6F61",
  },
  quickActionLabel: { fontWeight: "bold", fontSize: 13 },
  quickActionSub: { fontSize: 11, color: "#888" },
  promoCard: { marginHorizontal: 16, borderRadius: 12, marginBottom: 16 },
  promoContent: { flexDirection: "row", alignItems: "center" },
  promoTitle: { fontWeight: "bold", fontSize: 18, color: "#1A3C40" },
  promoDesc: { fontSize: 14, color: "#1A3C40", marginVertical: 2 },
  promoOffer: { fontWeight: "bold", color: "#2196F3", marginBottom: 8 },
  promoBtn: { borderRadius: 8, backgroundColor: "#2196F3" },
  promoImg: { width: 90, height: 90, borderRadius: 8, marginLeft: 8 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 16,
    marginBottom: 8,
  },
  menuBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F3ED",
    padding: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  menuBtnText: { flex: 1, marginLeft: 8, fontWeight: "bold", fontSize: 15 },
  categoriesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  categoryItem: { width: "23%", alignItems: "center", marginBottom: 16 },
  categoryImg: {
    width: 60,
    height: 60,
    borderRadius: 16,
    marginBottom: 6,
    backgroundColor: "#fff",
  },
  categoryLabel: { fontSize: 12, textAlign: "center" },
  quickPicksRow: { paddingLeft: 16, marginBottom: 24 },
  quickPickCard: { width: 140, marginRight: 12, borderRadius: 12 },
  quickPickImg: {
    width: 140,
    height: 90,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  quickPickTitle: { fontWeight: "bold", fontSize: 14, marginTop: 6 },
});
