import 'dotenv/config';

import { DataSource, DataSourceOptions } from "typeorm";

const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_HOST),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname + '../**/*.entity.ts'],
    ssl: {
        rejectUnauthorized: false,
      },
    synchronize: false,
    migrations: [__dirname + '../migrations/*.ts'],
}

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;