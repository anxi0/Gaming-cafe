export default () => ({
  port: parseInt(process.env.PORT, 10) || 3030,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    type: 'mysql',
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: ['dist/**/**/*.entity{.js,.ts}'],
    synchronize: true,
  },
});
