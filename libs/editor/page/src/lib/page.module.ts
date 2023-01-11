import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PageResolver } from './adapter/in/PageResolver';
import { PageMongoEntity, PageSchema } from './adapter/out/persistence/entity/PageMongoEntity';
import { PageMapper } from './adapter/out/persistence/mapper/PageMapper';
import { PagePersistenceAdapter } from './adapter/out/persistence/PagePersistenceAdapter';
import { PageRepository } from './adapter/out/persistence/PageRepository';
import { GetPageQuery } from './application/port/in/query/GetPageQuery';
import { GetPageService } from './application/service/GetPageService';

@Module({
  imports: [MongooseModule.forFeature([{ name: PageMongoEntity.name, schema: PageSchema }])],
  providers: [
    PageResolver,
    PageMapper,
    PageRepository,
    PagePersistenceAdapter,
    {
      provide: 'GetPageQuery',
      useClass: GetPageService,
    },
    {
      provide: 'LoadPagePort',
      useClass: PagePersistenceAdapter,
    },
  ],
  exports: [],
})
export class PageModule {}
