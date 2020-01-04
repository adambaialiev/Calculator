import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './display-styles';

export default function Display(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

Display.propTypes = {
  text: PropTypes.string.isRequired,
};
