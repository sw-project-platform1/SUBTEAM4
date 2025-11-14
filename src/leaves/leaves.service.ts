import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LeaveRequest, LeaveRequestDocument } from './schemas/leaveRequest.schema';
import { CreateLeaveRequestDto } from './dto/createLeaveRequest.dto';

@Injectable()
export class LeavesService {
  constructor(
    @InjectModel(LeaveRequest.name) private leaveModel: Model<LeaveRequestDocument>,
  ) {}

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
}
