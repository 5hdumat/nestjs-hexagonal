import { Page } from '../../../../domain/Page';

export interface GetPageQuery {
  getPage(pageId: string): Promise<Page>;
}
