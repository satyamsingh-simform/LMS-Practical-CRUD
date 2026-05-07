export function getDates(totalDays:number){
  const dates:string[]=[];

  for(let i=totalDays-1;i>=0;i--){
    const date=new Date();
    date.setDate(date.getDate()-i);
    const year=date.getFullYear();
    const month=date.getMonth()+1;
    const day=date.getDate();
    dates.push(`${year}-${month}-${day}`);
  }

  return dates;
}