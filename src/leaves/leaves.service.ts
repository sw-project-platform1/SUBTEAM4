import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LeaveRequest, LeaveRequestDocument } from './schemas/leaveRequest.schema';
import { CreateLeaveRequestDto } from './dto/createLeaveRequest.dto';
import { LeaveType, LeaveTypeDocument } from './schemas/leave-type.schema';
import { LeavePolicy, LeavePolicyDocument } from './schemas/leavePolicy.schema';
import { Entitlement, EntitlementDocument } from './schemas/entitlement.schema';
import { Calendar, CalendarDocument } from './schemas/calendar.schema';
import { CreateLeaveTypeDto } from './dto/create-leave-type.dto';
import { CreateLeavePolicyDto } from './dto/create-leave-policy.dto';
import { CreateEntitlementDto } from './dto/create-entitlement.dto';
import { CreateCalendarDto } from './dto/create-calendar.dto';

@Injectable()
export class LeavesService {
    constructor(
      @InjectModel(LeaveRequest.name) private leaveModel: Model<LeaveRequestDocument>,
      @InjectModel(LeaveType.name) private leaveTypeModel: Model<LeaveTypeDocument>,
      @InjectModel(LeavePolicy.name) private leavePolicyModel: Model<LeavePolicyDocument>,
      @InjectModel(Entitlement.name) private entitlementModel: Model<EntitlementDocument>,
      @InjectModel(Calendar.name) private calendarModel: Model<CalendarDocument>,
    ) {}

    //LEAVE REQUEST

    async create(dto: CreateLeaveRequestDto): Promise<LeaveRequest> {
      const leave = new this.leaveModel(dto);
      return leave.save();
    }

    async findAll(): Promise<LeaveRequest[]> {
      return this.leaveModel.find().exec();
    }

    async findOne(id: string): Promise<LeaveRequest> {
      const leave = await this.leaveModel.findById(id).exec();
      if (!leave) {
        throw new NotFoundException(`LeaveRequest with ID ${id} not found`);
      }
      return leave;
    }

    //LEAVE POLICY

      //Leave Types
    async createLeaveType(dto: CreateLeaveTypeDto) {
      const leaveType = new this.leaveTypeModel(dto);
      return leaveType.save();
    }
    async getLeaveTypes() {
      return this.leaveTypeModel.find().exec();
    }

    //Leave Policies
    async createLeavePolicy(dto: CreateLeavePolicyDto) {
      const policy = new this.leavePolicyModel(dto);
      return policy.save();
    }
    async getLeavePolicies() {
      return this.leavePolicyModel.find().exec();
    }

    //Entitlements
    async createEntitlement(dto: CreateEntitlementDto) {
      const ent = new this.entitlementModel(dto);
      return ent.save();
    }
    async getEntitlements() {
      return this.entitlementModel.find().exec();
    }

    //Calendars
    async createCalendar(dto: CreateCalendarDto) {
      const cal = new this.calendarModel(dto);
      return cal.save();
    }
    async getCalendars() {
      return this.calendarModel.find().exec();
    }
}
