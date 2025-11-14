import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { LeavesService } from './leaves.service';
import { CreateLeaveRequestDto } from './dto/createLeaveRequest.dto';
import { CreateLeaveTypeDto } from './dto/create-leave-type.dto';
import { CreateLeavePolicyDto } from './dto/create-leave-policy.dto';
import { CreateEntitlementDto } from './dto/create-entitlement.dto';
import { CreateCalendarDto } from './dto/create-calendar.dto';

@Controller('leaves')
export class LeavesController {
  constructor(private readonly leavesService: LeavesService) {}

  //LEAVE REQUEST

  @Post('requests')
  createLeave(@Body() dto: CreateLeaveRequestDto) {
    return this.leavesService.create(dto);
  }

  @Get('requests')
  getAllLeaves() {
    return this.leavesService.findAll();
  }

  @Get('requests/:id')
  getLeave(@Param('id') id: string) {
    return this.leavesService.findOne(id);
  }

  //LEAVE POLICY

  //Leave Types
  @Post('types')
  createLeaveType(@Body() dto: CreateLeaveTypeDto) {
    return this.leavesService.createLeaveType(dto);
  }

  @Get('types')
  getLeaveTypes() {
    return this.leavesService.getLeaveTypes();
  }

  //Leave Policies
  @Post('policies')
  createLeavePolicy(@Body() dto: CreateLeavePolicyDto) {
    return this.leavesService.createLeavePolicy(dto);
  }

  @Get('policies')
  getLeavePolicies() {
    return this.leavesService.getLeavePolicies();
  }

  //Entitlements
  @Post('entitlements')
  createEntitlement(@Body() dto: CreateEntitlementDto) {
    return this.leavesService.createEntitlement(dto);
  }

  @Get('entitlements')
  getEntitlements() {
    return this.leavesService.getEntitlements();
  }

  //Calendars
  @Post('calendars')
  createCalendar(@Body() dto: CreateCalendarDto) {
    return this.leavesService.createCalendar(dto);
  }

  @Get('calendars')
  getCalendars() {
    return this.leavesService.getCalendars();
  }
}
