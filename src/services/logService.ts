import type { HabitLog } from "../models/logModel";
import { getData, saveData } from "./storageService";

export function getLogs():HabitLog[]{
  return getData().logs;
}

export function isCompleted(habitId:string,date:string):boolean{
  return getData().logs.some(
    log=>log.habitId===habitId && log.date===date
  )
}

export function toggleLog(habitId:string,date:string){
  const data=getData();

  const index=data.logs.findIndex(
    log=>log.habitId===habitId && log.date===date
  )

  if(index>-1){
    data.logs.splice(index,1);
  }
  else{
    data.logs.push({
      habitId,
      date,
      completed:true
    })
  }
  saveData(data);
}