import { IsEnum, IsNumber, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export namespace Environment {
  enum EnvironmentEnum {
    Development = 'development',
    Production = 'production',
  }

  class EnvironmentVariables {
    @IsEnum(EnvironmentEnum)
    NODE_ENV: EnvironmentEnum;

    @IsNumber()
    PORT: number;
  }

  export class EnvValidation {
    validate(config: Record<string, unknown>) {
      const validatedConfig = plainToInstance(EnvironmentVariables, config, {
        enableImplicitConversion: true,
      });
      const errors = validateSync(validatedConfig, {
        skipMissingProperties: false,
      });

      if (errors.length > 0) {
        throw new Error(errors.toString());
      }
      return validatedConfig;
    }
  }
}
