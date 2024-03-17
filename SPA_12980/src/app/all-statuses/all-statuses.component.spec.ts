import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllStatusesComponent } from './all-statuses.component';

describe('AllStatusesComponent', () => {
  let component: AllStatusesComponent;
  let fixture: ComponentFixture<AllStatusesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllStatusesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllStatusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
