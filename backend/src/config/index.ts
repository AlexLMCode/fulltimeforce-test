import { IsDefined, IsEnum, IsNumber, IsOptional, IsString, validateSync } from 'class-validator';
import { plainToInstance } from 'class-transformer';
import { Logger } from '@nestjs/common';

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
    @IsDefined()
    PORT: number;

    @IsString()
    @IsDefined()
    OCTOKIT_TOKEN: string

    @IsString()
    @IsDefined()
    OWNER_NAME: string;

    @IsString()
    @IsDefined()
    REPOSITORY_NAME: string;

    @IsString()
    @IsDefined()
    API_NAME: string;

    @IsString()
    @IsDefined()
    API_DESCRIPTION: string;

    @IsString()
    @IsDefined()
    API_VERSION: string;
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
        Logger.error(`Environment Variables Validation`);
         for (const error of errors) {
            Logger.error(`${error.property} needs to be defined`);
         }
         throw new Error(errors.toString());
      }
      return validatedConfig;
    }
  }
}
