/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Aqua</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Black</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Black</Text>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 4,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardTwo: {
    backgroundColor: 'aqua',
  },
  cardThree: {
    backgroundColor: 'black',
  },
});
