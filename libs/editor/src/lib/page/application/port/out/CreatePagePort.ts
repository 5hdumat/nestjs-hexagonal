import { Page } from '../../../domain/Page';

export interface CreatePagePort {
  createPage(page: Page): Promise<Page>;
}
