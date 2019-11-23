import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './row-styles';

export default function Row(props) {
  return (
    <View style={styles.container}>
      {props.cells.map((cell, i) => (
        <View style={styles.inner}>
          <TouchableOpacity key={i} style={styles.button}>
            <Text style={styles.buttonText}>{cell.text}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}
