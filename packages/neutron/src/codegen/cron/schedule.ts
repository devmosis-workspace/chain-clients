import { Long, isSet } from "../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Schedule {
  /** Name of schedule */
  name: string;
  /** Period in blocks */
  period: Long;
  /** Msgs that will be executed every period amount of time */
  msgs: MsgExecuteContract[];
  /** Last execution's block height */
  lastExecuteHeight: Long;
}
export interface ScheduleSDKType {
  name: string;
  period: Long;
  msgs: MsgExecuteContractSDKType[];
  last_execute_height: Long;
}
export interface MsgExecuteContract {
  /** Contract is the address of the smart contract */
  contract: string;
  /** Msg is json encoded message to be passed to the contract */
  msg: string;
}
export interface MsgExecuteContractSDKType {
  contract: string;
  msg: string;
}
export interface ScheduleCount {
  /** Count is the number of current schedules */
  count: number;
}
export interface ScheduleCountSDKType {
  count: number;
}
function createBaseSchedule(): Schedule {
  return {
    name: "",
    period: Long.UZERO,
    msgs: [],
    lastExecuteHeight: Long.UZERO
  };
}
export const Schedule = {
  encode(message: Schedule, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (!message.period.isZero()) {
      writer.uint32(16).uint64(message.period);
    }
    for (const v of message.msgs) {
      MsgExecuteContract.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (!message.lastExecuteHeight.isZero()) {
      writer.uint32(32).uint64(message.lastExecuteHeight);
    }
    return writer;
  },
  fromJSON(object: any): Schedule {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      period: isSet(object.period) ? Long.fromValue(object.period) : Long.UZERO,
      msgs: Array.isArray(object?.msgs) ? object.msgs.map((e: any) => MsgExecuteContract.fromJSON(e)) : [],
      lastExecuteHeight: isSet(object.lastExecuteHeight) ? Long.fromValue(object.lastExecuteHeight) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Schedule>): Schedule {
    const message = createBaseSchedule();
    message.name = object.name ?? "";
    message.period = object.period !== undefined && object.period !== null ? Long.fromValue(object.period) : Long.UZERO;
    message.msgs = object.msgs?.map(e => MsgExecuteContract.fromPartial(e)) || [];
    message.lastExecuteHeight = object.lastExecuteHeight !== undefined && object.lastExecuteHeight !== null ? Long.fromValue(object.lastExecuteHeight) : Long.UZERO;
    return message;
  }
};
function createBaseMsgExecuteContract(): MsgExecuteContract {
  return {
    contract: "",
    msg: ""
  };
}
export const MsgExecuteContract = {
  encode(message: MsgExecuteContract, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract !== "") {
      writer.uint32(10).string(message.contract);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },
  fromJSON(object: any): MsgExecuteContract {
    return {
      contract: isSet(object.contract) ? String(object.contract) : "",
      msg: isSet(object.msg) ? String(object.msg) : ""
    };
  },
  fromPartial(object: Partial<MsgExecuteContract>): MsgExecuteContract {
    const message = createBaseMsgExecuteContract();
    message.contract = object.contract ?? "";
    message.msg = object.msg ?? "";
    return message;
  }
};
function createBaseScheduleCount(): ScheduleCount {
  return {
    count: 0
  };
}
export const ScheduleCount = {
  encode(message: ScheduleCount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.count !== 0) {
      writer.uint32(8).int32(message.count);
    }
    return writer;
  },
  fromJSON(object: any): ScheduleCount {
    return {
      count: isSet(object.count) ? Number(object.count) : 0
    };
  },
  fromPartial(object: Partial<ScheduleCount>): ScheduleCount {
    const message = createBaseScheduleCount();
    message.count = object.count ?? 0;
    return message;
  }
};