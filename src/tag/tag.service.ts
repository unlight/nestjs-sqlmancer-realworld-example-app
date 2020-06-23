import { Injectable } from '@nestjs/common';

/**
 * Service for manage tags.
 */
@Injectable()
export class TagService {
    constructor() {}

    /**
     * Create tags (if not exists) from array of strings.
     */
    async createTags(tags: string[]) {}

    /**
     * Return all tags.
     */
    async findAll() {}
}
