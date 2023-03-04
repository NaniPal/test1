import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Номер бригады 6</Text>
        <Text style={styles.headerText}>Номер прибора 11297</Text>
        <Text style={styles.headerText}>Номер скважины 246</Text>
      </View>

      <ScrollView style={styles.tableContainer}>
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.rowText}>1</Text>
            <Text style={styles.rowText}>Монтаж подьемника</Text>
            <Text style={styles.rowText}>80</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>2</Text>
            <Text style={styles.rowText}>Подьем насосывых шланг</Text>
            <Text style={styles.rowText}>108</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>3</Text>
            <Text style={styles.rowText}>Подготовительная работа</Text>
            <Text style={styles.rowText}>25</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>4</Text>
            <Text style={styles.rowText}>Подьем труб НКТ</Text>
            <Text style={styles.rowText}>188</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>5</Text>
            <Text style={styles.rowText}>Спуск труб НКТ</Text>
            <Text style={styles.rowText}>110</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>6</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>7</Text>
            <Text style={styles.rowText}>Спуск насосывых шланг</Text>
            <Text style={styles.rowText}>81</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>8</Text>
            <Text style={styles.rowText}>Демонтаж подьемника</Text>
            <Text style={styles.rowText}>60</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>9</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>10</Text>
            <Text style={styles.rowText}>Ожидание оборудование</Text>
            <Text style={styles.rowText}>180</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>11</Text>
            <Text style={styles.rowText}>Ожидание ГИС</Text>
            <Text style={styles.rowText}>120</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>12</Text>
            <Text style={styles.rowText}>Работы ГИС</Text>
            <Text style={styles.rowText}>120</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>13</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>14</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>15</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>16</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>17</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>18</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>19</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowText}>20</Text>
            <Text style={styles.rowText}>Jane</Text>
            <Text style={styles.rowText}>Doe</Text>
          </View>
          {/* Добавьте еще строки для таблицы */}
        </View>
       </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bridge')}>
        <Text style={styles.buttonText}>Bridge</Text>
      </TouchableOpacity>
      <Text style={styles.footerText}>Месторождение: Teren-Uzek/220 ALDE/Kul-6brig</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'column',
    marginTop: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tableContainer: {
    width: '80%',
    marginTop: 10,
    maxHeight: '70%',
  },
  table: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  rowText: {
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footerText: {
    position: 'absolute',
    bottom: 0,
    padding: 10,
  },
});