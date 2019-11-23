import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import styles from './calculator-styles';
import Row from './components/row/row';

const FIRST_ROW_CELLS = [
  { text: 'AC' },
  { text: '+/-' },
  { text: '%' },
  { text: '/' },
];

export default function Calculator(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Row cells={FIRST_ROW_CELLS} />
      </SafeAreaView>
    </View>
  );
}
