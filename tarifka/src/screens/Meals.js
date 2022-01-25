import {View, FlatList, StyleSheet} from 'react-native';
import React from 'react';

import useGet from '../hooks/useGet';
import MealCard from '../components/MealCard';
import Separator from '../components/Separator';
import Loading from '../components/Loading';

const keyExtractor = item => item.idMeal.toString();

const Meals = ({route, navigation}) => {
  const {category} = route.params;
  const {navigate} = navigation;
  const [data, loading, error] = useGet(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,
    category,
  );

  const renderItem = ({item}) => (
    <MealCard
      item={item}
      onPress={() => navigate('Detail', {id: item?.idMeal})}
    />
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={data?.meals}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={Separator}
        />
      )}
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {flex: 1},
});
