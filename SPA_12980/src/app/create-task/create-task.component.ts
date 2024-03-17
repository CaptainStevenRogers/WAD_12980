import { Component, OnInit, inject } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { StatusModel } from '../models/status.model';
import { Router } from '@angular/router';
import { TaskmanagerService } from '../service/taskmanager.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent implements OnInit{
  service = inject(TaskmanagerService);
  router = inject(Router);

  task: TaskModel = {
    id: 0,
    name: '',
    description: '',
    daysToComplete: 0,
    status: {
      id: 0,
      name: ''
    }
  }
  
  statuses!: StatusModel[];

  createTask(){
    this.service.createTask(this.task)
    .subscribe(
      response => {
        this.router.navigate(['/']);
      }
    )
  }

  ngOnInit(): void {
    this.service.getAllStatuses().subscribe(
      statuses => this.statuses = statuses
    )
  }
}
