import { Routes } from '@angular/router';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { AllStatusesComponent } from './all-statuses/all-statuses.component';
import { CreateStatusComponent } from './create-status/create-status.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DeleteStatusComponent } from './delete-status/delete-status.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { EditStatusComponent } from './edit-status/edit-status.component';
import { EditTaskComponent } from './edit-task/edit-task.component';

export const routes: Routes = [
    {
        path: "",
        component: AllTasksComponent
    },
    {
        path: "statuses",
        component: AllStatusesComponent
    },
    {
        path: "create-status",
        component: CreateStatusComponent
    },
    {
        path: "create-task",
        component: CreateTaskComponent
    },
    {
        path: "delete-status/:id",
        component: DeleteStatusComponent
    },
    {
        path: "delete-task/:id",
        component: DeleteTaskComponent
    },
    {
        path: "edit-status/:id",
        component: EditStatusComponent
    },
    {
        path: "edit-task/:id",
        component: EditTaskComponent
    }
];
