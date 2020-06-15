import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { schemaDirectives, typeDefs } from 'sqlmancer';

import { UserModule } from './user/user.module';
import { ArticleModule } from './article/article.module';
import { TagModule } from './tag/tag.module';
import { print } from 'graphql';

@Module({
    imports: [
        TagModule,
        UserModule,
        ArticleModule,
        GraphQLModule.forRoot({
            typePaths: [`${__dirname}/**/*.graphql`],
            typeDefs: print(typeDefs),
            schemaDirectives: {
                ...schemaDirectives,
            },
        }),
    ],
})
export class AppModule {}
