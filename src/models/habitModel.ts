export interface Habit{
  id:string;
  name:string;
  createdAt:string;
}
export interface StorageData{
  habits:Habit[];
}