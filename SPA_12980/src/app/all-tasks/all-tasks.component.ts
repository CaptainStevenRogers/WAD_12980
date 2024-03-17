import { Component, OnInit, inject } from '@angular/core';
import { TaskmanagerService } from '../service/taskmanager.service';
import { Router, RouterLink } from '@angular/router';
import { TaskModel } from '../models/task.model';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.css'
})
export class AllTasksComponent implements OnInit {
  service=inject(TaskmanagerService);
  router=inject(Router);
  tasks:TaskModel[]=[];

  ngOnInit(){
      this.service.getAllTasks().subscribe(
        (result) => {
          this.tasks = result;
        }
      )
  }
}
