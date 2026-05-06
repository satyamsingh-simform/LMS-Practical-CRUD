import { getDates } from "./services/dateService";
import { renderCalendar } from "./ui/calendarUI";
import { renderCount } from "./ui/countUI";
import { renderGrid } from "./ui/grid";
import { initHabit, renderHabits } from "./ui/habit";

const dates=getDates(20);

function renderAll(){
  renderHabits(renderAll);
  renderCalendar(dates);
  renderGrid(dates);
  renderCount(dates);
}

document.addEventListener("DOMContentLoaded",()=>{
  initHabit(renderAll);
  renderAll();
});