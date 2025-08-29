import React, { useEffect, useState } from 'react';
import { Animated, BackHandler, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from './BackgroundImage';
import HeaderIcons from './HeaderIcons';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface AddCustomProviderProps {
  onBack: () => void;
  onSave: (providerUrl: string) => void;
}

export default function AddCustomProvider({ onBack, onSave }: AddCustomProviderProps) {
  const [providerUrl, setProviderUrl] = useState('https://my.custom.rpc');

  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      onBack();
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, [onBack]);

  return (
    <Animated.View style={styles.addCustomProvider}>
      <BackgroundImage />
      <SafeAreaView style={styles.addCustomProviderContainer}>
        {/* Add Custom Provider Header */}
        <View style={styles.addCustomProviderHeader}>
          <Text style={styles.addCustomProviderTitle}>Add Custom Provider</Text>
          <HeaderIcons onSearchPress={onBack} onBellPress={onBack} />
        </View>
        
        {/* Provider URL Section */}
        <View style={styles.providerUrlContainer}>
          <Text style={styles.providerUrlSubheading}>PROVIDER URL</Text>
          
          {/* URL Input Banner */}
          <View style={styles.urlInputBanner}>
            <TextInput
              style={styles.urlInput}
              value={providerUrl}
              onChangeText={setProviderUrl}
              placeholder="https://my.custom.rpc"
              placeholderTextColor="#FFFFFF80"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="url"
              returnKeyType="done"
              blurOnSubmit={false}
            />
          </View>
        </View>
        
        {/* Create Button */}
        <View style={styles.createButtonContainer}>
          <TouchableOpacity 
            style={styles.createButton}
            onPress={() => onSave(providerUrl)}
          >
            <Text style={styles.createButtonText}>Create</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  addCustomProvider: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F5F5',
    zIndex: 1000,
    elevation: 1000, // For Android
  },
  addCustomProviderContainer: {
    flex: 1,
  },
  addCustomProviderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: 0,
    paddingBottom: 0,
  },
  addCustomProviderTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  providerUrlContainer: {
    paddingHorizontal: screenWidth * 0.05,
    marginTop: screenHeight * 0.03,
  },
  providerUrlSubheading: {
    fontSize: Math.max(22, screenWidth * 0.055),
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    marginBottom: screenHeight * 0.02,
  },
  urlInputBanner: {
    backgroundColor: '#000000',
    borderRadius: Math.max(20, screenWidth * 0.05),
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.02,
    marginBottom: screenHeight * 0.01,
  },
  urlInput: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '400',
    width: '100%',
  },
  createButtonContainer: {
    paddingHorizontal: screenWidth * 0.05,
    marginTop: 'auto',
    marginBottom: screenHeight * 0.05,
  },
  createButton: {
    backgroundColor: '#000000',
    borderRadius: Math.max(25, screenWidth * 0.06),
    paddingVertical: screenHeight * 0.02,
    paddingHorizontal: screenWidth * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(18, screenWidth * 0.045),
    fontWeight: '600',
  },
});
