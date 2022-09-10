import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuductlistComponent } from './puductlist.component';

describe('PuductlistComponent', () => {
  let component: PuductlistComponent;
  let fixture: ComponentFixture<PuductlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuductlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
