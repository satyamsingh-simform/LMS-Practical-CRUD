import { getDates } from "./services/dateService";
import { renderCalendar } from "./ui/calendarUI";
import { renderGrid } from "./ui/grid";
import { initHabit, renderHabits } from "./ui/habit";

const dates=getDates(20);

function renderAll(){
  renderHabits();
  renderCalendar(dates);
  renderGrid(dates);
}

document.addEventListener("DOMContentLoaded",()=>{
  initHabit();
  renderAll();
});