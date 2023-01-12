import { Inject } from '@nestjs/common';

import cuid = require('cuid');

import { Page } from '../../domain/Page';
import { PageType } from '../../domain/PageType';
import { CreateBlankPageUseCase } from '../port/in/CreateBlankPageUseCase';
import { CreatePagePort } from '../port/out/CreatePagePort';

export class CreateBlankPageService implements CreateBlankPageUseCase {
  constructor(@Inject('CreatePagePort') private readonly createPagePort: CreatePagePort) {}

  async createBlankPage(styleId: string): Promise<Page> {
    const page = Page.withoutId(
      styleId,
      'blank',
      PageType.MY,
      '빈 페이지',
      cuid(),
      false,
      {},
      [],
      0
    );

    return this.createPagePort.createPage(page);
  }
}
