import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import styles from './button-styles';
import PropTypes from 'prop-types';

export default function Button(props) {
  const touchable = React.useRef(null);
  const onPressIn = () => {
    if (!touchable.current) {
      return;
    }
    touchable.current.setOpacityTo(0, 0);
  };
  const onPressOut = () => {
    if (!touchable.current) {
      return;
    }
    touchable.current.setOpacityTo(1, 300);
  };
  return (
    <View
      style={[
        styles.wrapper,
        { backgroundColor: props.backgroundOpacityColor },
        props.isDoubleSize && styles.wrapperIfDoubledButton,
      ]}>
      <TouchableOpacity
        activeOpacity={0}
        underlayColor={props.backgroundOpacityColor}
        onPress={props.onChange}
        style={[
          styles.button,
          { backgroundColor: props.backgroundColor },
          props.isDoubleSize && styles.doubledButton,
        ]}
        ref={touchable}
      />
      <TouchableWithoutFeedback
        onPress={props.onChange}
        onPressIn={onPressIn}
        onPressOut={onPressOut}>
        <Text
          style={[
            styles.buttonText,
            { color: props.textColor },
            props.isDoubleSize && styles.buttonTextIfDoubledButton,
          ]}
          suppressHighlighting>
          {props.text}
        </Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  backgroundOpacityColor: PropTypes.string.isRequired,
  isDoubleSize: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
