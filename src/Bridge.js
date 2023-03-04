import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function BridgeScreen() {
  // Генерация случайных данных для графика
  const data = {
    labels: ['1ч', '2ч', '3ч', '4ч', '5ч', '6ч', '7ч', '8ч', '9ч', '10ч', '11ч', '12ч', '13ч', '14ч', '15ч', '16ч', '17ч', '18ч', '19ч', '20ч', '21ч', '22ч', '23ч', '24ч'],
    datasets: [
      {
        data: [1, 3, 2, 5, 4, 7, 6, 8, 3, 5, 2, 6, 4, 7, 2, 1, 4, 5, 3, 6, 7, 8, 4, 5],
        color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        <LineChart
          data={data}
          width={5000}
          height={900}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={styles.chart}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
});