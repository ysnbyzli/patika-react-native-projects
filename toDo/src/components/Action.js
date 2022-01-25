import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';

const Action = ({addTask}) => {
  const [keyboard, setKeyboard] = useState('');

  const inputRef = useRef();

  const handleAddTask = () => {
    if (keyboard === '') {
      inputRef.current.focus();
    } else {
      addTask(keyboard);
      setKeyboard('');
    }
  };

  return (
    <View style={styles.actions}>
      <TextInput
        ref={inputRef}
        style={styles.input}
        value={keyboard}
        onChangeText={setKeyboard}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Action;

const styles = StyleSheet.create({
  actions: {
    marginTop: 'auto',
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
});
