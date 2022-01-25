import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
  Linking,
  Alert,
} from 'react-native';
import React, {useCallback} from 'react';
import useGet from '../hooks/useGet';
import Loading from '../components/Loading';

const {width, height} = Dimensions.get('window');

const Detail = ({route, navigation}) => {
  const {id} = route.params;

  const [data, loading, error] = useGet(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    id,
  );

  const handleOpenURL = async () => {
    const url = data?.meals[0].strYoutube;
    await Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: data?.meals[0].strMealThumb}} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title}>{data?.meals[0].strMeal}</Text>
        <Text style={styles.desc}>{data?.meals[0].strInstructions}</Text>
        <TouchableWithoutFeedback onPress={handleOpenURL}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Watch on Youtube</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: height * 0.35,
  },
  body: {
    padding: 15,
  },
  title: {
    fontSize: 22,
    color: '#eb4d4b',
    marginBottom: 10,
  },
  desc: {
    color: '#000000',
  },
  btn: {
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb4d4b',
    padding: 14,
    borderRadius: 10,
  },
  btnText: {
    color: '#ffffff',
  },
});
