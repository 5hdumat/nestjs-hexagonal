import { BadRequestException } from '@nestjs/common';

import { SettingGroup } from '../../domain/SettingGroup';

import { PageType } from './PageType';

export class Page {
  private id: string;

  private styleId: string;

  private featureType: string;

  private pageType: PageType;

  private name: string;

  private slug: string;

  private isHomepage: boolean;

  private property: Record<string, unknown>;

  private settingGroups: SettingGroup[];

  private order: number;

  constructor(
    id: string,
    styleId: string,
    featureType: string,
    pageType: PageType,
    name: string,
    slug: string,
    isHomepage: boolean,
    property: Record<string, unknown>,
    settingGroups: SettingGroup[],
    order: number
  ) {
    this.id = id;
    this.styleId = styleId;
    this.featureType = featureType;
    this.pageType = pageType;
    this.name = name;
    this.slug = slug;
    this.isHomepage = isHomepage;
    this.property = property;
    this.settingGroups = settingGroups;
    this.order = order;
  }

  get getId(): string {
    return this.id;
  }

  get getStyleId(): string {
    return this.styleId;
  }

  get getFeatureType(): string {
    return this.featureType;
  }

  get getPageType(): PageType {
    return this.pageType;
  }

  get getName(): string {
    return this.name;
  }

  get getSlug(): string {
    return this.slug;
  }

  get getIsHomepage(): boolean {
    return this.isHomepage;
  }

  get getProperty(): Record<string, unknown> {
    return this.property;
  }

  get getSettingGroups(): SettingGroup[] {
    return this.settingGroups;
  }

  get getOrder(): number {
    return this.order;
  }

  static withoutId(
    styleId: string,
    featureType: string,
    pageType: PageType,
    name: string,
    slug: string,
    isHomepage: boolean,
    property: Record<string, unknown>,
    settingGroups: SettingGroup[],
    order: number
  ) {
    return new Page(
      null,
      styleId,
      featureType,
      pageType,
      name,
      slug,
      isHomepage,
      property,
      settingGroups,
      order
    );
  }

  changeName(name: string) {
    if (name.length > 40) {
      throw new BadRequestException('페이지 이름은 40자 이하로 입력해주세요.');
    }

    this.name = name;
  }

  changeSlug(slug: string) {
    if (!/^[0-9-_A-z]{1,40}$/.test(slug)) {
      throw new BadRequestException(
        '페이지 하위주소는 공백을 제외한 40자 이하의 영어 대소문자, 밑줄, 하이픈만 포함되어야 합니다.'
      );
    }

    this.slug = slug;
  }

  changeIsHomepage(isHomepage: boolean) {
    this.isHomepage = isHomepage;
  }

  changeProperty(property: Record<string, unknown>) {
    this.property = property;
  }
}
