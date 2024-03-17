import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskmanagerService } from '../service/taskmanager.service';
import { Router } from '@angular/router';
import { StatusModel } from '../models/status.model';

@Component({
  selector: 'app-create-status',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-status.component.html',
  styleUrl: './create-status.component.css'
})
export class CreateStatusComponent {
  service = inject(TaskmanagerService);
  router = inject(Router);

  status: StatusModel = {
    id: 0,
    name: ''
  };

  createStatus(){
    this.service.createStatus(this.status)
    .subscribe(
      response => {
        this.router.navigate(['/statuses']);
      }
    )
  }
}
