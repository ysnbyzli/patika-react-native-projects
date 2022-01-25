import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

const Card = ({
  item: {idCategory, strCategory, strCategoryThumb, strCategoryDescription},
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.category}>
        <Image
          source={{uri: strCategoryThumb}}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.text}>{strCategory}</Text>
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
