import * as Clipboard from 'expo-clipboard';
import { Image } from 'expo-image';
import React from 'react';
import { Alert, Dimensions, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

interface PrivateKeyModalProps {
  visible: boolean;
  onClose: () => void;
  privateKey: string;
  title: string;
}

export default function PrivateKeyModal({ 
  visible, 
  onClose, 
  privateKey, 
  title 
}: PrivateKeyModalProps) {
  
  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(privateKey);
      Alert.alert('Copied!', 'Private key has been copied to clipboard');
    } catch (error) {
      Alert.alert('Error', 'Failed to copy private key');
    }
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Modal Header - Centered */}
          <View style={styles.modalHeader}>
            <View style={styles.headerContent}>
              <Text style={styles.modalTitle}>{title}</Text>
                             <Image
                 source={title.includes('VEILON') 
                   ? require('../assets/images/shield-check-black.svg')
                   : require('../assets/images/Icon-black.svg')
                 }
                 style={styles.headerIcon}
                 contentFit="contain"
               />
            </View>
          </View>
          
          {/* First Black Divider */}
          <View style={styles.divider} />
          
          {/* Private Key Content - No gray box */}
          <View style={styles.privateKeyContainer}>
            <Text style={styles.privateKeyText}>{privateKey}</Text>
          </View>
          
          {/* Second Black Divider */}
          <View style={styles.divider} />
          
          {/* Action Buttons with Vertical Divider */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
              <Text style={styles.cancelButtonText}>Cancel</Text>
              <Image
                source={require('../assets/images/cancel.svg')}
                style={styles.buttonIcon}
                contentFit="contain"
              />
            </TouchableOpacity>
            
            {/* Vertical Divider between buttons */}
            <View style={styles.verticalDivider} />
            
            <TouchableOpacity style={styles.copyButton} onPress={handleCopy}>
              <Text style={styles.copyButtonText}>Copy</Text>
              <Image
                source={require('../assets/images/copy.svg')}
                style={styles.buttonIcon}
                contentFit="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: Math.max(20, screenWidth * 0.05),
    padding: screenWidth * 0.05,
    marginHorizontal: screenWidth * 0.05,
    maxWidth: screenWidth * 0.9,
    maxHeight: screenHeight * 0.7,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: screenHeight * 0.02,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: Math.max(18, screenWidth * 0.045),
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    marginRight: screenWidth * 0.02,
  },
  headerIcon: {
    width: Math.max(24, screenWidth * 0.06),
    height: Math.max(24, screenWidth * 0.06),
  },
  divider: {
    height: 1,
    backgroundColor: '#000000',
    marginVertical: screenHeight * 0.02,
    marginHorizontal: -screenWidth * 0.05, // Extend to modal edges
  },
  privateKeyContainer: {
    paddingVertical: screenHeight * 0.02,
    marginBottom: screenHeight * 0.02,
    maxHeight: screenHeight * 0.3,
  },
  privateKeyText: {
    fontSize: Math.max(12, screenWidth * 0.03),
    color: '#333333',
    fontFamily: 'monospace',
    lineHeight: Math.max(18, screenWidth * 0.045),
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch', // Make buttons stretch to fill height
    marginHorizontal: -screenWidth * 0.05, // Extend to modal edges
  },
  cancelButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.04,
  },
  buttonIcon: {
    width: Math.max(16, screenWidth * 0.04),
    height: Math.max(16, screenWidth * 0.04),
    marginLeft: screenWidth * 0.02,
  },
  cancelButtonText: {
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
    color: '#666666',
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#000000',
    marginVertical: -screenHeight * 0.015, // Extend to button edges
  },
  copyButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: screenHeight * 0.015,
    paddingHorizontal: screenWidth * 0.04,
  },
  copyButtonText: {
    fontSize: Math.max(14, screenWidth * 0.035),
    fontWeight: '600',
    color: '#000000', // Changed to black
  },
});
