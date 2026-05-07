import { addHabit, getHabits, deleteHabit, updateHabit } from "../services/habitService.ts";
import{ addHabitForm, habitInput, habitList }from "../utils/elements.ts";

/**
 * @description extract value from input, pass it to addHabit.
 */
export function initHabit(renderAll:()=>void){
  const form=addHabitForm;
  const input=habitInput;

  if(!form || !input) return;

  form.addEventListener("submit",e=>{
    e.preventDefault();
    const value=input.value;
    if(!value) return;

    addHabit(value);
    renderAll();
    form.reset();
  });
}

/**
 * @description render all habits on UI.
 */
export function renderHabits(renderAll:()=>void){
  const list=habitList;
  if(!list) return;

  list.innerHTML="";
  const habits=getHabits();

  habits.forEach(habit=>{
    const div=document.createElement("div");
    div.className="habit-item";

    const name=document.createElement("span");
    name.textContent=habit.name;

    //edit
    name.addEventListener("click",()=>{
      const newName=prompt("Edit habit",habit.name);
      if(newName){
        updateHabit(habit.id,newName);
        renderAll();
      }
    });

    //delete
    const delBtn=document.createElement("button");
    delBtn.className="delete-btn";
    delBtn.textContent="✕";
    delBtn.addEventListener("click",e=>{
      e.stopPropagation();
      deleteHabit(habit.id);
      renderAll();
    });

    div.append(name,delBtn);
    list.appendChild(div);
  });
}