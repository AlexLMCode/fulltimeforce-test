import { IsEnum, IsNumber, IsOptional, IsString, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';

export namespace Environment {
  enum EnvironmentEnum {
    Development = 'development',
    Production = 'production',
  }

  class EnvironmentVariables {
    @IsEnum(EnvironmentEnum)
    @IsOptional()
    NODE_ENV: EnvironmentEnum;

    @IsNumber()
    PORT: number;

    @IsString()
    OCTOKIT_TOKEN: string
  }

  export class EnvValidation {
    static validate(config: Record<string, unknown>) {
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
