import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BudgetRecordService } from './budget-record.service';
import { CreateBudgetRecordDto } from './dto/create-budget-record.dto';
import { UpdateBudgetRecordDto } from './dto/update-budget-record.dto';

@Controller('budget-record')
export class BudgetRecordController {
  constructor(private readonly budgetRecordService: BudgetRecordService) {}

  @Post()
  create(@Body() createBudgetRecordDto: CreateBudgetRecordDto) {
    return this.budgetRecordService.create(createBudgetRecordDto);
  }

  @Get()
  findAll() {
    // not found error handling
    return this.budgetRecordService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetRecordService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBudgetRecordDto: UpdateBudgetRecordDto,
  ) {
    return this.budgetRecordService.update(id, updateBudgetRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetRecordService.remove(id);
  }
}
