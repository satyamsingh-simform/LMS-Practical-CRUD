import type { HabitLog } from "../models/logModel";
import { getData, saveData } from "./storageService";

export function getLogs():HabitLog[]{
  return getData().logs;
}

export function toggleLog(habitId:string,date:string){
  const data=getData();

  const index=data.logs.findIndex(
    log=>log.habitId===habitId && log.date===date
  )

  if(index===-1){
    data.logs.push({
      habitId,
      date,
      status:"done"
    });
  }
  else{
    const current=data.logs[index].status;
    if(current==="done"){
      data.logs[index].status="skip";
    }
    else{
      data.logs.splice(index,1);
    }
  }
  saveData(data);
}

export function isCompleted(habitId:string,date:string){
  return getData().logs.some(
    log=>log.habitId===habitId &&
    log.date===date &&
    log.status==="done"
  );
}

export function isSkipped(habitId:string,date:string){
  return getData().logs.some(
    log=>log.habitId===habitId &&
    log.date===date &&
    log.status==="skip"
  );
}

export function getCountByDate(date:string){
  return getLogs().filter(
    log=>log.date===date &&
    log.status==="done"
  ).length;
}