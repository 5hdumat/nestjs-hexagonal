import { Page } from '../../../domain/Page';

export interface LoadPagePort {
  loadPage(pageId: string): Promise<Page>;
}
