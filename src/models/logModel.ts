export type LogStatus="done"|"skip";
export interface HabitLog{
  habitId:string;
  date:string;
  status:LogStatus;
}