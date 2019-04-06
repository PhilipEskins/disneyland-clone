import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAttractionComponent } from './edit-attraction.component';

describe('EditAttractionComponent', () => {
  let component: EditAttractionComponent;
  let fixture: ComponentFixture<EditAttractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAttractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAttractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
