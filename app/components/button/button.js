import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './button-styles';
import PropTypes from 'prop-types';

export default function Button(props) {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.buttonText, { color: props.textColor }]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  backgroundOpacityColor: PropTypes.string.isRequired,
  isDoubleSize: PropTypes.bool,
};
