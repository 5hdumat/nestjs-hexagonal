import { Page } from '../../../../domain/Page';
import { PageMongoEntity } from '../entity/PageMongoEntity';

export class PageMapper {
  static mapToDomainEntity(page: PageMongoEntity): Page {
    return new Page(
      page._id.toHexString(),
      page.styleId,
      page.featureType,
      page.pageType,
      page.name,
      page.slug,
      page.isHomepage,
      page.property,
      page.settingGroups,
      page.order
    );
  }

  static mapToMongoEntity() {}
}
