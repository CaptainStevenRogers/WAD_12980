import { Component, inject } from '@angular/core';
import { StatusModel } from '../models/status.model';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskmanagerService } from '../service/taskmanager.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-status',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-status.component.html',
  styleUrl: './edit-status.component.css'
})
export class EditStatusComponent {
  service = inject(TaskmanagerService);
  router = inject(Router);
  route = inject(ActivatedRoute)

  status: StatusModel = {
    id: 0,
    name: ''
  };
  id: number = 0;

  ngOnInit(): void{
    const idToDelete = this.route.snapshot.paramMap.get('id')
    this.id = idToDelete ?+ idToDelete : 0;
    this.service.getStatus(this.id).subscribe(status => this.status = status);
  }

  editStatus(status: StatusModel){
    this.service.editStatus(this.id, this.status)
    .subscribe(
      response => {
        this.router.navigate(['/statuses']);
      }
    )
  }
}
