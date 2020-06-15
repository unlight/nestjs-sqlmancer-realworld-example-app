import { Query, Resolver } from '@nestjs/graphql';

import { TagService } from './tag.service';

/**
 * Resolves tag object type.
 */
@Resolver('Tag')
export class TagResolver {
    constructor(private readonly tagService: TagService) {}

    @Query()
    async tags() {
        return this.tagService.findAll();
    }
}
