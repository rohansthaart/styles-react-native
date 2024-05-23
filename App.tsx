import {Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElivatedCard from './components/ElivatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App(): JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElivatedCard />
        <FancyCard />
        <ContactList />

        <ActionCard />
        <Text>App</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
