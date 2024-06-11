import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RecordService } from './record.service';
import { CreateRecordDto } from "./dto/create-record.dto";
import { UpdateRecordDto } from "./dto/update-record.dto";


@Controller('budget')
export class RecordController {
  constructor(private readonly budgetService: RecordService) {
  }

  @Post()
  create(@Body() createBudgetDto: CreateRecordDto) {
    return this.budgetService.create(createBudgetDto);
  }

  @Get()
  findAll() {
    return this.budgetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.budgetService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBudgetDto: UpdateRecordDto) {
    return this.budgetService.update(id, updateBudgetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.budgetService.remove(id);
  }
}
