import React from 'react';
import { View, StatusBar, SafeAreaView } from 'react-native';
import styles from './calculator-styles';
import Row from './components/row/row';
import Display from './components/display/display';
import {
  FIRST_ROW_CELLS,
  SECOND_ROW_CELLS,
  THIRD_ROW_CELLS,
  FOURTH_ROW_CELLS,
  FIFTH_ROW_CELLS,
} from './calculator-structure';

export default function Calculator(props) {
  const [text, setText] = React.useState('');
  const onChange = symbol => {
    switch (symbol) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.': {
        setText(symbol);
      }
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <Display text={text} />
        <Row cells={FIRST_ROW_CELLS} onChange={onChange} />
        <Row cells={SECOND_ROW_CELLS} onChange={onChange} />
        <Row cells={THIRD_ROW_CELLS} onChange={onChange} />
        <Row cells={FOURTH_ROW_CELLS} onChange={onChange} />
        <Row cells={FIFTH_ROW_CELLS} onChange={onChange} />
      </SafeAreaView>
    </View>
  );
}
