import { BaseVestingAccount, BaseVestingAccountAmino, BaseVestingAccountSDKType } from "../../../cosmos/vesting/v1beta1/vesting";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
import { Decimal } from "@cosmjs/math";
/**
 * LazyGradedVestingAccount implements the LazyGradedVestingAccount interface. It vests all
 * coins according to a predefined schedule.
 */
export interface LazyGradedVestingAccount {
  baseVestingAccount?: BaseVestingAccount;
  vestingSchedules: VestingSchedule[];
}
export interface LazyGradedVestingAccountProtoMsg {
  typeUrl: "/terra.vesting.v1beta1.LazyGradedVestingAccount";
  value: Uint8Array;
}
/**
 * LazyGradedVestingAccount implements the LazyGradedVestingAccount interface. It vests all
 * coins according to a predefined schedule.
 */
export interface LazyGradedVestingAccountAmino {
  base_vesting_account?: BaseVestingAccountAmino;
  vesting_schedules?: VestingScheduleAmino[];
}
export interface LazyGradedVestingAccountAminoMsg {
  type: "/terra.vesting.v1beta1.LazyGradedVestingAccount";
  value: LazyGradedVestingAccountAmino;
}
/**
 * LazyGradedVestingAccount implements the LazyGradedVestingAccount interface. It vests all
 * coins according to a predefined schedule.
 */
export interface LazyGradedVestingAccountSDKType {
  base_vesting_account?: BaseVestingAccountSDKType;
  vesting_schedules: VestingScheduleSDKType[];
}
/** Schedule - represent single schedule data for a vesting schedule */
export interface Schedule {
  startTime: bigint;
  endTime: bigint;
  ratio: string;
}
export interface ScheduleProtoMsg {
  typeUrl: "/terra.vesting.v1beta1.Schedule";
  value: Uint8Array;
}
/** Schedule - represent single schedule data for a vesting schedule */
export interface ScheduleAmino {
  start_time?: string;
  end_time?: string;
  ratio?: string;
}
export interface ScheduleAminoMsg {
  type: "/terra.vesting.v1beta1.Schedule";
  value: ScheduleAmino;
}
/** Schedule - represent single schedule data for a vesting schedule */
export interface ScheduleSDKType {
  start_time: bigint;
  end_time: bigint;
  ratio: string;
}
/** VestingSchedule defines vesting schedule for a denom */
export interface VestingSchedule {
  denom: string;
  schedules: Schedule[];
}
export interface VestingScheduleProtoMsg {
  typeUrl: "/terra.vesting.v1beta1.VestingSchedule";
  value: Uint8Array;
}
/** VestingSchedule defines vesting schedule for a denom */
export interface VestingScheduleAmino {
  denom?: string;
  schedules?: ScheduleAmino[];
}
export interface VestingScheduleAminoMsg {
  type: "/terra.vesting.v1beta1.VestingSchedule";
  value: VestingScheduleAmino;
}
/** VestingSchedule defines vesting schedule for a denom */
export interface VestingScheduleSDKType {
  denom: string;
  schedules: ScheduleSDKType[];
}
function createBaseLazyGradedVestingAccount(): LazyGradedVestingAccount {
  return {
    baseVestingAccount: undefined,
    vestingSchedules: []
  };
}
export const LazyGradedVestingAccount = {
  typeUrl: "/terra.vesting.v1beta1.LazyGradedVestingAccount",
  encode(message: LazyGradedVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseVestingAccount !== undefined) {
      BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.vestingSchedules) {
      VestingSchedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): LazyGradedVestingAccount {
    return {
      baseVestingAccount: isSet(object.baseVestingAccount) ? BaseVestingAccount.fromJSON(object.baseVestingAccount) : undefined,
      vestingSchedules: Array.isArray(object?.vestingSchedules) ? object.vestingSchedules.map((e: any) => VestingSchedule.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<LazyGradedVestingAccount>): LazyGradedVestingAccount {
    const message = createBaseLazyGradedVestingAccount();
    message.baseVestingAccount = object.baseVestingAccount !== undefined && object.baseVestingAccount !== null ? BaseVestingAccount.fromPartial(object.baseVestingAccount) : undefined;
    message.vestingSchedules = object.vestingSchedules?.map(e => VestingSchedule.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: LazyGradedVestingAccountAmino): LazyGradedVestingAccount {
    const message = createBaseLazyGradedVestingAccount();
    if (object.base_vesting_account !== undefined && object.base_vesting_account !== null) {
      message.baseVestingAccount = BaseVestingAccount.fromAmino(object.base_vesting_account);
    }
    message.vestingSchedules = object.vesting_schedules?.map(e => VestingSchedule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: LazyGradedVestingAccount): LazyGradedVestingAccountAmino {
    const obj: any = {};
    obj.base_vesting_account = message.baseVestingAccount ? BaseVestingAccount.toAmino(message.baseVestingAccount) : undefined;
    if (message.vestingSchedules) {
      obj.vesting_schedules = message.vestingSchedules.map(e => e ? VestingSchedule.toAmino(e) : undefined);
    } else {
      obj.vesting_schedules = message.vestingSchedules;
    }
    return obj;
  },
  fromAminoMsg(object: LazyGradedVestingAccountAminoMsg): LazyGradedVestingAccount {
    return LazyGradedVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: LazyGradedVestingAccountProtoMsg): LazyGradedVestingAccount {
    return LazyGradedVestingAccount.decode(message.value);
  },
  toProto(message: LazyGradedVestingAccount): Uint8Array {
    return LazyGradedVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: LazyGradedVestingAccount): LazyGradedVestingAccountProtoMsg {
    return {
      typeUrl: "/terra.vesting.v1beta1.LazyGradedVestingAccount",
      value: LazyGradedVestingAccount.encode(message).finish()
    };
  }
};
function createBaseSchedule(): Schedule {
  return {
    startTime: BigInt(0),
    endTime: BigInt(0),
    ratio: ""
  };
}
export const Schedule = {
  typeUrl: "/terra.vesting.v1beta1.Schedule",
  encode(message: Schedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.startTime !== BigInt(0)) {
      writer.uint32(8).int64(message.startTime);
    }
    if (message.endTime !== BigInt(0)) {
      writer.uint32(16).int64(message.endTime);
    }
    if (message.ratio !== "") {
      writer.uint32(26).string(Decimal.fromUserInput(message.ratio, 18).atomics);
    }
    return writer;
  },
  fromJSON(object: any): Schedule {
    return {
      startTime: isSet(object.startTime) ? BigInt(object.startTime.toString()) : BigInt(0),
      endTime: isSet(object.endTime) ? BigInt(object.endTime.toString()) : BigInt(0),
      ratio: isSet(object.ratio) ? String(object.ratio) : ""
    };
  },
  fromPartial(object: Partial<Schedule>): Schedule {
    const message = createBaseSchedule();
    message.startTime = object.startTime !== undefined && object.startTime !== null ? BigInt(object.startTime.toString()) : BigInt(0);
    message.endTime = object.endTime !== undefined && object.endTime !== null ? BigInt(object.endTime.toString()) : BigInt(0);
    message.ratio = object.ratio ?? "";
    return message;
  },
  fromAmino(object: ScheduleAmino): Schedule {
    const message = createBaseSchedule();
    if (object.start_time !== undefined && object.start_time !== null) {
      message.startTime = BigInt(object.start_time);
    }
    if (object.end_time !== undefined && object.end_time !== null) {
      message.endTime = BigInt(object.end_time);
    }
    if (object.ratio !== undefined && object.ratio !== null) {
      message.ratio = object.ratio;
    }
    return message;
  },
  toAmino(message: Schedule): ScheduleAmino {
    const obj: any = {};
    obj.start_time = message.startTime !== BigInt(0) ? message.startTime.toString() : undefined;
    obj.end_time = message.endTime !== BigInt(0) ? message.endTime.toString() : undefined;
    obj.ratio = message.ratio === "" ? undefined : message.ratio;
    return obj;
  },
  fromAminoMsg(object: ScheduleAminoMsg): Schedule {
    return Schedule.fromAmino(object.value);
  },
  fromProtoMsg(message: ScheduleProtoMsg): Schedule {
    return Schedule.decode(message.value);
  },
  toProto(message: Schedule): Uint8Array {
    return Schedule.encode(message).finish();
  },
  toProtoMsg(message: Schedule): ScheduleProtoMsg {
    return {
      typeUrl: "/terra.vesting.v1beta1.Schedule",
      value: Schedule.encode(message).finish()
    };
  }
};
function createBaseVestingSchedule(): VestingSchedule {
  return {
    denom: "",
    schedules: []
  };
}
export const VestingSchedule = {
  typeUrl: "/terra.vesting.v1beta1.VestingSchedule",
  encode(message: VestingSchedule, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    for (const v of message.schedules) {
      Schedule.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): VestingSchedule {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      schedules: Array.isArray(object?.schedules) ? object.schedules.map((e: any) => Schedule.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<VestingSchedule>): VestingSchedule {
    const message = createBaseVestingSchedule();
    message.denom = object.denom ?? "";
    message.schedules = object.schedules?.map(e => Schedule.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: VestingScheduleAmino): VestingSchedule {
    const message = createBaseVestingSchedule();
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    }
    message.schedules = object.schedules?.map(e => Schedule.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: VestingSchedule): VestingScheduleAmino {
    const obj: any = {};
    obj.denom = message.denom === "" ? undefined : message.denom;
    if (message.schedules) {
      obj.schedules = message.schedules.map(e => e ? Schedule.toAmino(e) : undefined);
    } else {
      obj.schedules = message.schedules;
    }
    return obj;
  },
  fromAminoMsg(object: VestingScheduleAminoMsg): VestingSchedule {
    return VestingSchedule.fromAmino(object.value);
  },
  fromProtoMsg(message: VestingScheduleProtoMsg): VestingSchedule {
    return VestingSchedule.decode(message.value);
  },
  toProto(message: VestingSchedule): Uint8Array {
    return VestingSchedule.encode(message).finish();
  },
  toProtoMsg(message: VestingSchedule): VestingScheduleProtoMsg {
    return {
      typeUrl: "/terra.vesting.v1beta1.VestingSchedule",
      value: VestingSchedule.encode(message).finish()
    };
  }
};