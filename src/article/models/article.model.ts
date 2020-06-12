import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Article {
    @Field((type) => ID)
    id?: number;
}
