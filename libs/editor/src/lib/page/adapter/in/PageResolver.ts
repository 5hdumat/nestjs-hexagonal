import { Inject } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AddPageInput } from '../../../generated';
import { CreateBlankPageUseCase } from '../../application/port/in/CreateBlankPageUseCase';
import { GetPageQuery } from '../../application/port/in/query/GetPageQuery';

@Resolver('Page')
export class PageResolver {
  constructor(
    @Inject('GetPageQuery') private readonly getPageQuery: GetPageQuery,
    @Inject('CreateBlankPageUseCase')
    private readonly createBlankPageUseCase: CreateBlankPageUseCase
  ) {}

  @Query()
  async page(@Args('pageId') pageId: string) {
    return this.getPageQuery.getPage(pageId);
  }

  @Mutation()
  async addPage(@Args('input') { styleId }: AddPageInput) {
    return this.createBlankPageUseCase.createBlankPage(styleId);
  }
}
