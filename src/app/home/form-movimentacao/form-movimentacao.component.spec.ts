import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMovimentacaoComponent } from './form-movimentacao.component';

describe('FormMovimentacaoComponent', () => {
  let component: FormMovimentacaoComponent;
  let fixture: ComponentFixture<FormMovimentacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMovimentacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMovimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
