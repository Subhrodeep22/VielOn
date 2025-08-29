import React from 'react';
import { StyleSheet } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function CommonImages() {
  return (
    <>
      <SvgXml
        xml={require('../assets/images/Group 1334.svg')}
        style={styles.backgroundImage}
      />
      <SvgXml
        xml={require('../assets/images/VeilOn.svg')}
        style={styles.logo}
      />
      <SvgXml
        xml={require('../assets/images/Ellipse 41.svg')}
        style={styles.ellipse1}
      />
      <SvgXml
        xml={require('../assets/images/search-outline.svg')}
        style={styles.searchIcon}
      />
      <SvgXml
        xml={require('../assets/images/Ellipse 41.svg')}
        style={styles.ellipse2}
      />
      <SvgXml
        xml={require('../assets/images/bell.svg')}
        style={styles.bellIcon}
      />
    </>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    position: 'absolute',
    top: -70,
    width: '100%',
    height: '90%',
    resizeMode: 'contain',
  },
  logo: {
    width: 82,
    height: 78,
    resizeMode: 'contain',
    position: 'absolute',
    top: 37,
    left: 18,
  },
  ellipse1: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    position: 'absolute',
    top: 47,
    right: 80,
  },
  ellipse2: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    position: 'absolute',
    top: 47,
    right: 18,
  },
  searchIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    top: 59.5,
    right: 92.5,
  },
  bellIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    top: 59.5,
    right: 30.5,
  },
});
