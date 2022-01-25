import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

const Card = ({item: {idMeal, strMealThumb, strMeal}, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.category}>
        <Image
          source={{uri: strMealThumb}}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>{strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
  },
  text: {
    marginLeft: 15,
    fontSize: 20,
    color: '#000000',
    fontWeight: '300',
  },
});
