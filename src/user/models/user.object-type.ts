import { Field, Int, ID, ObjectType } from '@nestjs/graphql';
import { Article } from '../../article/models/article.object-type';

@ObjectType()
export class User {
    @Field((type) => ID)
    id?: number;

    @Field({ nullable: false })
    email?: string;

    @Field({ nullable: false })
    name?: string;

    @Field({ nullable: false })
    password?: string;

    @Field({ nullable: true })
    bio?: string;

    @Field({ nullable: true })
    image?: string;

    @Field((type) => [User])
    following?: User[];

    @Field((type) => [User])
    followers?: User[];

    @Field((type) => [Article])
    favoriteArticles?: Article[];
}
