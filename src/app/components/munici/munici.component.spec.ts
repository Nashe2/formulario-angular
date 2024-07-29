import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuniciComponent } from './munici.component';

describe('MuniciComponent', () => {
  let component: MuniciComponent;
  let fixture: ComponentFixture<MuniciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuniciComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
