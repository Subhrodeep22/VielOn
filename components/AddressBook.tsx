import React, { useEffect } from 'react';
import { Animated, BackHandler, Dimensions, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from './BackgroundImage';
import HeaderIcons from './HeaderIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface AddressBookProps {
  onBack: () => void;
}

export default function AddressBook({ onBack }: AddressBookProps) {
  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      onBack();
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, [onBack]);

  return (
    <Animated.View style={styles.addressBook}>
      <BackgroundImage />
      <SafeAreaView style={styles.addressBookContainer}>
        {/* Address Book Header */}
        <View style={styles.addressBookHeader}>
          <Text style={styles.addressBookTitle}>Saved Addresses</Text>
          <HeaderIcons onBack={onBack} />
        </View>
        
        {/* No Saved Addresses Subheading */}
        <View style={styles.subheadingContainer}>
          <Text style={styles.subheadingText}>No Saved Addresses</Text>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  addressBook: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F5F5',
    zIndex: 1000,
    elevation: 1000, // For Android
  },
  addressBookContainer: {
    flex: 1,
  },
  addressBookHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: 0,
    paddingBottom: 0,
  },
  addressBookTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  subheadingContainer: {
    alignItems: 'flex-start',
    marginTop: screenHeight * 0.03,
    paddingHorizontal: screenWidth * 0.05,
  },
  subheadingText: {
    fontSize: Math.max(18, screenWidth * 0.045),
    color: '#666666',
    textAlign: 'left',
    fontWeight: 'bold',
  },
});
