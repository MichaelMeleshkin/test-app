import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { SearchService } from './search.service';
import { ResultValue } from './interfaces/search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(
    private searchService: SearchService,
    private fb: FormBuilder
  ) { }

  resultList: Array<ResultValue>
    
  searchForm = this.fb.group({
    key: ['', Validators.required]
  })

  get key() { return this.searchForm.get('key'); }

  onSubmit() {
    if (!this.searchForm.valid) {
      this.key.markAsTouched()
      return;
    }
    const { key } = this.searchForm.value;
    this.searchService.getResultList(key).subscribe((result) => {
      this.resultList = result;
    });
  }
}
