import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { schemaDirectives } from 'sqlmancer';

import { UserModule } from './user/user.module';

@Module({
    imports: [
        UserModule,
        GraphQLModule.forRoot({
            typePaths: [`${__dirname}/**/*.graphql`],
            schemaDirectives: {
                ...schemaDirectives,
            },
        }),
    ],
})
export class AppModule {}
