import { Component, OnInit, inject } from '@angular/core';
import { TaskmanagerService } from '../service/taskmanager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StatusModel } from '../models/status.model';

@Component({
  selector: 'app-delete-status',
  standalone: true,
  imports: [],
  templateUrl: './delete-status.component.html',
  styleUrl: './delete-status.component.css'
})
export class DeleteStatusComponent implements OnInit {
  service = inject(TaskmanagerService)
  router = inject(Router)
  route = inject(ActivatedRoute)

  status: StatusModel = {
    id: 0,
    name: ''
  }

  id: number = 0;

  ngOnInit(): void{
    const idToDelete = this.route.snapshot.paramMap.get('id')
    this.id = idToDelete ?+ idToDelete : 0;
    this.service.getStatus(this.id).subscribe(status => this.status = status);
  }

  delete(): void{
    this.service.deleteStatus(this.id).subscribe(
      response => {
        this.router.navigate(['/statuses']);
      }
    )
  }

  cancel(): void{
    this.router.navigate(['/statuses']);
  }
}
