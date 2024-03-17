import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusModel } from '../models/status.model';
import { TaskModel } from '../models/task.model';
import { TaskmanagerService } from '../service/taskmanager.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css'
})
export class EditTaskComponent {
  service = inject(TaskmanagerService);
  router = inject(Router);
  route = inject(ActivatedRoute);

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

  id: number = 0;

  editTask(task: TaskModel){
    this.service.editTask(this.id, task)
    .subscribe(
      response => {
        this.router.navigate(['/']);
      }
    )
  }

  ngOnInit(): void {
    const idToDelete = this.route.snapshot.paramMap.get('id')
    this.id = idToDelete ?+ idToDelete : 0;
    this.service.getTask(this.id).subscribe(task => this.task = task);
    this.service.getAllStatuses().subscribe(
      statuses => this.statuses = statuses
    )
  }
}
