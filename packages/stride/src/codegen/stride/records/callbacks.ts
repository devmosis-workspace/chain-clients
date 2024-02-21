import { LSMTokenDeposit, LSMTokenDepositAmino, LSMTokenDepositSDKType } from "./records";
import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
export interface TransferCallback {
  depositRecordId: bigint;
}
export interface TransferCallbackProtoMsg {
  typeUrl: "/stride.records.TransferCallback";
  value: Uint8Array;
}
export interface TransferCallbackAmino {
  deposit_record_id?: string;
}
export interface TransferCallbackAminoMsg {
  type: "/stride.records.TransferCallback";
  value: TransferCallbackAmino;
}
export interface TransferCallbackSDKType {
  deposit_record_id: bigint;
}
export interface TransferLSMTokenCallback {
  deposit?: LSMTokenDeposit;
}
export interface TransferLSMTokenCallbackProtoMsg {
  typeUrl: "/stride.records.TransferLSMTokenCallback";
  value: Uint8Array;
}
export interface TransferLSMTokenCallbackAmino {
  deposit?: LSMTokenDepositAmino;
}
export interface TransferLSMTokenCallbackAminoMsg {
  type: "/stride.records.TransferLSMTokenCallback";
  value: TransferLSMTokenCallbackAmino;
}
export interface TransferLSMTokenCallbackSDKType {
  deposit?: LSMTokenDepositSDKType;
}
function createBaseTransferCallback(): TransferCallback {
  return {
    depositRecordId: BigInt(0)
  };
}
export const TransferCallback = {
  typeUrl: "/stride.records.TransferCallback",
  encode(message: TransferCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositRecordId !== BigInt(0)) {
      writer.uint32(8).uint64(message.depositRecordId);
    }
    return writer;
  },
  fromJSON(object: any): TransferCallback {
    return {
      depositRecordId: isSet(object.depositRecordId) ? BigInt(object.depositRecordId.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<TransferCallback>): TransferCallback {
    const message = createBaseTransferCallback();
    message.depositRecordId = object.depositRecordId !== undefined && object.depositRecordId !== null ? BigInt(object.depositRecordId.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: TransferCallbackAmino): TransferCallback {
    const message = createBaseTransferCallback();
    if (object.deposit_record_id !== undefined && object.deposit_record_id !== null) {
      message.depositRecordId = BigInt(object.deposit_record_id);
    }
    return message;
  },
  toAmino(message: TransferCallback): TransferCallbackAmino {
    const obj: any = {};
    obj.deposit_record_id = message.depositRecordId ? message.depositRecordId.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferCallbackAminoMsg): TransferCallback {
    return TransferCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferCallbackProtoMsg): TransferCallback {
    return TransferCallback.decode(message.value);
  },
  toProto(message: TransferCallback): Uint8Array {
    return TransferCallback.encode(message).finish();
  },
  toProtoMsg(message: TransferCallback): TransferCallbackProtoMsg {
    return {
      typeUrl: "/stride.records.TransferCallback",
      value: TransferCallback.encode(message).finish()
    };
  }
};
function createBaseTransferLSMTokenCallback(): TransferLSMTokenCallback {
  return {
    deposit: undefined
  };
}
export const TransferLSMTokenCallback = {
  typeUrl: "/stride.records.TransferLSMTokenCallback",
  encode(message: TransferLSMTokenCallback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deposit !== undefined) {
      LSMTokenDeposit.encode(message.deposit, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): TransferLSMTokenCallback {
    return {
      deposit: isSet(object.deposit) ? LSMTokenDeposit.fromJSON(object.deposit) : undefined
    };
  },
  fromPartial(object: Partial<TransferLSMTokenCallback>): TransferLSMTokenCallback {
    const message = createBaseTransferLSMTokenCallback();
    message.deposit = object.deposit !== undefined && object.deposit !== null ? LSMTokenDeposit.fromPartial(object.deposit) : undefined;
    return message;
  },
  fromAmino(object: TransferLSMTokenCallbackAmino): TransferLSMTokenCallback {
    const message = createBaseTransferLSMTokenCallback();
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = LSMTokenDeposit.fromAmino(object.deposit);
    }
    return message;
  },
  toAmino(message: TransferLSMTokenCallback): TransferLSMTokenCallbackAmino {
    const obj: any = {};
    obj.deposit = message.deposit ? LSMTokenDeposit.toAmino(message.deposit) : undefined;
    return obj;
  },
  fromAminoMsg(object: TransferLSMTokenCallbackAminoMsg): TransferLSMTokenCallback {
    return TransferLSMTokenCallback.fromAmino(object.value);
  },
  fromProtoMsg(message: TransferLSMTokenCallbackProtoMsg): TransferLSMTokenCallback {
    return TransferLSMTokenCallback.decode(message.value);
  },
  toProto(message: TransferLSMTokenCallback): Uint8Array {
    return TransferLSMTokenCallback.encode(message).finish();
  },
  toProtoMsg(message: TransferLSMTokenCallback): TransferLSMTokenCallbackProtoMsg {
    return {
      typeUrl: "/stride.records.TransferLSMTokenCallback",
      value: TransferLSMTokenCallback.encode(message).finish()
    };
  }
};