import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import BlackBanner from '../../components/BlackBanner';
import HeaderIcons from '../../components/HeaderIcons';
import WalletPage from '../../components/WalletPage';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function SettingsTab() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [showWalletOverlay, setShowWalletOverlay] = useState(false);
  
  return (
    <SafeAreaView style={styles.container}>
      {/* Temporarily commented out to test scrolling */}
      {/* <BackgroundImage /> */}
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>VielOn</Text>
        <HeaderIcons />
      </View>
      
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insets.bottom + 24 }]}
        showsVerticalScrollIndicator={true}
        scrollEnabled={true}
        contentInsetAdjustmentBehavior="automatic"
        contentInset={{ bottom: insets.bottom }}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>Settings</Text>
        </View>
        
        {/* Black Banner */}
        <BlackBanner
          header="Broadcasters"
          subtitle="Connecting to public broadcasters"
          icon={require('../../assets/images/Ellipse 207.svg')}
        />

        <View style={styles.manageContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title2}>MANAGE</Text>
          </View>
        </View>
        
        {/* Additional Black Banners */}
        <BlackBanner
          header="Wallets"
          subtitle="Manage your available wallets"
          icon={require('../../assets/images/_.svg')}
          onPress={() => setShowWalletOverlay(!showWalletOverlay)}
        />
        

        
        <BlackBanner
          header="Pending balances"
          subtitle="View pending shields and other balances"
          icon={require('../../assets/images/_.svg')}
        />
        
        <BlackBanner
          header="Networks & RPCs"
          subtitle="Customize network RPCs"
          icon={require('../../assets/images/_.svg')}
        />
        
        <BlackBanner
          header="Address Book"
          subtitle="Manage saved addresses"
          icon={require('../../assets/images/_.svg')}
        />
        
        <BlackBanner
          header="Default Settings"
          subtitle="Set currency for balances"
          icon={require('../../assets/images/_.svg')}
        />
        
        <BlackBanner
          header="Set PIN"
          subtitle="Secure your wallets with a PIN"
          icon={require('../../assets/images/_.svg')}
        />
        

        

        
        {/* HELP Section */}
        <View style={styles.helpContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.helpTitle}>HELP</Text>
          </View>
        </View>
        
        {/* Help Black Banners */}
        <BlackBanner
          header="Support"
          subtitle="Get help and contact support"
          icon={require('../../assets/images/_.svg')}
        />
        
        <BlackBanner
          header="FAQ"
          subtitle="Frequently asked questions"
          icon={require('../../assets/images/_.svg')}
        />
        
                <BlackBanner
          header="Documentation"
          subtitle="User guides and tutorials"
          icon={require('../../assets/images/_.svg')}
        />
        
                {/* Bottom spacer to ensure scrollable content */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
      
      {/* Wallet Page - Slides in on top of settings */}
      {showWalletOverlay && (
        <WalletPage onBack={() => setShowWalletOverlay(false)} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: screenHeight * 0.02,
    paddingBottom: 0,
  },
  appName: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: screenWidth * 0.05,
  },
  content: {
    padding: screenWidth * 0.05,
  },
  manageContainer: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  helpContainer: {
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  textContainer: {
    marginTop: 0,
  },
  title: {
    fontSize: Math.max(28, screenWidth * 0.07),
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    paddingBottom: screenHeight * 0.01,
  },
  title2: {
    fontSize: Math.max(22, screenWidth * 0.05),
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    paddingBottom: screenHeight * 0.01,
  },
  helpTitle: {
    fontSize: Math.max(22, screenWidth * 0.05),
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
    paddingBottom: screenHeight * 0.01,
  },
  bottomSpacer: {
    height: screenHeight * 0.1,
  },

});
