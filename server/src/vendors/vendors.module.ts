import { PrismaModule } from 'src/prisma/prisma.module';
import { Module } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { VendorsController } from './vendors.controller';

@Module({
  controllers: [VendorsController],
  providers: [VendorsService],
  imports: [PrismaModule],
})
export class VendorsModule {}
