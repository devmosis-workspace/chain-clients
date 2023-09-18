import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** EventMinTxFees is emitted when MsgGovUpdateMinFees is correctly executed. */
export interface EventMinTxFees {
  minTxFees: DecCoin[];
}
export interface EventMinTxFeesProtoMsg {
  typeUrl: "/umee.ugov.v1.EventMinTxFees";
  value: Uint8Array;
}
/** EventMinTxFees is emitted when MsgGovUpdateMinFees is correctly executed. */
export interface EventMinTxFeesAmino {
  min_tx_fees: DecCoinAmino[];
}
export interface EventMinTxFeesAminoMsg {
  type: "/umee.ugov.v1.EventMinTxFees";
  value: EventMinTxFeesAmino;
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
  typeUrl: "/umee.ugov.v1.EventMinTxFees",
  encode(message: EventMinTxFees, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: EventMinTxFeesAmino): EventMinTxFees {
    return {
      minTxFees: Array.isArray(object?.min_tx_fees) ? object.min_tx_fees.map((e: any) => DecCoin.fromAmino(e)) : []
    };
  },
  toAmino(message: EventMinTxFees): EventMinTxFeesAmino {
    const obj: any = {};
    if (message.minTxFees) {
      obj.min_tx_fees = message.minTxFees.map(e => e ? DecCoin.toAmino(e) : undefined);
    } else {
      obj.min_tx_fees = [];
    }
    return obj;
  },
  fromAminoMsg(object: EventMinTxFeesAminoMsg): EventMinTxFees {
    return EventMinTxFees.fromAmino(object.value);
  },
  fromProtoMsg(message: EventMinTxFeesProtoMsg): EventMinTxFees {
    return EventMinTxFees.decode(message.value);
  },
  toProto(message: EventMinTxFees): Uint8Array {
    return EventMinTxFees.encode(message).finish();
  },
  toProtoMsg(message: EventMinTxFees): EventMinTxFeesProtoMsg {
    return {
      typeUrl: "/umee.ugov.v1.EventMinTxFees",
      value: EventMinTxFees.encode(message).finish()
    };
  }
};