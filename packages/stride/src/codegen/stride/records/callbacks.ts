import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallback {
  /** ---------------------- Transfer Callback ---------------------- // */
  depositRecordId: Long;
}
/** ---------------------- Transfer Callback ---------------------- // */
export interface TransferCallbackSDKType {
  deposit_record_id: Long;
}
function createBaseTransferCallback(): TransferCallback {
  return {
    depositRecordId: Long.UZERO
  };
}
export const TransferCallback = {
  encode(message: TransferCallback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.depositRecordId.isZero()) {
      writer.uint32(8).uint64(message.depositRecordId);
    }
    return writer;
  },
  fromJSON(object: any): TransferCallback {
    return {
      depositRecordId: isSet(object.depositRecordId) ? Long.fromValue(object.depositRecordId) : Long.UZERO
    };
  },
  fromPartial(object: Partial<TransferCallback>): TransferCallback {
    const message = createBaseTransferCallback();
    message.depositRecordId = object.depositRecordId !== undefined && object.depositRecordId !== null ? Long.fromValue(object.depositRecordId) : Long.UZERO;
    return message;
  }
};