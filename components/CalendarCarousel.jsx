import React, { useState, useCallback, useMemo } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';

export const CalendarCarousel = ({ calendarClick }) => {
  const [markedDays, setMarkedDays] = useState([]); // Estado para armazenar os dias marcados

  const calendarTheme = {
    calendarBackground: "#EDEDED",
    todayTextColor: "yellow",
    textSectionTitleColor: "black",
    dayTextColor: "black",
    textDisabledColor: "black",
    textMonthFontWeight: "bold",
    monthTextColor: "black",
    textDayFontSize: 15,
    textMonthFontSize: 17,
    selectedDayTextColor: "green"
  };

  /* const failedScroll = (info) => {
    const wait = new Promise(resolve => setTimeout(resolve, 500));
    wait.then(() => {
      flatListRef.current?.scrollToIndex({ index: info.index, animated: true });
    });
  }; */

  const [currentMonth, setCurrentMonth] = useState(new Date());
  const windowWidth = Dimensions.get('window').width;

  const generateMonths = useMemo(() => {
    let months = [];
    for (let i = -12; i <= 12; i++) {
      const newMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + i, 1);
      months.push(newMonth);
    }
    return months;
  }, [currentMonth]);

  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleClick = useCallback((date) => {
    const dateInstance = new Date(date.year, date.month - 1, date.day);
    const dateString = formatDate(dateInstance);

    setMarkedDays((prevDays) => {
      if (prevDays.includes(dateString)) {
        return prevDays.filter(day => day !== dateString);
      } else {
        return [...prevDays, dateString];
      }
    });

    calendarClick(dateInstance);
  }, [calendarClick]);


  const today = new Date();

  const renderDay = React.memo(({ date, state }) => {
    const isToday =
      date.day === today.getDate() &&
      date.month === (today.getMonth() + 1) &&
      date.year === today.getFullYear();

    const isMarked = markedDays.includes(formatDate(new Date(date.year, date.month - 1, date.day))); // Verifica se o dia está marcado
    const isOutsideMonth = state === 'disabled';

    // Define a cor de fundo com base no estado do dia
    const backgroundColor = isToday ? 'yellow' : isMarked ? 'lightblue' : 'transparent';
    const textColor = isToday ? '#685A11' : (isOutsideMonth ? '#BCBCBC' : 'black');

    return (
      <TouchableOpacity
        style={{
          backgroundColor,
          borderRadius: 10,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => { handleClick(date) }}
      >
        <Text style={{ color: textColor, fontWeight: isToday ? 'bold' : 'normal' }}>
          {date.day}
        </Text>
      </TouchableOpacity>
    );
  });

  const renderCalendar = ({ item }) => (
    <Calendar
      current={formatDate(item)}
      hideArrows={true}
      onMonthChange={(date) => setCurrentMonth(new Date(date.timestamp))}
      style={{ width: windowWidth }}
      theme={calendarTheme}
      dayComponent={renderDay} // Renderiza os dias usando o componente customizado
    />
  );

  const getItemLayout = (_, index) => ({
    length: windowWidth,
    offset: windowWidth * index,
    index,
  });

  return (
    <FlatList
      horizontal
      pagingEnabled
      data={generateMonths}
      keyExtractor={(item) => formatDate(item)}
      renderItem={renderCalendar}
      getItemLayout={getItemLayout}
      initialNumToRender={3}
      windowSize={5}
      maxToRenderPerBatch={2}
    />

  );
};

export default CalendarCarousel;
