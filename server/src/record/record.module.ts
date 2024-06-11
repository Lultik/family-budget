import { Module } from '@nestjs/common';
import { RecordService } from './record.service';
import { RecordController } from './record.controller';
import RecordRepository from './record.repository';

@Module({
  controllers: [RecordController],
  providers: [RecordRepository, RecordService],
})
export class RecordModule {
}
