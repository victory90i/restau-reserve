import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const heroImage = require('../../assets/bg.png');
const stayImages = [
  require('../../assets/foods/cover.png'),
  require('../../assets/foods/quinoa.png'),
  require('../../assets/foods/smoothie.png'),
];

const OnboardingScreen = ({ onComplete }) => {
  const navigation = useNavigation();

  const handleComplete = async () => {
    if (onComplete) {
      await onComplete();
      // Navigate to Auth screen after onboarding is complete
      navigation.replace('Auth');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.heroSection}>
          <ImageBackground
            source={heroImage}
            style={styles.heroImage}
            imageStyle={styles.heroImageContent}
          >
            <LinearGradient
              colors={['rgba(0,0,0,0.65)', 'rgba(0,0,0,0.1)']}
              style={styles.heroOverlay}
            >
              <View style={styles.heroHeader}>
                <View style={styles.badge}>
                  <Ionicons name="leaf-outline" size={16} color="#8DDDBA" />
                  <Text style={styles.badgeText}>Eco stays</Text>
                </View>
                <TouchableOpacity style={styles.iconButton}>
                  <Ionicons name="notifications-outline" size={20} color="#fff" />
                </TouchableOpacity>
              </View>

              <Text style={styles.heroTitle}>Hey Explorer, where to next?</Text>
              <Text style={styles.heroSubtitle}>
                Discover unique cabins, lakeside retreats, and modern escapes curated just for you.
              </Text>

              <View style={styles.searchPill}>
                <Ionicons name="search" size={18} color="#aaa" />
                <View style={styles.searchTextWrapper}>
                  <Text style={styles.searchLabel}>Search places</Text>
                  <Text style={styles.searchMeta}>Norway · 18-21 oct · 4 guests</Text>
                </View>
                <Ionicons name="options-outline" size={18} color="#aaa" />
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Discover new places</Text>
          <TouchableOpacity>
            <Text style={styles.sectionLink}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.cardRow}
        >
          {stayImages.map((image, index) => (
            <View key={index} style={styles.card}>
              <Image source={image} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <View style={styles.cardHeader}>
                  <Text style={styles.cardTag}>Lake retreat</Text>
                  <View style={styles.rating}>
                    <Ionicons name="star" size={12} color="#F5C047" />
                    <Text style={styles.ratingText}>4.96</Text>
                  </View>
                </View>
                <Text style={styles.cardTitle}>Realingen, Norway</Text>
                <Text style={styles.cardMeta}>4 guests · 2 bedrooms · €273 night</Text>
              </View>
            </View>
          ))}
        </ScrollView>

        <View style={styles.perksRow}>
          {['Organic shops', 'Ski trips', 'Remote cabins'].map((perk) => (
            <View key={perk} style={styles.perkPill}>
              <Text style={styles.perkText}>{perk}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {[0, 1, 2].map((dot) => (
            <View key={dot} style={[styles.dot, dot === 1 && styles.dotActive]} />
          ))}
        </View>

        <TouchableOpacity style={styles.primaryButton} onPress={handleComplete}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleComplete}>
          <Text style={styles.secondaryAction}>Skip for now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  footer: {
    paddingTop: 12,
    paddingBottom: 24,
  },
  scrollContent: {
    paddingBottom: 140,
  },
  heroSection: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  heroImage: {
    height: 380,
    borderRadius: 32,
    overflow: 'hidden',
  },
  heroImageContent: {
    borderRadius: 32,
  },
  heroOverlay: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  heroHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  badgeText: {
    color: '#fff',
    fontSize: 13,
    marginLeft: 6,
    fontWeight: '600',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    marginTop: 60,
  },
  heroSubtitle: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 15,
    marginTop: 12,
    lineHeight: 22,
  },
  searchPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 40,
    padding: 14,
    marginTop: 24,
  },
  searchTextWrapper: {
    flex: 1,
    marginHorizontal: 12,
  },
  searchLabel: {
    fontSize: 14,
    color: '#111',
    fontWeight: '600',
  },
  searchMeta: {
    fontSize: 12,
    color: '#777',
    marginTop: 2,
  },
  sectionHeader: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  sectionLink: {
    color: '#6D5FFD',
    fontWeight: '600',
  },
  cardRow: {
    paddingHorizontal: 20,
  },
  card: {
    width: 220,
    backgroundColor: '#fff',
    borderRadius: 24,
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  cardContent: {
    padding: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTag: {
    fontSize: 12,
    color: '#6D5FFD',
    fontWeight: '600',
    backgroundColor: 'rgba(109,95,253,0.1)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: '#111',
    marginLeft: 4,
    fontSize: 12,
    fontWeight: '600',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },
  cardMeta: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  perksRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    marginTop: 24,
  },
  perkPill: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  perkText: {
    color: '#111',
    fontWeight: '600',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#DADADA',
    marginHorizontal: 4,
  },
  dotActive: {
    width: 16,
    backgroundColor: '#111',
  },
  primaryButton: {
    backgroundColor: '#111',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryAction: {
    textAlign: 'center',
    color: '#555',
    fontWeight: '600',
    marginBottom: 24,
  },
});

export default OnboardingScreen;