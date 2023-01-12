import { Inject } from '@nestjs/common';

import { Page } from '../../domain/Page';
import { GetPageQuery } from '../port/in/query/GetPageQuery';
import { LoadPagePort } from '../port/out/LoadPagePort';

export class GetPageService implements GetPageQuery {
  constructor(@Inject('LoadPagePort') private readonly loadPagePort: LoadPagePort) {}

  async getPage(pageId: string): Promise<Page> {
    return this.loadPagePort.loadPage(pageId);
  }
}
