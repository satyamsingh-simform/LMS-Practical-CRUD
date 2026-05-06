import { calendarRow } from "../utils/elements";
import { trackerDivBottom } from "../utils/elements";

export function renderCalendar(dates:string[]){
  if(!calendarRow) return;

  const row = calendarRow;
  row.innerHTML = "";

  dates.forEach((date)=>{
    const currentDate = new Date(date);
    const month = currentDate.toLocaleString("default",{
      month:"short"
    });

    const day = currentDate.getDate();
    const weekday = currentDate.toLocaleString("default",{
      weekday:"short"
    });

    const div = document.createElement("div");
    div.className = "date-box";
    div.innerHTML = `
      <span class="month">${month}</span>
      <strong>${day}</strong>
      <span class="weekday">${weekday}</span>
    `;

    row.appendChild(div);
  });

  if(trackerDivBottom){
    trackerDivBottom.scrollLeft =trackerDivBottom.scrollWidth;
  }
}