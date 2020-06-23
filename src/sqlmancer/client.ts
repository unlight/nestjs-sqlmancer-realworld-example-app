import Knex from 'knex';
import { createSqlmancerClient } from 'sqlmancer';

import { SqlmancerClient } from './types';
import path from 'path';

export function createClient() {
    const client: SqlmancerClient = createSqlmancerClient(
        `${__dirname}/../**/*.graphql`,
        Knex({
            debug: true,
            client: 'sqlite3',
            connection: {
                filename: 'data.db',
            },
        }),
    );
    return client;
}

export const client = createClient();
