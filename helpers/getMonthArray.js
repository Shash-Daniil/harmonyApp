
const days = ["Вc", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

export const normDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вc"];

export const getMonthArray = (initialMonth) => {
    const date = new Date();
  
    // Последнее число предыдущего месяца
    const lastPrevMthDayCount = new Date(
      date.getFullYear(),
      initialMonth,
      0
    ).getDate();
    // Последнее число текущего месяца
    const lastDay = new Date(date.getFullYear(), initialMonth + 1, 0).getDate();
    // День недели последнего числа предыдущего месяца
    const lastPrevMthDay = new Date(date.getFullYear(), initialMonth, 0).getDay();
    const lastPrevMthDayRusski = normDays.indexOf(days[lastPrevMthDay]);
    // День недели первого числа текущего месяца по англии
    const firstCurrMthDay = new Date(
      date.getFullYear(),
      initialMonth,
      1
    ).getDay();
    // День недели первого числа текущего месяца по русски
    const firstCurrMthDayRusski = normDays.indexOf(days[firstCurrMthDay]);
  
    let monthArray = new Array(35).fill("slot");
  
    // Вставляем первый день текущего месяца в соотвествующее место в Array
    monthArray[firstCurrMthDayRusski] = 1;
    // Вставляем последний день текущего месяца в соотвествующее место в Array
    monthArray[firstCurrMthDayRusski + lastDay - 1] = lastDay;
  
    if (monthArray.length > 35) {
      monthArray = new Array(42).fill("slot");
      monthArray[firstCurrMthDayRusski] = { month: initialMonth, day: 1 };
      monthArray[firstCurrMthDayRusski + lastDay - 1] = {
        month: initialMonth,
        day: lastDay,
      };
    }
  
    // Если первый день текущего месяца не понедельник заполняем пред месяц в monthArray
    if (firstCurrMthDayRusski !== 0) {
      // выставляем в Array последнее число пред. месяца в день недели
      // до 0,0,0,1,2,3 после 0,0,30,1,2,3
      monthArray[lastPrevMthDayRusski] = {
        month: initialMonth - 1,
        day: lastPrevMthDayCount,
      };
      // заполняем пред месяц в Array
      monthArray = monthArray.map((data, i) => {
        if (
          data.day !== 1 &&
          data.day !== lastPrevMthDayCount &&
          i < lastPrevMthDayRusski
        ) {
          return {
            month: initialMonth - 1,
            day: lastPrevMthDayCount - (lastPrevMthDayRusski - i),
          };
        }
        return data;
      });
    }
  
    // Заполняем текущий месяц в monthArray
    monthArray = monthArray.map((data, i) => {
      if (i >= firstCurrMthDayRusski && i < firstCurrMthDayRusski + lastDay) {
        return { month: initialMonth, day: i + 1 - firstCurrMthDayRusski };
      }
      return data;
    });
  
    // Заполняем остатки(след месяц)
    if (monthArray.includes("slot")) {
      const firstSlotIndex = monthArray.indexOf("slot");
      monthArray = monthArray.map((data, i) => {
        if (i >= firstSlotIndex)
          return { month: initialMonth + 1, day: i + 1 - firstSlotIndex };
        return data;
      });
    }
    return monthArray;
  };