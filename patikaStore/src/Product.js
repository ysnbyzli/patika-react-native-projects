import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const {width} = Dimensions.get('window');

const Product = ({item: {id, title, imgURL, price, inStock}}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imgURL}} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
      {inStock && <Text style={styles.stock}>Stokta yok</Text>}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    width: width * 0.46,
    backgroundColor: '#FFFFFF',
    borderRadius: 7,
    marginBottom: 10,
    padding: 10,
    position: 'relative',
  },
  image: {
    height: 120,
    width: '100%',
  },
  title: {
    color: '#000',
  },
  price: {
    marginTop: 'auto',
  },
  stock: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 2,
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 5,
    color: '#FFFFFF',
  },
});
