import oracledb from 'oracledb';
import dbConfig from '../../../config';

export async function GET (_req) {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    return new Response("Connected to db.", { status: 200 })
  } catch (err) {
    console.error(err);
    return new Response("Failed to connect to Oracle database", { status: 500 })
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
