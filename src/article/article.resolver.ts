import { Args, Query, Resolver, Info } from '@nestjs/graphql';
import { repository } from '../sqlmancer/client';

/**
 * Resolver for article type.
 */
@Resolver('Article')
export class ArticleResolver {
    constructor() {}

    @Query()
    async articles(@Args() args, @Info() info) {
        console.log('args', args);
        const result = await repository.models.Article.findMany().resolveInfo(info).execute();
        return result;
    }
}
