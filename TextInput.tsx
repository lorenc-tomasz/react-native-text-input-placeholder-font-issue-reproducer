import React, { forwardRef, useRef, useCallback } from 'react';
import {Platform, StyleSheet, TextInput, TextInputProps} from 'react-native';

const CustomTextInput = forwardRef<TextInput, TextInputProps>((props, ref) => {
  const inputRef = useRef<TextInput | null>(null);

  const setRef = useCallback(
    (node: TextInput | null) => {
      if (node) {
        inputRef.current = node;

        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          const mutableRef = ref as React.MutableRefObject<TextInput | null>;
          mutableRef.current = node;
        }

        // Workaround for Android to apply style before setting placeholder
        // to apply font family correctly
        if (Platform.OS === 'android') {
          node.setNativeProps({
            style: StyleSheet.flatten([{
                fontFamily: 'Roboto',
                fontWeight: '400',
            }, props.style ?? {}]),
          });
        }
      }
    },
    [ref],
  );

  return <TextInput ref={setRef} {...props} />;
});

export default CustomTextInput;
