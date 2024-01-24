import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAddDetailsComponent } from './client-add-details.component';

describe('ClientAddDetailsComponent', () => {
  let component: ClientAddDetailsComponent;
  let fixture: ComponentFixture<ClientAddDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientAddDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientAddDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
