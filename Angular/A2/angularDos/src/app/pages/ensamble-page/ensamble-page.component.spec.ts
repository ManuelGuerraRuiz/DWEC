import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsamblePageComponent } from './ensamble-page.component';

describe('EnsamblePageComponent', () => {
  let component: EnsamblePageComponent;
  let fixture: ComponentFixture<EnsamblePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsamblePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnsamblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
