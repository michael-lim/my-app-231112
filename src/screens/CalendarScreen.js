import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

//const CalendarScreen = () => {
function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day) => {
    // day 형식: YYYY-MM-DD
    setSelectedDate(day.dateString);
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        monthFormat={'yyyy MM'}
        onMonthChange={(month) => {
          console.log('month changed', month);
        }}
        hideExtraDays={true}
        disableMonthChange={true}
        markedDates={{
          [selectedDate]: { selected: true, disableTouchEvent: true, selectedColor: 'blue' },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default CalendarScreen;