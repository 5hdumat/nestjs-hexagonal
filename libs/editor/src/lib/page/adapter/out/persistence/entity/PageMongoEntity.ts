import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument, Types } from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

import { SettingGroup } from '../../../../../domain/SettingGroup';
import { PageType } from '../../../../domain/PageType';

export type PageDocument = HydratedDocument<PageMongoEntity>;

@Schema({ collection: 'pages', timestamps: true, minimize: false })
export class PageMongoEntity {
  _id: Types.ObjectId;

  @Prop({
    required: true,
    type: String,
  })
  styleId: string;

  @Prop({
    required: true,
    type: String,
    minlength: 1,
    maxlength: 50,
  })
  featureType: string;

  @Prop({
    required: true,
    type: String,
    enum: PageType,
  })
  pageType: PageType;

  @Prop({
    required: true,
    type: String,
    minlength: 1,
    maxlength: 50,
  })
  name: string;

  @Prop({
    required: true,
    type: String,
    minlength: 1,
    maxlength: 40,
  })
  slug: string;

  @Prop({
    required: true,
    type: Boolean,
    default: false,
  })
  isHomepage: boolean;

  @Prop({ required: true, type: Object })
  property: Record<string, unknown>;

  @Prop({ required: true, type: Array })
  settingGroups: SettingGroup[];

  @Prop({
    required: true,
    type: Number,
    default: 0,
  })
  order: number;

  constructor(
    _id: Types.ObjectId,
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
    this._id = _id;
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
}

export const schema = SchemaFactory.createForClass(PageMongoEntity);

schema.set('toObject', { getters: true });
schema.plugin(mongoosePaginate);

export const PageSchema = schema;
