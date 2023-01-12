import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { PaginateModel } from 'mongoose';

import { Nullable } from '../../../../../../../common/type/Nullable';
import { Page } from '../../../domain/Page';

import { PageDocument, PageMongoEntity } from './entity/PageMongoEntity';

@Injectable()
export class PageRepository {
  constructor(
    @InjectModel(PageMongoEntity.name)
    private pageModel: PaginateModel<PageDocument>
  ) {}

  async loadPage(pageId: string): Promise<Nullable<PageMongoEntity>> {
    return this.pageModel.findById(pageId).lean();
  }

  async createPage(page: Page) {
    const pageModel = new this.pageModel(page);
    await pageModel.save();

    return pageModel;
  }
}
