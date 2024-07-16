import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCamposComponent } from './multi-campos.component';

describe('MultiCamposComponent', () => {
  let component: MultiCamposComponent;
  let fixture: ComponentFixture<MultiCamposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultiCamposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiCamposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
