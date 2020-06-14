import { Directive, Query, Resolver } from '@nestjs/graphql';

/**
 * Resolves user object type.
 */
@Resolver('User')
export class UserResolver {
    constructor() {}

    /**
     * Query for single user.
     */
    @Query()
    async me() {
        return null;
    }
}
