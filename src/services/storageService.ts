import type { StorageData } from "../models/habitModel";
import { STORAGE_KEY } from "../utils/constants";

/**
 * @description get habits data from localStorage.
 */
export function getData():StorageData{
    const raw=localStorage.getItem(STORAGE_KEY);
    if(!raw) return {habits:[]};
    return JSON.parse(raw);
}

/**
 * @description save habit data in localStorage.
 */
export function saveData(data:StorageData){
    localStorage.setItem(STORAGE_KEY,JSON.stringify(data));
}