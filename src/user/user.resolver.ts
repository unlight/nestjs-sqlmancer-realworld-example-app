import { Directive, Query, Resolver } from '@nestjs/graphql';

import { User } from './models/user.model';

/**
 * Resolves user object type.
 */
@Resolver(() => User)
export class UserResolver {
    constructor() {}

    /**
     * Query for single user.
     */
    @Query(() => User)
    async me() {
        return null;
    }
}
