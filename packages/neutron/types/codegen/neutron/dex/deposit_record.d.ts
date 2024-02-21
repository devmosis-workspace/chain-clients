import { PairID, PairIDAmino, PairIDSDKType } from "./pair_id";
import { BinaryWriter } from "../../binary";
export interface DepositRecord {
    pairId?: PairID;
    sharesOwned: string;
    centerTickIndex: bigint;
    lowerTickIndex: bigint;
    upperTickIndex: bigint;
    fee: bigint;
}
export interface DepositRecordProtoMsg {
    typeUrl: "/neutron.dex.DepositRecord";
    value: Uint8Array;
}
export interface DepositRecordAmino {
    pair_id?: PairIDAmino;
    shares_owned?: string;
    center_tick_index?: string;
    lower_tick_index?: string;
    upper_tick_index?: string;
    fee?: string;
}
export interface DepositRecordAminoMsg {
    type: "/neutron.dex.DepositRecord";
    value: DepositRecordAmino;
}
export interface DepositRecordSDKType {
    pair_id?: PairIDSDKType;
    shares_owned: string;
    center_tick_index: bigint;
    lower_tick_index: bigint;
    upper_tick_index: bigint;
    fee: bigint;
}
export declare const DepositRecord: {
    typeUrl: string;
    encode(message: DepositRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DepositRecord;
    fromPartial(object: Partial<DepositRecord>): DepositRecord;
    fromAmino(object: DepositRecordAmino): DepositRecord;
    toAmino(message: DepositRecord): DepositRecordAmino;
    fromAminoMsg(object: DepositRecordAminoMsg): DepositRecord;
    fromProtoMsg(message: DepositRecordProtoMsg): DepositRecord;
    toProto(message: DepositRecord): Uint8Array;
    toProtoMsg(message: DepositRecord): DepositRecordProtoMsg;
};
