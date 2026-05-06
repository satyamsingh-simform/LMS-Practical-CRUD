const addHabitForm=document.querySelector<HTMLFormElement>("#add-habit-form");
const habitInput=document.querySelector<HTMLInputElement>("#habit-input");
const habitList=document.querySelector<HTMLDivElement>("#habit-list");
const calendarRow=document.querySelector<HTMLDivElement>("#calendar-row");
const gridContainer=document.querySelector<HTMLDivElement>("#grid-container");
const trackerDivBottom=document.querySelector<HTMLDivElement>(".tracker-div-bottom");

export{
  addHabitForm,
  habitInput,
  habitList,
  calendarRow,
  gridContainer,
  trackerDivBottom
};