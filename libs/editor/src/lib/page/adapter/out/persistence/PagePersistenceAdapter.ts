import { Injectable, NotFoundException } from '@nestjs/common';

import { CreatePagePort } from '../../../application/port/out/CreatePagePort';
import { LoadPagePort } from '../../../application/port/out/LoadPagePort';
import { Page } from '../../../domain/Page';

import { PageMongoEntity } from './entity/PageMongoEntity';
import { PageMapper } from './mapper/PageMapper';
import { PageRepository } from './PageRepository';

@Injectable()
export class PagePersistenceAdapter implements LoadPagePort, CreatePagePort {
  constructor(private readonly pageRepository: PageRepository) {}

  async loadPage(pageId: string): Promise<Page> {
    const page: PageMongoEntity = await this.pageRepository.loadPage(pageId);

    if (!page) {
      throw new NotFoundException('페이지를 찾을 수 없습니다.');
    }

    return PageMapper.mapToDomainEntity(page);
  }

  async createPage(page: Page): Promise<Page> {
    const newPage: PageMongoEntity = await this.pageRepository.createPage(page);
    return PageMapper.mapToDomainEntity(newPage);
  }
}
