import type { Habit } from "../models/habitModel.ts";
import { getData, saveData } from "./storageService.ts";

export function getHabits():Habit[]{
  return getData().habits;
}

/**
 *@description create and save new habit.
 */
export function addHabit(name:string):Habit{
  const data=getData();
  const habit:Habit={
    id:crypto.randomUUID(),
    name:name.trim(),
    createdAt:new Date().toISOString()
  };
  data.habits.push(habit);
  saveData(data);
  return habit;
}

/**
 * @description delete habit specific habit using id.
 */
export function deleteHabit(id:string){
  const data=getData();
  data.habits=data.habits.filter(habitItem=>habitItem.id!==id);
  saveData(data);
}

/**
 * @description edit specific habit using id.
 */
export function updateHabit(id:string,name:string){
  const data=getData();
  const habitItem=data.habits.find(habitItem=>habitItem.id===id);
  if(habitItem) habitItem.name=name.trim();
  saveData(data);
}