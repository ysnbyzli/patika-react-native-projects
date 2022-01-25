import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import React from 'react';

const Task = ({task: {id, text, completed}, completedTask, deleteTask}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => completedTask(id)}
      onLongPress={() => deleteTask(id)}>
      <View style={styles.task}>
        <Text style={[styles.text, completed && styles.completed]}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Task;

const styles = StyleSheet.create({
  task: {
    backgroundColor: '#ffffff',
    padding: 15,
    paddingVertical: 20,
    elevation: 6,
    margin: 10,
    borderRadius: 8,
  },
  text: {
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 1)',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'rgba(0,0,0,.5)',
  },
});
