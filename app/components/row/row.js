import React from 'react';
import { View } from 'react-native';
import styles from './row-styles';
import Button from '../button/button';
import PropTypes from 'prop-types';

export default function Row(props) {
  return (
    <View style={styles.container}>
      {props.cells.map((cell, i) => (
        <Button key={i} {...cell} />
      ))}
    </View>
  );
}

Row.propTypes = {
  cells: PropTypes.array.isRequired,
};
