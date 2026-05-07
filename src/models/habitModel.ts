import type { HabitLog } from "./logModel";
export interface Habit{
  id:string;
  name:string;
  createdAt:string;
}
export interface StorageData{
  habits:Habit[];
  logs:HabitLog[];
}