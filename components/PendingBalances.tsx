import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { Animated, BackHandler, Dimensions, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackgroundImage from './BackgroundImage';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface PendingBalancesProps {
  onBack: () => void;
}

export default function PendingBalances({ onBack }: PendingBalancesProps) {
  const [activeTab, setActiveTab] = useState('pending'); // 'pending' or 'incomplete'
  const [showInfoModal, setShowInfoModal] = useState(false);
  
  // Handle Android back button
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (showInfoModal) {
        setShowInfoModal(false);
        return true;
      }
      onBack();
      return true; // Prevent default back behavior
    });

    return () => backHandler.remove();
  }, [onBack, showInfoModal]);

  const handleInfoPress = () => {
    setShowInfoModal(true);
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const handleCloseModal = () => {
    setShowInfoModal(false);
  };

  return (
    <Animated.View style={styles.pendingBalances}>
      <BackgroundImage />
      <SafeAreaView style={styles.pendingBalancesContainer}>
        {/* Pending Balances Header */}
        <View style={styles.pendingBalancesHeader}>
          <Text style={styles.pendingBalancesTitle}>Pending Balances</Text>
          <View style={styles.headerIconsContainer}>
            <TouchableOpacity style={styles.infoButton} onPress={handleInfoPress}>
              <Image 
                source={require('../assets/images/info-f.svg')}
                style={styles.infoIcon}
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Tab Buttons */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[
              styles.tabButton, 
              activeTab === 'pending' ? styles.activeTabButton : styles.inactiveTabButton
            ]}
            onPress={() => handleTabPress('pending')}
          >
            <Text style={[
              styles.tabButtonText,
              activeTab === 'pending' ? styles.activeTabButtonText : styles.inactiveTabButtonText
            ]}>
              Pending
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[
              styles.tabButton, 
              activeTab === 'incomplete' ? styles.activeTabButton : styles.inactiveTabButton
            ]}
            onPress={() => handleTabPress('incomplete')}
          >
            <Text style={[
              styles.tabButtonText,
              activeTab === 'incomplete' ? styles.activeTabButtonText : styles.inactiveTabButtonText
            ]}>
              Incomplete
            </Text>
          </TouchableOpacity>
        </View>
        
        {/* Transaction Status Text */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>
            {activeTab === 'pending' ? 'No Pending transactions' : 'No Incomplete transactions'}
          </Text>
        </View>
      </SafeAreaView>

      {/* Info Modal */}
      <Modal
        visible={showInfoModal}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>About Pending Balances</Text>
            </View>
            
                         {/* Modal Content */}
             <ScrollView style={styles.modalContent} showsVerticalScrollIndicator={false}>
               <Text style={styles.modalText}>
                 There are 4 balance types within VeilOn Wallet depending on Private POI status. Please note the following:
               </Text>
               
                               <View style={styles.balanceTypeContainer}>
                  <Text style={styles.balanceTypeText}>
                    <Text style={styles.balanceTypeTitle}>Spendable:</Text> Tokens marked as Spendable have a valid Private POI and can be spent by your Oxzk address with no limitations.
                  </Text>
                </View>
                
                <View style={styles.balanceTypeContainer}>
                  <Text style={styles.balanceTypeText}>
                    <Text style={styles.balanceTypeTitle}>Pending:</Text> Tokens currently in the Unshield-Only Standby Period. After this period, you will be able to generate a Private POI. You still retain full control over these tokens during the Unshield-Only Standby Period and can unshield them back to the original depositing address.
                  </Text>
                </View>
                
                <View style={styles.balanceTypeContainer}>
                  <Text style={styles.balanceTypeText}>
                    <Text style={styles.balanceTypeTitle}>Incomplete:</Text> "Incomplete" tokens have passed the Unshield-Only spending period and are currently waiting on a Private POI. Please wait a few moments for your wallet to generate a Private POI check OR, if you received tokens from another wallet, please ask the sender to open their VeilOn Wallet app to complete the Private POI process.
                  </Text>
                </View>
                
                <View style={styles.balanceTypeContainer}>
                  <Text style={styles.balanceTypeText}>
                    <Text style={styles.balanceTypeTitle}>Restricted:</Text> Tokens that are from known undesirable activity as indicated by a list provider.
                  </Text>
                </View>
             </ScrollView>
            
            {/* Separator Line */}
            <View style={styles.separatorLine} />
            
                         {/* Modal Footer */}
             <View style={styles.modalFooter}>
               <TouchableOpacity style={styles.okayButton} onPress={handleCloseModal}>
                 <LinearGradient
                   colors={['#62615B', '#222220']}
                   start={{ x: 0, y: 0 }}
                   end={{ x: 1, y: 0 }}
                   style={styles.gradientOverlay}
                 >
                   <Text style={styles.okayButtonText}>Okay</Text>
                 </LinearGradient>
               </TouchableOpacity>
             </View>
          </View>
        </View>
      </Modal>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  pendingBalances: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#F5F5F5',
    zIndex: 1000,
    elevation: 1000, // For Android
  },
  pendingBalancesContainer: {
    flex: 1,
  },
  pendingBalancesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: screenWidth * 0.05,
    paddingTop: 0,
    paddingBottom: 0,
  },
  pendingBalancesTitle: {
    fontSize: Math.max(24, screenWidth * 0.06),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  headerIconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: screenWidth * 0.03,
  },
  infoButton: {
    padding: screenWidth * 0.01,
    borderRadius: 8,
  },
  infoIcon: {
    width: screenWidth * 0.06,
    height: screenWidth * 0.06,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: screenWidth * 0.03,
    marginTop: screenHeight * 0.03,
    paddingHorizontal: screenWidth * 0.05,
  },
  tabButton: {
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.06,
    borderRadius: Math.max(25, screenWidth * 0.06),
    minWidth: screenWidth * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabButton: {
    backgroundColor: '#000000',
  },
  inactiveTabButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#000000',
  },
  tabButtonText: {
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
  },
  activeTabButtonText: {
    color: '#FFFFFF',
  },
  inactiveTabButtonText: {
    color: '#000000',
  },
  statusContainer: {
    alignItems: 'center',
    marginTop: screenHeight * 0.04,
    paddingHorizontal: screenWidth * 0.05,
  },
  statusText: {
    fontSize: Math.max(16, screenWidth * 0.04),
    color: '#666666',
    textAlign: 'center',
    fontWeight: '400',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: screenWidth * 0.05,
    maxHeight: screenHeight * 0.8,
    width: screenWidth * 0.85,
  },
  modalHeader: {
    paddingHorizontal: screenWidth * 0.06,
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.02,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  modalTitle: {
    fontSize: Math.max(20, screenWidth * 0.05),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  modalContent: {
    paddingHorizontal: screenWidth * 0.06,
    paddingTop: 0,
    paddingBottom: screenHeight * 0.03,
  },
  modalText: {
    fontSize: Math.max(14, screenWidth * 0.035),
    color: '#333333',
    lineHeight: Math.max(20, screenWidth * 0.05),
    marginBottom: screenHeight * 0.02,
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  balanceTypeContainer: {
    marginBottom: screenHeight * 0.02,
  },
  balanceTypeTitle: {
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'left',
  },
  balanceTypeText: {
    fontSize: Math.max(14, screenWidth * 0.035),
    color: '#666666',
    lineHeight: Math.max(20, screenWidth * 0.05),
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  separatorLine: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: screenWidth * 0.06,
  },
  modalFooter: {
    paddingHorizontal: screenWidth * 0.06,
    paddingVertical: screenHeight * 0.03,
    alignItems: 'center',
  },
  okayButton: {
    borderRadius: Math.max(25, screenWidth * 0.06),
    minWidth: screenWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  okayButtonText: {
    color: '#FFFFFF',
    fontSize: Math.max(16, screenWidth * 0.04),
    fontWeight: '600',
  },
  gradientOverlay: {
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.08,
    borderRadius: Math.max(25, screenWidth * 0.06),
    minWidth: screenWidth * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 