import { useFocusEffect } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';
import { Dimensions, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from '../components/BackgroundImage';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function VielOnDEXScreen() {
  const router = useRouter();
  const [selectedToken, setSelectedToken] = useState("WETH");

  // Check for selected token when screen comes into focus
  useFocusEffect(
    useCallback(() => {
      const checkSelectedToken = () => {
        if ((global as any).selectedToken) {
          setSelectedToken((global as any).selectedToken);
          // Clear the global variable after using it
          (global as any).selectedToken = undefined;
        }
      };

      // Check when screen comes into focus
      checkSelectedToken();
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <BackgroundImage />
      
      {/* Main Content Container */}
      <View style={styles.contentContainer}>
        {/* Header Area */}
        <View style={styles.header}>
          <View style={styles.titleSection}>
            <Text style={styles.appName}>VielOn DEX</Text>
            <Text style={styles.boldAppName}>VielOn DEX</Text>
            <Text style={styles.subtitle}>Private and public DEX aggregator</Text>
          </View>
          <Pressable style={styles.privateButton}>
            <Text style={styles.privateButtonText}>Private</Text>
          </Pressable>
        </View>

        {/* Input Section */}
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <Pressable style={styles.maxButton}>
              <Text style={styles.maxButtonText}>Max</Text>
            </Pressable>
            <TextInput
              style={styles.inputField}
              placeholder="0.00"
              placeholderTextColor="#CCCCCC"
              keyboardType="numeric"
              defaultValue=""
            />
            <Pressable 
              style={styles.tokenButton}
              onPress={() => router.push('/token-selection')}
            >
              <Text style={styles.tokenButtonText}>{selectedToken}</Text>
              <Text style={styles.chevron}>▼</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    zIndex: 1,
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
    paddingTop: 0,
    paddingHorizontal: screenWidth * 0.05,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: screenHeight * 0.02,
    paddingTop: 0,
  },
  titleSection: {
    flex: 1,
    paddingRight: 20,
  },
  appName: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: screenHeight * 0.03,
  },
  boldAppName: {
    fontSize: Math.max(32, screenWidth * 0.08),
    fontWeight: '900',
    color: '#000000',
    marginBottom: 0,
  },
  subtitle: {
    fontSize: Math.max(16, screenWidth * 0.04),
    color: '#666666',
    fontWeight: '500',
  },
  privateButton: {
    backgroundColor: '#000000',
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.02,
    borderRadius: 20,
    minWidth: screenWidth * 0.2,
    alignItems: 'center',
  },
  privateButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
  },
  inputSection: {
    marginTop: 0,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: screenWidth * 0.03,
  },
  maxButton: {
    backgroundColor: '#000000',
    paddingHorizontal: screenWidth * 0.03,
    paddingVertical: screenHeight * 0.02,
    borderRadius: 12,
  },
  maxButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
  },
  inputField: {
    flex: 1,
    fontSize: Math.max(18, screenWidth * 0.045),
    color: '#000000',
    fontWeight: '500',
    paddingVertical: screenHeight * 0.02,
    paddingHorizontal: screenWidth * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  tokenButton: {
    backgroundColor: '#000000',
    paddingHorizontal: screenWidth * 0.04,
    paddingVertical: screenHeight * 0.02,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  tokenButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
  },
  chevron: {
    color: '#FFFFFF',
    fontSize: Math.max(12, screenWidth * 0.03),
    fontWeight: 'bold',
  },
});
