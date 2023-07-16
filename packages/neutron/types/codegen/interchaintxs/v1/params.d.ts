import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    /** Defines maximum amount of messages to be passed in MsgSubmitTx */
    msgSubmitTxMaxMessages: Long;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    msg_submit_tx_max_messages: Long;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
