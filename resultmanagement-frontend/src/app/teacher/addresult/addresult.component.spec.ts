import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresultComponent } from './addresult.component';

describe('AddresultComponent', () => {
  let component: AddresultComponent;
  let fixture: ComponentFixture<AddresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddresultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
