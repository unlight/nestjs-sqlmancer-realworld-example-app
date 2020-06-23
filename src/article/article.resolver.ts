import { Args, Query, Resolver, Info } from '@nestjs/graphql';
import { client } from '../sqlmancer/client';

/**
 * Resolver for article type.
 */
@Resolver('Article')
export class ArticleResolver {
    constructor() {}

    @Query()
    async articles(@Args() args, @Info() info) {
        debugger;
        const result = await client.models.Article.findMany().resolveInfo(info).execute();
        return result;
    }
}
