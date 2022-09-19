import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaEscolarComponent } from './media-escolar.component';

describe('MediaEscolarComponent', () => {
  let component: MediaEscolarComponent;
  let fixture: ComponentFixture<MediaEscolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaEscolarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaEscolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
