import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDetailsEditComponent } from './client-details-edit.component';

describe('ClientDetailsEditComponent', () => {
  let component: ClientDetailsEditComponent;
  let fixture: ComponentFixture<ClientDetailsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDetailsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientDetailsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
