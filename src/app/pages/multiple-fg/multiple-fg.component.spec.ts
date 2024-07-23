import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleFgComponent } from './multiple-fg.component';

describe('MultipleFgComponent', () => {
  let component: MultipleFgComponent;
  let fixture: ComponentFixture<MultipleFgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleFgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultipleFgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
