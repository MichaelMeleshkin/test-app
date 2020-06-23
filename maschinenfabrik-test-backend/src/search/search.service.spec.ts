import { Test, TestingModule } from '@nestjs/testing';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

describe('SearchService', () => {
  let searchService: SearchService;
  const mockedObj = {
    prop1: {
      prop2: 'value2',
      prop3: [
        { prop4: 'value4', prop5: 'value5' },
        { prop6: 'value6' }
      ]
    }
  }

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      providers: [SearchService],
    }).compile();

    searchService = app.get<SearchService>(SearchService);
  });

  describe('search', () => {
    it('should return data', () => {
      const data = searchService.getData();

      expect(data).not.toBeNull();
      expect(data).toBeInstanceOf(Object);
    });

    it('should call the search couple times', () => {
      const key = '123';
      const getDataSpy = jest.spyOn(searchService, 'getData').mockReturnValue(mockedObj);
      const searchValuesSpy = jest.spyOn(searchService, 'searchValues');

      searchService.searchValues(key);

      expect(getDataSpy).toHaveBeenCalledTimes(1);
      expect(searchValuesSpy).toHaveBeenCalledTimes(5);
      expect(searchValuesSpy).toHaveBeenCalledWith(key);
    });
  });
});
