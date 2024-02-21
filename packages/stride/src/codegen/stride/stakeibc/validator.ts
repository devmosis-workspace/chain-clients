import { BinaryWriter } from "../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet } from "../../helpers";
export interface Validator {
  name: string;
  address: string;
  weight: bigint;
  delegation: string;
  slashQueryProgressTracker: string;
  slashQueryCheckpoint: string;
  sharesToTokensRate: string;
  delegationChangesInProgress: bigint;
  slashQueryInProgress: boolean;
}
export interface ValidatorProtoMsg {
  typeUrl: "/stride.stakeibc.Validator";
  value: Uint8Array;
}
export interface ValidatorAmino {
  name?: string;
  address?: string;
  weight?: string;
  delegation?: string;
  slash_query_progress_tracker?: string;
  slash_query_checkpoint?: string;
  shares_to_tokens_rate?: string;
  delegation_changes_in_progress?: string;
  slash_query_in_progress?: boolean;
}
export interface ValidatorAminoMsg {
  type: "/stride.stakeibc.Validator";
  value: ValidatorAmino;
}
export interface ValidatorSDKType {
  name: string;
  address: string;
  weight: bigint;
  delegation: string;
  slash_query_progress_tracker: string;
  slash_query_checkpoint: string;
  shares_to_tokens_rate: string;
  delegation_changes_in_progress: bigint;
  slash_query_in_progress: boolean;
}
function createBaseValidator(): Validator {
  return {
    name: "",
    address: "",
    weight: BigInt(0),
    delegation: "",
    slashQueryProgressTracker: "",
    slashQueryCheckpoint: "",
    sharesToTokensRate: "",
    delegationChangesInProgress: BigInt(0),
    slashQueryInProgress: false
  };
}
export const Validator = {
  typeUrl: "/stride.stakeibc.Validator",
  encode(message: Validator, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.weight !== BigInt(0)) {
      writer.uint32(48).uint64(message.weight);
    }
    if (message.delegation !== "") {
      writer.uint32(42).string(message.delegation);
    }
    if (message.slashQueryProgressTracker !== "") {
      writer.uint32(74).string(message.slashQueryProgressTracker);
    }
    if (message.slashQueryCheckpoint !== "") {
      writer.uint32(98).string(message.slashQueryCheckpoint);
    }
    if (message.sharesToTokensRate !== "") {
      writer.uint32(82).string(Decimal.fromUserInput(message.sharesToTokensRate, 18).atomics);
    }
    if (message.delegationChangesInProgress !== BigInt(0)) {
      writer.uint32(88).int64(message.delegationChangesInProgress);
    }
    if (message.slashQueryInProgress === true) {
      writer.uint32(104).bool(message.slashQueryInProgress);
    }
    return writer;
  },
  fromJSON(object: any): Validator {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      address: isSet(object.address) ? String(object.address) : "",
      weight: isSet(object.weight) ? BigInt(object.weight.toString()) : BigInt(0),
      delegation: isSet(object.delegation) ? String(object.delegation) : "",
      slashQueryProgressTracker: isSet(object.slashQueryProgressTracker) ? String(object.slashQueryProgressTracker) : "",
      slashQueryCheckpoint: isSet(object.slashQueryCheckpoint) ? String(object.slashQueryCheckpoint) : "",
      sharesToTokensRate: isSet(object.sharesToTokensRate) ? String(object.sharesToTokensRate) : "",
      delegationChangesInProgress: isSet(object.delegationChangesInProgress) ? BigInt(object.delegationChangesInProgress.toString()) : BigInt(0),
      slashQueryInProgress: isSet(object.slashQueryInProgress) ? Boolean(object.slashQueryInProgress) : false
    };
  },
  fromPartial(object: Partial<Validator>): Validator {
    const message = createBaseValidator();
    message.name = object.name ?? "";
    message.address = object.address ?? "";
    message.weight = object.weight !== undefined && object.weight !== null ? BigInt(object.weight.toString()) : BigInt(0);
    message.delegation = object.delegation ?? "";
    message.slashQueryProgressTracker = object.slashQueryProgressTracker ?? "";
    message.slashQueryCheckpoint = object.slashQueryCheckpoint ?? "";
    message.sharesToTokensRate = object.sharesToTokensRate ?? "";
    message.delegationChangesInProgress = object.delegationChangesInProgress !== undefined && object.delegationChangesInProgress !== null ? BigInt(object.delegationChangesInProgress.toString()) : BigInt(0);
    message.slashQueryInProgress = object.slashQueryInProgress ?? false;
    return message;
  },
  fromAmino(object: ValidatorAmino): Validator {
    const message = createBaseValidator();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.weight !== undefined && object.weight !== null) {
      message.weight = BigInt(object.weight);
    }
    if (object.delegation !== undefined && object.delegation !== null) {
      message.delegation = object.delegation;
    }
    if (object.slash_query_progress_tracker !== undefined && object.slash_query_progress_tracker !== null) {
      message.slashQueryProgressTracker = object.slash_query_progress_tracker;
    }
    if (object.slash_query_checkpoint !== undefined && object.slash_query_checkpoint !== null) {
      message.slashQueryCheckpoint = object.slash_query_checkpoint;
    }
    if (object.shares_to_tokens_rate !== undefined && object.shares_to_tokens_rate !== null) {
      message.sharesToTokensRate = object.shares_to_tokens_rate;
    }
    if (object.delegation_changes_in_progress !== undefined && object.delegation_changes_in_progress !== null) {
      message.delegationChangesInProgress = BigInt(object.delegation_changes_in_progress);
    }
    if (object.slash_query_in_progress !== undefined && object.slash_query_in_progress !== null) {
      message.slashQueryInProgress = object.slash_query_in_progress;
    }
    return message;
  },
  toAmino(message: Validator): ValidatorAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.address = message.address;
    obj.weight = message.weight ? message.weight.toString() : undefined;
    obj.delegation = message.delegation;
    obj.slash_query_progress_tracker = message.slashQueryProgressTracker;
    obj.slash_query_checkpoint = message.slashQueryCheckpoint;
    obj.shares_to_tokens_rate = message.sharesToTokensRate;
    obj.delegation_changes_in_progress = message.delegationChangesInProgress ? message.delegationChangesInProgress.toString() : undefined;
    obj.slash_query_in_progress = message.slashQueryInProgress;
    return obj;
  },
  fromAminoMsg(object: ValidatorAminoMsg): Validator {
    return Validator.fromAmino(object.value);
  },
  fromProtoMsg(message: ValidatorProtoMsg): Validator {
    return Validator.decode(message.value);
  },
  toProto(message: Validator): Uint8Array {
    return Validator.encode(message).finish();
  },
  toProtoMsg(message: Validator): ValidatorProtoMsg {
    return {
      typeUrl: "/stride.stakeibc.Validator",
      value: Validator.encode(message).finish()
    };
  }
};