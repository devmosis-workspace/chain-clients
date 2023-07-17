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
function createBaseEventMinTxFees(): EventMinTxFees {
  return {
    minTxFees: []
  };
}
export const EventMinTxFees = {
  encode(message: EventMinTxFees, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.minTxFees) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EventMinTxFees {
    return {
      minTxFees: Array.isArray(object?.minTxFees) ? object.minTxFees.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<EventMinTxFees>): EventMinTxFees {
    const message = createBaseEventMinTxFees();
    message.minTxFees = object.minTxFees?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};