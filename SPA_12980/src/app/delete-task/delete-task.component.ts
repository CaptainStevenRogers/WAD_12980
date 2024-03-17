import { Component, inject } from '@angular/core';
import { TaskModel } from '../models/task.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskmanagerService } from '../service/taskmanager.service';

@Component({
  selector: 'app-delete-task',
  standalone: true,
  imports: [],
  templateUrl: './delete-task.component.html',
  styleUrl: './delete-task.component.css'
})
export class DeleteTaskComponent {
  service = inject(TaskmanagerService)
  router = inject(Router)
  route = inject(ActivatedRoute)

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

  id: number = 0;

  ngOnInit(): void{
    const idToDelete = this.route.snapshot.paramMap.get('id')
    this.id = idToDelete ?+ idToDelete : 0;
    this.service.getTask(this.id).subscribe(task => this.task = task);
  }

  delete(): void{
    this.service.deleteTask(this.id).subscribe(
      response => {
        this.router.navigate(['/']);
      }
    )
  }

  cancel(): void{
    this.router.navigate(['/']);
  }
}
