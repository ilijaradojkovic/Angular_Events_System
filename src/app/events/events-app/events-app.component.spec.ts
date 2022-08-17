import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsAppComponent } from './events-app.component';

describe('EventsAppComponent', () => {
  let component: EventsAppComponent;
  let fixture: ComponentFixture<EventsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
