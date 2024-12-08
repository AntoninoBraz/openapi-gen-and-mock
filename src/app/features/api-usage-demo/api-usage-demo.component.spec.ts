import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUsageDemoComponent } from './api-usage-demo.component';

describe('ApiUsageDemoComponent', () => {
  let component: ApiUsageDemoComponent;
  let fixture: ComponentFixture<ApiUsageDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiUsageDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiUsageDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
