// ============================================
// React Native Booking App - Complete Code
// ============================================

// Package Installation Commands:
// npx create-expo-app BookingApp
// cd BookingApp
// npm install @react-navigation/native @react-navigation/bottom-tabs
// npm install react-native-screens react-native-safe-area-context
// npx expo install react-native-vector-icons

// ============================================
// App.js - Main Application File
// ============================================


// ============================================
// screens/HomeScreen.js
// ============================================

// import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
// import { Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <LinearGradient
          colors={['#1A365D', '#0F2340']}
          style={styles.header}
        >
          <View style={styles.headerTop}>
            <View style={styles.logoContainer}>
              <Text style={styles.logoIcon}>🏨</Text>
              <Text style={styles.logoText}>BookStay</Text>
            </View>
            <View style={styles.headerButtons}>
              <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Hero Section */}
          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>Your Journey{'\n'}Begins Here</Text>
            <Text style={styles.heroSubtitle}>
              Discover extraordinary hotels and dining experiences worldwide
            </Text>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <Icon name="search" size={20} color="#666" style={styles.searchIcon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Where do you want to go?"
                placeholderTextColor="#999"
              />
              <TouchableOpacity style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Stats Section */}
          <View style={styles.statsContainer}>
            {[
              { number: '10K+', label: 'Hotels' },
              { number: '5K+', label: 'Restaurants' },
              { number: '50K+', label: 'Happy Guests' },
              { number: '100+', label: 'Countries' },
            ].map((stat, index) => (
              <View key={index} style={styles.statItem}>
                <Text style={styles.statNumber}>{stat.number}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </LinearGradient>

        {/* Services Section */}
        <View style={styles.servicesSection}>
          <Text style={styles.sectionTitle}>Explore Our Services</Text>
          
          Hotels Card
          <TouchableOpacity
            style={styles.serviceCard}
            onPress={() => navigation.navigate('Hotels')}
            activeOpacity={0.8}
          >
            <View style={styles.serviceIconContainer}>
              <Text style={styles.serviceIcon}>🏨</Text>
            </View>
            <Text style={styles.serviceTitle}>Premium Hotels</Text>
            <Text style={styles.serviceDescription}>
              Discover luxury accommodations and comfortable stays at the world's finest hotels
            </Text>
            <View style={styles.serviceButton}>
              <Text style={styles.serviceButtonText}>Explore Hotels</Text>
              <Icon name="arrow-forward" size={18} color="#fff" />
            </View>
          </TouchableOpacity>

          {/* Restaurants Card */}
          <TouchableOpacity
            style={styles.serviceCard}
            onPress={() => navigation.navigate('Dining')}
            activeOpacity={0.8}
          >
            <View style={styles.serviceIconContainer}>
              <Text style={styles.serviceIcon}>🍽️</Text>
            </View>
            <Text style={styles.serviceTitle}>Fine Dining</Text>
            <Text style={styles.serviceDescription}>
              Reserve tables at exquisite restaurants and experience culinary excellence
            </Text>
            <View style={styles.serviceButton}>
              <Text style={styles.serviceButtonText}>Explore Restaurants</Text>
              <Icon name="arrow-forward" size={18} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Why Book With Us</Text>
          <View style={styles.featuresGrid}>
            {[
              { icon: '⚡', title: 'Instant Confirmation', desc: 'Get immediate booking confirmation' },
              { icon: '💎', title: 'Premium Selection', desc: 'Handpicked quality establishments' },
              { icon: '🔒', title: 'Secure Payments', desc: 'Bank-level security' },
              { icon: '🎯', title: 'Best Price', desc: 'Price match guarantee' },
            ].map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Text style={styles.featureIcon}>{feature.icon}</Text>
                <Text style={styles.featureTitle}>{feature.title}</Text>
                <Text style={styles.featureDesc}>{feature.desc}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FAFC',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 32,
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  signInButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  signInText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  signUpButton: {
    backgroundColor: '#D69E2E',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
  },
  signUpText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  heroSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 44,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#D69E2E',
    textAlign: 'center',
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
    alignItems: 'center',
    width: width - 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  searchIcon: {
    marginLeft: 12,
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
  },
  searchButton: {
    backgroundColor: '#D69E2E',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D69E2E',
  },
  statLabel: {
    fontSize: 12,
    color: '#fff',
    marginTop: 4,
  },
  servicesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A365D',
    marginBottom: 24,
    textAlign: 'center',
  },
  serviceCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 32,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(214, 158, 46, 0.2)',
  },
  serviceIconContainer: {
    marginBottom: 16,
  },
  serviceIcon: {
    fontSize: 56,
  },
  serviceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A365D',
    marginBottom: 12,
  },
  serviceDescription: {
    fontSize: 15,
    color: '#666',
    lineHeight: 22,
    marginBottom: 20,
  },
  serviceButton: {
    backgroundColor: '#D69E2E',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    borderRadius: 12,
    gap: 8,
  },
  serviceButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuresSection: {
    backgroundColor: 'rgba(214, 158, 46, 0.08)',
    padding: 20,
    paddingBottom: 40,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureItem: {
    width: (width - 60) / 2,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A365D',
    marginBottom: 8,
    textAlign: 'center',
  },
  featureDesc: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
  },
});

// // ============================================
// // Other Screen Components (screens/SearchScreen.js, etc.)
// // ============================================

// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// // SearchScreen.js
// export function SearchScreen() {
//   return (
//     <View style={screenStyles.container}>
//       <Text style={screenStyles.text}>Search Screen</Text>
//     </View>
//   );
// }

// 
// }

// // RestaurantsScreen.js
// export function RestaurantsScreen() {
//   return (
//     <View style={screenStyles.container}>
//       <Text style={screenStyles.text}>Restaurants Screen</Text>
//     </View>
//   );
// }

// // BookingsScreen.js
// export function BookingsScreen() {
//   return (
//     <View style={screenStyles.container}>
//       <Text style={screenStyles.text}>My Bookings Screen</Text>
//     </View>
//   );
// }

// // ProfileScreen.js
// export function ProfileScreen() {
//   return (
//     <View style={screenStyles.container}>
//       <Text style={screenStyles.text}>Profile Screen</Text>
//     </View>
//   );
// }

// const screenStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F7FAFC',
//   },
//   text: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1A365D',
//   },
// });

// // ============================================
// // Folder Structure
// // ============================================

// /*
// BookingApp/
// │
// ├── App.js                    # Main app with navigation
// ├── app.json                  # Expo configuration
// ├── package.json
// │
// ├── screens/
// │   ├── HomeScreen.js
// │   ├── SearchScreen.js
// │   ├── 
// │   ├── RestaurantsScreen.js
// │   ├── BookingsScreen.js
// │   └── ProfileScreen.js
// │
// ├── components/
// │   ├── common/
// │   │   ├── Button.js
// │   │   ├── Card.js
// │   │   └── Input.js
// │   │
// │   ├── hotel/
// │   │   └── HotelCard.js
// │   │
// │   └── restaurant/
// │       └── RestaurantCard.js
// │
// ├── assets/
// │   ├── images/
// │   └── icons/
// │
// ├── constants/
// │   ├── Colors.js
// │   └── Fonts.js
// │
// └── services/
//     ├── api.js
//     ├── hotelService.js
//     └── restaurantService.js
// */