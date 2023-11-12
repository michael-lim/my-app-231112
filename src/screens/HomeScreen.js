import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Plotly from 'react-native-plotly';

// import HomeScreen from './HomeScreen';
// import DetailScreen from './DetailScreen';

// const Stack = createStackNavigator();



const App = () => {
  const [count, setCount] = useState(0);
  const [dates, setDates] = useState([]); // 두번째 섹션에 날짜 저장
  const [graphData, setGraphData] = useState([]); // 세번째 섹션에 그래프 데이터 저장

  const incrementCount = () => {
    setCount(count + 1);

    // 현재 날짜를 구하고 날짜 목록에 추가
    const currentDate = new Date();
    setDates([...dates, currentDate]);
    setDates([currentDate]);

    // 그래프 데이터 업데이트
    const newDataPoint = { date: currentDate, value: count + 1 };
    setGraphData([...graphData, newDataPoint]);


  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>홈</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.section}>
          <Text style={styles.sectionText}>{count}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.dateText}>
            {dates.map((date, index) => (
              <Text key={index}>
                {date.getFullYear()}년 {date.getMonth() + 1}월 {date.getDate()}일 {date.getHours()}시 {date.getMinutes()}분 {date.getSeconds()}초
                {index < dates.length - 1 ? '\n' : ''}
              </Text>
            ))}
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            {/* 세번째 섹션에 그래프를 표시하는 로직을 추가 */}
            {graphData.length > 0 ? (
              <LineChart
                data={{
                  labels: graphData.map((dataPoint) => dataPoint.date.toISOString()), // Assuming date is unique
                  datasets: [
                    {
                      data: graphData.map((dataPoint) => dataPoint.value),
                    },
                  ],
                }}
                width={300}
                height={200}
                yAxisLabel=""
                yAxisSuffix=""
                withInnerLines={false}
                withOuterLines={false}
                withDots={true}
                chartConfig={{
                  backgroundGradientFrom: 'lightgray',
                  backgroundGradientTo: 'lightgray',
                  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  propsForDots: {
                    r: '6',
                    strokeWidth: '2',
                    stroke: 'blue',
                  },
                }}
                style={{ marginVertical: 8 }}
              />
            ) : (
              <Text style={styles.sectionText}>No data to display.</Text>
            )}
          </Text>
        </View>
        <View style={styles.circleButtonContainer}>
          <TouchableOpacity onPress={incrementCount} style={styles.circleButton}>
            <Text style={styles.circleButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>

        <Text style={styles.footerText}>홈</Text>
        <Text style={styles.footerText}>달력</Text>
        <Text style={styles.footerText}>통계</Text>
        <Text style={styles.footerText}>금연</Text>
        <Text style={styles.footerText}>설정</Text>

        {/* <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
          </Stack.Navigator>
        </NavigationContainer> */}

      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'White',
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'left',
  },
  headerText: {
    fontSize: 24,
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
  section: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'lightgray',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionText: {
    fontSize: 18,
  },
  dateText: {
    fontSize: 16,
  },
  circleButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButton: {
    width: 80,
    height: 80,
    backgroundColor: 'lightblue',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleButtonText: {
    fontSize: 24,
  },
  footer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  footerText: {
    fontSize: 18,
  },
});

export default App;
