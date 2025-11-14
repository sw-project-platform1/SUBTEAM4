import { IsNumber, IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateLeaveRequestDto {
  @IsNumber()
  @IsNotEmpty()
  employeeId: number;

  @IsString()
  @IsNotEmpty()
  leaveType: string;

  @IsDateString()
  @IsNotEmpty()
  startDate: string;

  @IsDateString()
  @IsNotEmpty()
  endDate: string;
}
