import { getHabits } from "../services/habitService";
import { isCompleted, toggleLog } from "../services/logService";
import { gridContainer } from "../utils/elements";

export function renderGrid(dates:string[]){
  if(!gridContainer) return;

  const container = gridContainer;
  container.innerHTML = "";
  const habits = getHabits();

  habits.forEach((habit)=>{
    const row = document.createElement("div");
    row.className = "grid-row";

    dates.forEach((date)=>{
      const cell = document.createElement("div");
      cell.className = "grid-cell";
      if(isCompleted(habit.id,date)){
        cell.classList.add("done");
      }
      cell.addEventListener("click",()=>{
        toggleLog(habit.id,date);
        renderGrid(dates);
      });
      row.appendChild(cell);
    });

    container.appendChild(row);
  });
}