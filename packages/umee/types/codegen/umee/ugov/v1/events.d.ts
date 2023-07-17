import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** EventMinTxFees is emitted when MsgGovUpdateMinFees is correctly executed. */
export interface EventMinTxFees {
    minTxFees: DecCoin[];
}
/** EventMinTxFees is emitted when MsgGovUpdateMinFees is correctly executed. */
export interface EventMinTxFeesSDKType {
    min_tx_fees: DecCoinSDKType[];
}
export declare const EventMinTxFees: {
    encode(message: EventMinTxFees, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventMinTxFees;
    fromPartial(object: Partial<EventMinTxFees>): EventMinTxFees;
};
