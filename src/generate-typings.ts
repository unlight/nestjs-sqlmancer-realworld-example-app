import { GraphQLDefinitionsFactory } from '@nestjs/graphql';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: [`${__dirname}/**/*.graphql`],
    path: `${__dirname}/graphql.schema.ts`,
    outputAs: 'class',
});
