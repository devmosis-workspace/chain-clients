import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallback {
  /** ---------------------- Transfer Callback ---------------------- // */
  depositRecordId: bigint;
}
export interface TransferCallbackProtoMsg {
  typeUrl: "/stride.records.TransferCallback";
  value: Uint8Array;
}
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallbackAmino {
  /** ---------------------- Transfer Callback ---------------------- // */
  deposit_record_id: string;
}
export interface TransferCallbackAminoMsg {
  type: "/stride.records.TransferCallback";
  value: TransferCallbackAmino;
}
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallbackSDKType {
  deposit_record_id: bigint;
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
    return {
      depositRecordId: BigInt(object.deposit_record_id)
    };
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