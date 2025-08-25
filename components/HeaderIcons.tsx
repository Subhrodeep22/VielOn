import { Image } from 'expo-image';
import * as React from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

interface HeaderIconsProps {
  onSearchPress?: () => void;
  onBellPress?: () => void;
}

export default function HeaderIcons({ onSearchPress, onBellPress }: HeaderIconsProps) {
  return (
    <View style={styles.headerIcons}>
             <Pressable style={styles.iconButton} onPress={onSearchPress}>
         <Image
           source={require('../assets/images/Ellipse 41.svg')}
           style={styles.iconBackground}
           contentFit="contain"
         />
         <Image
           source={require('../assets/images/search-outline.svg')}
           style={styles.headerIcon}
           contentFit="contain"
         />
       </Pressable>
       <Pressable style={styles.iconButton} onPress={onBellPress}>
         <Image
           source={require('../assets/images/Ellipse 41.svg')}
           style={styles.iconBackground}
           contentFit="contain"
         />
         <Image
           source={require('../assets/images/bell.svg')}
           style={styles.headerIcon}
           contentFit="contain"
         />
       </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerIcons: {
    flexDirection: 'row',
    gap: Math.max(8, screenWidth * 0.02),
  },
  iconButton: {
    width: Math.max(40, screenWidth * 0.1),
    height: Math.max(40, screenWidth * 0.1),
    position: 'relative',
    marginHorizontal: Math.max(4, screenWidth * 0.01),
  },
  iconBackground: {
    width: Math.max(40, screenWidth * 0.1),
    height: Math.max(40, screenWidth * 0.1),
    position: 'absolute',
    top: 0,
    left: 0,
  },
  headerIcon: {
    width: Math.max(20, screenWidth * 0.05),
    height: Math.max(20, screenWidth * 0.05),
    tintColor: '#000000',
    position: 'absolute',
    top: Math.max(10, screenWidth * 0.025),
    left: Math.max(10, screenWidth * 0.025),
  },
});
