import {View, StyleSheet, StatusBar, FlatList} from 'react-native';
import React, {useState} from 'react';
import Header from './components/Header';
import Task from './components/Task';
import Action from './components/Action';

const keyExtractor = item => item.id.toString();

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Header'da gösterilmek üzere tamamlanmamış task'ların sayısı alınıyor.
  const length = tasks.filter(item => item.completed === false).length;

  // FlatList'de render edilecek component ve gönderilen proplar
  const renderItem = ({item}) => (
    <Task task={item} completedTask={completedTask} deleteTask={deleteTask} />
  );

  // Yeni bir task ekleme fonksiyonu parametre olarak sadece text alıyor
  const addTask = text => {
    /*
     * Bu fonksiyon ile default olarak bir obje olusturup state'i güncelliyoruz.
     * id ve completed özellikleri default olarak tanımlanıyor
     */
    const newTask = {id: new Date().getTime(), text, completed: false};
    setTasks([...tasks, newTask]);
  };

  // Task tamamlama fonksiyonu
  const completedTask = id => {
    // Gelen id'ye göre task'ı buluyoruz
    const item = tasks.find(item => item.id === id);
    // Task'ın daha önce tamamlanmış olup olmadıgına bakıyoruz
    if (item.completed) {
      item.completed = false;
    } else {
      item.completed = true;
    }
    // State içerisindeki yerini bozmamak için map ile dönüp güncelliyoruz
    setTasks(tasks.map(task => (task.id === id ? item : task)));
  };

  // Task silme fonksiyonu
  const deleteTask = id => {
    // Gelen id'ye göre state'deki verileri filtereliyoruz.
    setTasks(tasks.filter(item => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#ffffff'} barStyle="dark-content" />
      <Header length={length} />
      <FlatList
        data={tasks}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
      <Action addTask={addTask} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
