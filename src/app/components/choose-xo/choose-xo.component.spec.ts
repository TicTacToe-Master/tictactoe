import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseXOComponent } from './choose-xo.component';

describe('ChooseXOComponent', () => {
  let component: ChooseXOComponent;
  let fixture: ComponentFixture<ChooseXOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseXOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseXOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
