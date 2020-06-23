import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchComponent } from './search.component';
import { SearchService } from './search.service';
import { from } from 'rxjs';

describe('SearchComponent', () => {
  let fixture: ComponentFixture<SearchComponent>;
  let component: SearchComponent;
  let searchService: SearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        SearchComponent
      ],
      providers: [
        SearchService
      ]
    }).compileComponents();

    searchService = TestBed.get(SearchService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the search component', () => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  });

  it('should not submit form with empty string key', () => {
    const getResultListSpy = spyOn(searchService, 'getResultList')

    component.key.setValue('')
    component.onSubmit();

    expect(component.key.value).toBe('');
    expect(component.searchForm.valid).toBeFalsy();
    expect(getResultListSpy).not.toHaveBeenCalled();
  });

  it('should submit form with a value for key', () => {
    const key = '123';
    const data = [];
    const getResultListSpy = spyOn(searchService, 'getResultList').and.returnValue(from(data));

    component.key.setValue(key)
    component.onSubmit();

    expect(component.key.value).toBe(key);
    expect(component.searchForm.valid).toBeTruthy();
    expect(getResultListSpy).toHaveBeenCalledTimes(1);
    expect(getResultListSpy).toHaveBeenCalledWith(key);
  });
});
