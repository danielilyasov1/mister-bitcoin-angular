import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactTransferComponent } from './contact-transfer.component';

describe('ContactTransferComponent', () => {
  let component: ContactTransferComponent;
  let fixture: ComponentFixture<ContactTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactTransferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
