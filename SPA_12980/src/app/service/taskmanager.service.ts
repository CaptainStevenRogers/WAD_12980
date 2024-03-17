import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { StatusModel } from '../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class TaskmanagerService {
  httpClient = inject(HttpClient);
  api = 'https://localhost:7252/api/';
  constructor() { }

  getAllTasks(){
    return this.httpClient.get<TaskModel[]>(this.api+'Task');
  }

  getTask(id:number){
    return this.httpClient.get<TaskModel>(this.api+'Task/'+id);
  }

  editTask(id:number, task: TaskModel){
    return this.httpClient.put(this.api+'Task/'+id, task);
  }
  
  deleteTask(id:number){
    return this.httpClient.delete(this.api+'Task/'+ id);
  }

  createTask(task:TaskModel){
    return this.httpClient.post<TaskModel>(this.api+'Task', task);
  }

  getAllStatuses(){
    return this.httpClient.get<StatusModel[]>(this.api+'Status');
  }

  getStatus(id:number){
    return this.httpClient.get<StatusModel>(this.api+'Status/'+id);
  }

  editStatus(id:number, status:StatusModel){
    return this.httpClient.put(this.api+'Status/'+id, status);
  }

  deleteStatus(id:number){
    return this.httpClient.delete(this.api+'Status/'+id);
  }

  createStatus(status:StatusModel){
    return this.httpClient.post<StatusModel>(this.api+'Status', status);
  }
}
