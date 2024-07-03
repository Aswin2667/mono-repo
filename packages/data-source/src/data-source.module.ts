import { Module } from '@nestjs/common';
import { PrismaService } from './shared/prisma.service';
import { HelpersModelService } from './shared/helpers.service';

@Module({
  providers: [
    PrismaService,
    HelpersModelService,
  ],
  exports: [
    PrismaService,
    HelpersModelService,
  ],
})
export class DataSourceModule { }
