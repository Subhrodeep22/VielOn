import { Image } from 'expo-image';
import { Tabs } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, Platform, StyleSheet, View } from 'react-native';

export default function TabLayout() {
  const [activeTab, setActiveTab] = useState('home');
  const animatedValues = useRef({
    home: new Animated.Value(1), // Start with home active
    wallet: new Animated.Value(0), // Start completely hidden
    portfolio: new Animated.Value(0), // Start completely hidden
    settings: new Animated.Value(0), // Start completely hidden
  }).current;



  const animateTab = (tabName: string, isActive: boolean) => {
    const value = animatedValues[tabName as keyof typeof animatedValues];
    Animated.timing(value, {
      toValue: isActive ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const handleTabPress = (tabName: string) => {
    if (tabName === activeTab) return; // Don't animate if same tab
    
    // Animate out current active tab
    animateTab(activeTab, false);
    // Animate in new active tab
    animateTab(tabName, true);
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBarBackground} />
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#8B8A7F',
          tabBarInactiveTintColor: '#666666',
          tabBarStyle: {
            backgroundColor: 'transparent',
            borderTopWidth: 0,
            height: Platform.OS === 'ios' ? 88 : 90,
            paddingBottom: Platform.OS === 'ios' ? 20 : 10,
            paddingTop: 10,
            marginHorizontal: 16,
            marginBottom: 10,
            elevation: 0,
            position: 'relative',
            zIndex: 1,
          },
          headerShown: false,
        }}
      screenListeners={{
        tabPress: (e) => {
          const tabName = e.target?.split('-')[0] || 'home';
          handleTabPress(tabName);
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ size }) => (
            <View style={styles.tabIconContainer}>
              {activeTab === 'home' && (
                <View style={styles.activeIndicator} />
              )}
              <Animated.View
                style={[
                  styles.iconContainer,
                  {
                    transform: [
                      {
                        translateY: animatedValues.home.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -8],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <Image
                  source={activeTab === 'home' ? require('../../assets/images/home-active.svg') : require('../../assets/images/home.svg')}
                  style={{ width: size, height: size }}
                  contentFit="contain"
                />
              </Animated.View>

            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'dApps',
          tabBarIcon: ({ size }) => (
            <View style={styles.tabIconContainer}>
              {activeTab === 'wallet' && (
                <View style={styles.activeIndicator} />
              )}
              <Animated.View
                style={[
                  styles.iconContainer,
                  {
                    transform: [
                      {
                        translateY: animatedValues.wallet.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -8],
                        }),
                      },
                    ],
                  },
                ]}
              >
                <Image
                  source={activeTab === 'wallet' ? require('../../assets/images/wallet-active.svg') : require('../../assets/images/wallet-tab.svg')}
                  style={{ width: size, height: size }}
                  contentFit="contain"
                />
              </Animated.View>

            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: 'Activity',
          tabBarIcon: ({ size }) => (
            <View style={styles.tabIconContainer}>
              {activeTab === 'portfolio' && (
                <View style={styles.activeIndicator} />
              )}
              <Animated.View
                style={[
                  styles.iconContainer,
                  {
                    transform: [
                      {
                        translateY: animatedValues.portfolio.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -8],
                        }),
                      },
                    ],
                  },
                ]}
              >
                                 <Image
                   source={activeTab === 'portfolio' ? require('../../assets/images/Portfolio-active.svg') : require('../../assets/images/portfolio.svg')}
                   style={{ width: size, height: size }}
                   contentFit="contain"
                 />
              </Animated.View>

            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ size }) => (
            <View style={styles.tabIconContainer}>
              {activeTab === 'settings' && (
                <View style={styles.activeIndicator} />
              )}
              <Animated.View
                style={[
                  styles.iconContainer,
                  {
                    transform: [
                      {
                        translateY: animatedValues.settings.interpolate({
                          inputRange: [0, 1],
                          outputRange: [0, -8],
                        }),
                      },
                    ],
                  },
                ]}
              >
                                 <Image
                   source={activeTab === 'settings' ? require('../../assets/images/Settings-active.svg') : require('../../assets/images/Settings.svg')}
                   style={{ width: size, height: size }}
                   contentFit="contain"
                 />
              </Animated.View>

            </View>
          ),
        }}
      />
    </Tabs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  tabIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: 50, // Fixed height to prevent overlap
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeIndicator: {
    position: 'absolute',
    top: -10,
    width: 20,
    height: 3,
    backgroundColor: '#FFFFFF',
    borderRadius: 1.5,
    zIndex: 1,
  },
  tabBarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

});
