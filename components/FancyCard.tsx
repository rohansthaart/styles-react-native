/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.container}>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{uri: 'https://picsum.photos/seed/picsum/300/180'}}
          style={[styles.cardImage]}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Himal Parbat</Text>
          <Text style={styles.cardLabel}>Sagarmatha, Nepal</Text>
          <Text style={styles.cardDescription}>
            Highest Peak of world with height of 8848m. Located in nepal
          </Text>
          <Text style={styles.cardFooter}>15km away</Text>
        </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container:{
    flex:1,
    alignItems:'center'
  },
  card: {
    width: 350,
    height: 360,
    borderRadius: 6,
    flex:1,
    // marginVertical: 12,
    // marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardImage: {
    height: 180,
    marginBottom: 8,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
    // justifyContent:'space-between'
  },
  cardTitle: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: '#242B2E',
    fontSize: 12,
    marginBottom: 12,
    flexShrink: 1,
    marginTop: 6,
  },
  cardFooter: {
    color: '#000000',
  },
});
