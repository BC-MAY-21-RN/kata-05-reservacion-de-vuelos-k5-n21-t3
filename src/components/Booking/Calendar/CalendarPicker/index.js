import React from 'react';
import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
export const CalendarPicker = ({setDay}) => {
  return (
    <View>
      <Calendar
        theme={{
          backgroundColor: '#5c6ef8',
          calendarBackground: '#ffffff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#5c6ef8',
          selectedDayTextColor: '#5c6ef8',
          todayTextColor: '#5c6ef8',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#5c6ef8',
          selectedDotColor: '#5c6ef8',
          arrowColor: '#5c6ef8',
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#5c6ef8',
          indicatorColor: '#5c6ef8',
          textDayFontFamily: 'monospace',
          textMonthFontFamily: 'monospace',
          textDayHeaderFontFamily: 'monospace',
          textDayFontWeight: '300',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '300',
          textDayFontSize: 16,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 16,
        }}
        onDayPress={day => {
          setDay(day['dateString']);
          console.log(day);
        }}
      />
    </View>
  );
};

{
  /*import React, {useState} from 'react';
import {Button, View} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export const CalendarPicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <View>
      <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};
*/
}
