import type { Habit } from "./habitModel";
import type { HabitLog } from "./logModel";
export interface StorageData{
  habits:Habit[];
  logs:HabitLog[];
}