import { Test, TestingModule } from '@nestjs/testing';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

describe('SearchController', () => {
  let searchController: SearchController;
  let searchService: SearchService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SearchController],
      providers: [SearchService],
    }).compile();

    searchController = app.get<SearchController>(SearchController);
    searchService = app.get<SearchService>(SearchService);
  });

  describe('search', () => {
    it('should call service method', () => {
      const key = '123';
      const spy = jest.spyOn(searchService, 'searchValues')

      searchController.searchValues(key);

      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(key);
    });
  });
});
