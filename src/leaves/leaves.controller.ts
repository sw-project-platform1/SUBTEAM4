import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { CreateLeaveRequestDto } from './dto/createLeaveRequest.dto';

@Controller('leaves')
export class LeavesController {
  constructor(private readonly leavesService: LeavesService) {}

  @Post('request')
  createLeave(@Body() dto: CreateLeaveRequestDto) {
    return this.leavesService.create(dto);
  }

  @Get()
  getAllLeaves() {
    return this.leavesService.findAll();
  }

  @Get(':id')
  getLeave(@Param('id') id: string) {
    return this.leavesService.findOne(id);
  }
}
