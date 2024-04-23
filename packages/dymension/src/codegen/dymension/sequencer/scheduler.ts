import { OperatingStatus, operatingStatusFromJSON } from "./operating_status";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** Scheduler defines the operating status of a sequencer */
export interface Scheduler {
  /** sequencerAddress is the bech32-encoded address of the sequencer account, identifying the sequencer */
  sequencerAddress: string;
  /** status is the operating status of this sequencer */
  status: OperatingStatus;
}
export interface SchedulerProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.Scheduler";
  value: Uint8Array;
}
/** Scheduler defines the operating status of a sequencer */
export interface SchedulerAmino {
  /** sequencerAddress is the bech32-encoded address of the sequencer account, identifying the sequencer */
  sequencerAddress?: string;
  /** status is the operating status of this sequencer */
  status?: OperatingStatus;
}
export interface SchedulerAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.Scheduler";
  value: SchedulerAmino;
}
/** Scheduler defines the operating status of a sequencer */
export interface SchedulerSDKType {
  sequencerAddress: string;
  status: OperatingStatus;
}
function createBaseScheduler(): Scheduler {
  return {
    sequencerAddress: "",
    status: 0
  };
}
export const Scheduler = {
  typeUrl: "/dymensionxyz.dymension.sequencer.Scheduler",
  encode(message: Scheduler, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequencerAddress !== "") {
      writer.uint32(10).string(message.sequencerAddress);
    }
    if (message.status !== 0) {
      writer.uint32(16).int32(message.status);
    }
    return writer;
  },
  fromJSON(object: any): Scheduler {
    return {
      sequencerAddress: isSet(object.sequencerAddress) ? String(object.sequencerAddress) : "",
      status: isSet(object.status) ? operatingStatusFromJSON(object.status) : -1
    };
  },
  fromPartial(object: Partial<Scheduler>): Scheduler {
    const message = createBaseScheduler();
    message.sequencerAddress = object.sequencerAddress ?? "";
    message.status = object.status ?? 0;
    return message;
  },
  fromAmino(object: SchedulerAmino): Scheduler {
    const message = createBaseScheduler();
    if (object.sequencerAddress !== undefined && object.sequencerAddress !== null) {
      message.sequencerAddress = object.sequencerAddress;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = operatingStatusFromJSON(object.status);
    }
    return message;
  },
  toAmino(message: Scheduler): SchedulerAmino {
    const obj: any = {};
    obj.sequencerAddress = message.sequencerAddress;
    obj.status = message.status;
    return obj;
  },
  fromAminoMsg(object: SchedulerAminoMsg): Scheduler {
    return Scheduler.fromAmino(object.value);
  },
  fromProtoMsg(message: SchedulerProtoMsg): Scheduler {
    return Scheduler.decode(message.value);
  },
  toProto(message: Scheduler): Uint8Array {
    return Scheduler.encode(message).finish();
  },
  toProtoMsg(message: Scheduler): SchedulerProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.Scheduler",
      value: Scheduler.encode(message).finish()
    };
  }
};