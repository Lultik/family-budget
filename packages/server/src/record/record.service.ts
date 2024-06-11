import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import RecordRepository from './record.repository';
import { CreateRecordDto } from "./dto/create-record.dto";
import { UpdateRecordDto } from "./dto/update-record.dto";

@Injectable()
export class RecordService {
  constructor(private readonly recordRepository: RecordRepository) {
  }

  async create(record: CreateRecordDto) {
    // TODO: validate body
    try {
      return this.recordRepository.model.create({id: uuidv4(), ...record});
    } catch (err) {
      return JSON.stringify(err);
    }
  }

  async findAll() {
    try {
      return this.recordRepository.model.scan().exec();
    } catch (err) {
      return JSON.stringify(err);
    }
  }

  findOne(id: string) {
    return this.recordRepository.model.get({id});
  }

  update(id: string, updateBudgetDto: UpdateRecordDto) {
    return this.recordRepository.model.update({id}, {...updateBudgetDto});
  }

  remove(id: string) {
    return this.recordRepository.model.delete(id);
  }
}
