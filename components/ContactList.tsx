/* eslint-disable prettier/prettier */
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'John Doe',
      status: "Hey there! I'm using WhatsApp.",
      imageUrl:
        'https://images.pexels.com/photos/22814807/pexels-photo-22814807/free-photo-of-blonde-woman-posing-in-pink-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
      uid: 2,
      name: 'Jane Doe',
      status: "Hey there! I'm using WhatsApp.",
      imageUrl:
        'https://images.pexels.com/photos/22814807/pexels-photo-22814807/free-photo-of-blonde-woman-posing-in-pink-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      uid: 3,
      name: 'John Smith',
      status: "Hey there! I'm using WhatsApp.",
      imageUrl:
        'https://images.pexels.com/photos/22814807/pexels-photo-22814807/free-photo-of-blonde-woman-posing-in-pink-dress.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },

    {
      uid: 4,
      name: 'Jane Smith',
      status: "Hey there! I'm using WhatsApp.",
      imageUrl:
        'https://images.pexels.com/photos/22884699/pexels-photo-22884699/free-photo-of-a-person-pouring-coffee-from-a-pot-into-a-cup.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts?.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image source={{uri: imageUrl}} style={styles.userImage} />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
    paddingHorizontal: 16,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#3f51b5',
    padding: 4,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginRight: 8,
    marginBottom: 4,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userStatus: {
    fontSize: 12,
  },
});
