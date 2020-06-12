import Knex from 'knex';
import { createSqlmancerClient } from 'sqlmancer';

export function createClient() {
    const knex = Knex({
        client: 'sqlite3',
        connection: 'file:data.db',
    });
    const client = createSqlmancerClient('~schema.gql', knex);
    return client;
}
