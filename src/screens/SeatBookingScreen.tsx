import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../theme/theme';

interface DateProps {
  date: number;
  day: string;
}

interface SeatProps {
  number: number;
  taken: boolean;
  selected: boolean;
}

const timeArray: string[] = [
  '10:30',
  '12:30',
  '14:30',
  '15:00',
  '19:30',
  '21:00',
];

const generateDate = (): DateProps[] => {
  const date = new Date();
  let weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let weekdays = [];

  for (let i = 0; i < 7; i++) {
    let tempDate = {
      date: new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDate(),
      day: weekday[new Date(date.getTime() + i * 24 * 60 * 60 * 1000).getDay()],
    };

    weekdays.push(tempDate);
  }

  return weekdays;
};

const generateSeats = (): SeatProps[][] => {
  let numRow = 8;
  let numColumn = 3;
  let rowArray = [];
  let start = 1;
  let reachnine = false;

  for (let i = 0; i < numRow; i++) {
    let columnArray = [];

    for (let j = 0; j < numColumn; j++) {
      let seatObject = {
        number: start,
        taken: Boolean(Math.round(Math.random())),
        selected: false,
      };

      columnArray.push(seatObject);
      start++;
    }

    if (i == 3) numColumn += 2;

    if (numColumn < 9 && !reachnine) {
      numColumn += 2;
    } else {
      reachnine = true;
      numColumn -= 2;
    }

    rowArray.push(columnArray);
  }

  return rowArray;
};

const SeatBookingScreen = () => {
  const [dateArray, setDateArray] = useState<DateProps[]>(generateDate());
  const [selectedDateIndex, setSelectedDateIndex] = useState<any>();
  const [price, setPrice] = useState<number>(0);
  const [twoDSeatArray, setTwoDSeatArray] = useState<SeatProps[][]>(
    generateSeats(),
  );
  const [selectedSeatArray, setSelectedSeatArray] = useState<any>([]);
  const [selectedTimeIndex, setSelectedTimeIndex] = useState<any>();

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: COLORS.Black,
  },
});

export default SeatBookingScreen;
