export function getDates(totalDays:number){
  const dates:string[]=[];

  for(let i=totalDays-1;i>=0;i--){
    const date=new Date();
    date.setDate(date.getDate()-i);
    dates.push(date.toISOString());
  }

  return dates;
}