import { TestBed } from '@angular/core/testing';

import { MenuItemFactoryService } from './menu-item-factory.service';

describe('MenuItemFactoryService', () => {
  let service: MenuItemFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuItemFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
