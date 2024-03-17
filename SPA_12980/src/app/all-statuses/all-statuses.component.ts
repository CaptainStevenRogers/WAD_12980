import { Component, OnInit, inject } from '@angular/core';
import { StatusModel } from '../models/status.model';
import { Router, RouterLink } from '@angular/router';
import { TaskmanagerService } from '../service/taskmanager.service';

@Component({
  selector: 'app-all-statuses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './all-statuses.component.html',
  styleUrl: './all-statuses.component.css'
})
export class AllStatusesComponent implements OnInit {
  service=inject(TaskmanagerService);
  router=inject(Router);
  statuses:StatusModel[]=[];

  ngOnInit(){
      this.service.getAllStatuses().subscribe(
        (result) => {
          this.statuses = result;
        }
      )
  }
}
