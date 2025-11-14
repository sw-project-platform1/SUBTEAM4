export class CreateLeavePolicyDto {
    type: string
    entitlement: number;
    carryOverMax?: number;
    accrualRate?: number;
    roundingMethod?: string;
    blockedDays?: Date[];
}
