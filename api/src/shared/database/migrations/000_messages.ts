export async function up(Knex: any) {
  return Knex.schema.createTable('messages', (table: any) => {
    table.increments('id').primary();
    table.integer('user_id').notNullable();
    table.string('title').notNullable();
    table.string('subject').notNullable();
    table.string('detail').notNullable();
    table.integer('created_at').notNullable();
    table.boolean('is_read').notNullable();
  });
}

export async function down(Knex: any) {
  return Knex.schema.dropTable('messages');
}
