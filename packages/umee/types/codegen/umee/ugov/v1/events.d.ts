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
export declare const EventMinTxFees: {
    typeUrl: string;
    encode(message: EventMinTxFees, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventMinTxFees;
    fromPartial(object: Partial<EventMinTxFees>): EventMinTxFees;
    fromAmino(object: EventMinTxFeesAmino): EventMinTxFees;
    toAmino(message: EventMinTxFees): EventMinTxFeesAmino;
    fromAminoMsg(object: EventMinTxFeesAminoMsg): EventMinTxFees;
    fromProtoMsg(message: EventMinTxFeesProtoMsg): EventMinTxFees;
    toProto(message: EventMinTxFees): Uint8Array;
    toProtoMsg(message: EventMinTxFees): EventMinTxFeesProtoMsg;
};
