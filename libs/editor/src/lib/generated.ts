
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class AddPageInput {
    styleId: string;
    pageTemplateId?: Nullable<string>;
}

export class Page {
    __typename?: 'Page';
    id: string;
    name: string;
    slug: string;
}

export abstract class IQuery {
    __typename?: 'IQuery';

    abstract page(pageId: string): Page | Promise<Page>;
}

export abstract class IMutation {
    __typename?: 'IMutation';

    abstract addPage(input: AddPageInput): Page | Promise<Page>;
}

type Nullable<T> = T | null;
