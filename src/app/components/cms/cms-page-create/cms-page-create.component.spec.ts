import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsPageCreateComponent } from './cms-page-create.component';

describe('CmsPageCreateComponent', () => {
  let component: CmsPageCreateComponent;
  let fixture: ComponentFixture<CmsPageCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsPageCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsPageCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
