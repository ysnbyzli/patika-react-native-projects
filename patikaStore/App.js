import React from 'react';
import {StyleSheet, FlatList, Text, TextInput, View} from 'react-native';

import Product from './src/Product';

import products from './data';

const renderItem = ({item}) => <Product item={item} />;

const keyExtractor = item => item.id.toString();

const App = () => {
  return (
    <FlatList
      columnWrapperStyle={styles.columnWrapper}
      data={products}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      numColumns={2}
      style={styles.container}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.title}>PatikaStore</Text>
          <TextInput style={styles.search} />
        </View>
      }
    />
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: '#15141F',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  header: {marginBottom: 15},
  title: {
    color: '#FFFFFF',
    marginVertical: 5,
    fontWeight: '800',
    fontSize: 22,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  search: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});
