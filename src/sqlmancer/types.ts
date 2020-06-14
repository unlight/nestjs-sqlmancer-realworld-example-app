import Knex from 'knex';
import {
    CreateManyBuilder,
    CreateOneBuilder,
    DeleteByIdBuilder,
    DeleteManyBuilder,
    FindByIdBuilder,
    FindManyBuilder,
    FindOneBuilder,
    PaginateBuilder,
    UpdateByIdBuilder,
    UpdateManyBuilder,
} from 'sqlmancer';

export type ID = number | string;
export type JSON = boolean | number | string | null | JSONArray | JSONObject;
export interface JSONObject {
    [key: string]: JSON;
}
export type JSONArray = Array<JSON>;

export type ArticleFields = {
    id: ID;
};

export type ArticleIds = 'id';

export type ArticleEnums = unknown;

export type ArticleAssociations = {};

export type ArticleCreateFields = {
    id: ID;
};

export type ArticleUpdateFields = {};

export type ArticleFindOneBuilder<
    TSelected extends Pick<ArticleFields, any> = ArticleFields
> = FindOneBuilder<
    'sqlite',
    ArticleFields,
    ArticleIds,
    ArticleEnums,
    ArticleAssociations,
    TSelected
>;

export type ArticleFindManyBuilder<
    TSelected extends Pick<ArticleFields, any> = ArticleFields
> = FindManyBuilder<
    'sqlite',
    ArticleFields,
    ArticleIds,
    ArticleEnums,
    ArticleAssociations,
    TSelected
>;

export type ArticleFindByIdBuilder<
    TSelected extends Pick<ArticleFields, any> = ArticleFields
> = FindByIdBuilder<ArticleFields, ArticleIds, ArticleEnums, ArticleAssociations, TSelected>;

export type ArticlePaginateBuilder = PaginateBuilder<
    'sqlite',
    ArticleFields,
    ArticleIds,
    ArticleEnums,
    ArticleAssociations
>;

export type ArticleDeleteManyBuilder = DeleteManyBuilder<
    'sqlite',
    ArticleFields,
    ArticleIds,
    ArticleEnums,
    ArticleAssociations
>;

export type ArticleDeleteByIdBuilder = DeleteByIdBuilder;

export type ArticleCreateManyBuilder = CreateManyBuilder<ArticleCreateFields>;

export type ArticleCreateOneBuilder = CreateOneBuilder<ArticleCreateFields>;

export type ArticleUpdateManyBuilder = UpdateManyBuilder<
    'sqlite',
    ArticleUpdateFields,
    ArticleFields,
    ArticleIds,
    ArticleEnums,
    ArticleAssociations
>;

export type ArticleUpdateByIdBuilder = UpdateByIdBuilder<ArticleUpdateFields>;

export type SqlmancerClient = Knex & {
    models: {
        Article: {
            findById: (id: ID) => ArticleFindByIdBuilder;
            findMany: () => ArticleFindManyBuilder;
            findOne: () => ArticleFindOneBuilder;
            paginate: () => ArticlePaginateBuilder;
            createMany: (input: ArticleCreateFields[]) => ArticleCreateManyBuilder;
            createOne: (input: ArticleCreateFields) => ArticleCreateOneBuilder;
            deleteById: (id: ID) => ArticleDeleteByIdBuilder;
            deleteMany: () => ArticleDeleteManyBuilder;
            updateById: (id: ID, input: ArticleUpdateFields) => ArticleUpdateByIdBuilder;
            updateMany: (input: ArticleUpdateFields) => ArticleUpdateManyBuilder;
        };
    };
};
