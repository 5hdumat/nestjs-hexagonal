import { Page } from '../../../domain/Page';

export interface CreateBlankPageUseCase {
  createBlankPage(styleId: string): Promise<Page>;
}
