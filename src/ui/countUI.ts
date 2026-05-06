import { countRow } from "../utils/elements";
import { getCountByDate } from "../services/logService";

export function renderCount(dates:string[]){
  if(!countRow) return;

  const row=countRow;
  row.innerHTML="";

  dates.forEach(date=>{
    const div=document.createElement("div");
    div.className="count-box";
    div.textContent=getCountByDate(date).toString();
    row.appendChild(div);
  });
}