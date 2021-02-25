import { Connection, createConnection, getConnectionOptions } from "typeorm";

// Defines the type of bank to connect
export default async (): Promise<Connection> => {
  // Get datas to ormconfig.json
  const defaultOptions = await getConnectionOptions();

  return createConnection(
    // Overwrite the object with ormconfig.json data from the database
    Object.assign(defaultOptions, {
      database:
        process.env.NODE_ENV === "test"
          ? "./src/database/database.test.sqlite"
          : defaultOptions.database,
    })
  );
};
