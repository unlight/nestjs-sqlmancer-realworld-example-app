import Knex from 'knex';
import { createSqlmancerClient } from 'sqlmancer';

import { SqlmancerClient } from './types';

export function createClient() {
    const client: SqlmancerClient = createSqlmancerClient(
        `${__dirname}/../**/*.graphql`,
        Knex({
            client: 'sqlite3',
            connection: 'file:data.db',
        }),
    );
    return client;
}

export const repository = createClient();
