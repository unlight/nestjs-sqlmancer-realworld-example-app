import { Injectable } from '@nestjs/common';

/**
 * Service for manage tags.
 */
@Injectable()
export class TagService {
    findMany = this.prisma.tag.findMany;

    constructor(private readonly prisma: any) {}

    /**
     * Create tags (if not exists) from array of strings.
     */
    async createTags(tags: string[]) {
        const upsertOperations = tags.map((name) => {
            return this.prisma.tag.upsert({
                where: { name },
                create: { name },
                update: {},
            });
        });
        return Promise.all(upsertOperations);
    }

    /**
     * Return all tags.
     */
    async findAll() {
        return this.prisma.tag.findMany();
    }
}
