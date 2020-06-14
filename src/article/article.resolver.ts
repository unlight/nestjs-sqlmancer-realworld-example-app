import { Args, Query, Resolver } from '@nestjs/graphql';

/**
 * Resolver for article type.
 */
@Resolver('Article')
export class ArticleResolver {
    constructor() {}

    @Query()
    async articles(@Args() arguments_: any) {
        return [];
    }
}
