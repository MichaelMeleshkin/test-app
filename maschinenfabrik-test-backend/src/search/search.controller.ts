import { Controller, Get, Param } from '@nestjs/common';
import { SearchService } from './search.service';
import { ResultValue } from './interfaces/search.interface';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get(':key')
  searchValues(@Param('key') key: string): Array<ResultValue> {
    return this.searchService.searchValues(key);
  }
}
