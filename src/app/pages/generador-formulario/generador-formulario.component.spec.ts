import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorFormularioComponent } from './generador-formulario.component';

describe('GeneradorFormularioComponent', () => {
  let component: GeneradorFormularioComponent;
  let fixture: ComponentFixture<GeneradorFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneradorFormularioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneradorFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
