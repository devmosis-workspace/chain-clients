import { Long } from "../../helpers";
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
export declare const TransferCallback: {
    encode(message: TransferCallback, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): TransferCallback;
    fromPartial(object: Partial<TransferCallback>): TransferCallback;
};
