/* eslint-disable prettier/prettier */
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES21
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/21655968/pexels-photo-21655968/free-photo-of-people-walking-in-rain.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio, eos quisquam eaque quod aspernatur adipisci, dignissimos
            labore facere corporis perspiciatis incidunt officia neque enim
            nobis consequuntur quasi dolorum error blanditiis!
          </Text>
        </View>

        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=16',
              );
            }}>
            <Text style={styles.socialLinks}>Learn More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              openWebsite(
                'https://www.youtube.com/watch?v=eL5qYJ7y68k&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c&index=16',
              );
            }}>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
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
  card: {
    width: 350,
    // height: 340,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  elevatedCard: {
    backgroundColor: '#E07C24',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
  },
  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  cardImage: {
    height: 190,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
  },
  socialLinks: {
    fontSize:16,
    color:'#000',
    backgroundColor:'white',
    paddingHorizontal:20,
    paddingVertical:6,
    borderRadius:6
  },
});
