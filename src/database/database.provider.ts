import { DynamicModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Environment } from 'src/common';

const config: ConfigService = new ConfigService();
const isDevelopmentEnv = config.get('NODE_ENV') === Environment.Development;
export const DataBaseProvider: DynamicModule = SequelizeModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (config) => ({
    dialect: config.get('DB_DIALECT'),
    host: config.get('DB_HOST'),
    port: config.get('DB_PORT'),
    username: config.get('DB_USER'),
    password: config.get('DB_PASS'),
    database: config.get('DB_NAME'),
    autoLoadModels: true,
    synchronize: isDevelopmentEnv,
  }),
  inject: [ConfigService],
});
