import type { StorageData } from "../models/storageModel";
import { STORAGE_KEY } from "../utils/constants";

export function getData():StorageData{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(!raw) return {habits:[]};
    return JSON.parse(raw);
}

export function saveData(data:StorageData){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}