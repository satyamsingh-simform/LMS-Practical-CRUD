import {addHabit,getHabits} from "../services/habitService.ts";
import{ addHabitForm, habitInput, habitList}from "../utils/elements.ts";

export function initHabit(){
  const form=addHabitForm;
  const input=habitInput;

  if(!form || !input) return;

  form.addEventListener("submit",e=>{
    e.preventDefault();
    const value=input.value;
    if(!value) return;

    addHabit(value);
    renderHabits();
    form.reset();
  });
}

export function renderHabits(){
  const list=habitList;

  if(!list) return;

  list.innerHTML="";
  const habits=getHabits();

  habits.forEach(habit=>{
    const div=document.createElement("div");
    div.className="habit-item";
    div.textContent=habit.name;
    list.appendChild(div);
  });
}