import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCaballosComponent } from './lista-caballos.component';

describe('ListaCaballosComponent', () => {
  let component: ListaCaballosComponent;
  let fixture: ComponentFixture<ListaCaballosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCaballosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCaballosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
