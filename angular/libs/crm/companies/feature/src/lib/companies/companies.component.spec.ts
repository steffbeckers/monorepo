import { CoreTestingModule } from '@abp/ng.core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompaniesComponent } from './companies.component';
import { CompaniesService } from '@steffbeckers/crm/data-access';
import { BehaviorSubject } from 'rxjs';

describe('CompaniesComponent', () => {
  let component: CompaniesComponent;
  let fixture: ComponentFixture<CompaniesComponent>;
  const companiesServiceMock = {
    getList: () =>
      new BehaviorSubject({
        items: [
          {
            id: '1',
            name: 'Company 1',
          },
          {
            id: '2',
            name: 'Company 2',
          },
        ],
        totalCount: 2,
      }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreTestingModule.withConfig(), CompaniesComponent],
      providers: [
        {
          provide: CompaniesService,
          useValue: companiesServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
