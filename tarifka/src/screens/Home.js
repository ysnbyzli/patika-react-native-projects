import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';

import useGet from '../hooks/useGet';
import CategoryCard from '../components/CategoryCard';
import Separator from '../components/Separator';
import Loading from '../components/Loading';

const keyExtractor = item => item.idCategory.toString();

const Home = ({navigation}) => {
  const [data, loading, error] = useGet(
    'https://www.themealdb.com/api/json/v1/1/categories.php',
  );

  const {navigate} = navigation;

  const renderItem = ({item}) => (
    <CategoryCard
      item={item}
      onPress={() => navigate('Meals', {category: item?.strCategory})}
    />
  );

  return (
    <View style={styles.container}>
      {true ? (
        <Loading />
      ) : (
        <FlatList
          data={data?.categories}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ItemSeparatorComponent={Separator}
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, .5)',
  },
});
