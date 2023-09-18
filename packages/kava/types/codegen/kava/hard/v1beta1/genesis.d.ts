import { Params, ParamsAmino, ParamsSDKType, Deposit, DepositAmino, DepositSDKType, Borrow, BorrowAmino, BorrowSDKType } from "./hard";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the hard module's genesis state. */
export interface GenesisState {
    params: Params;
    previousAccumulationTimes: GenesisAccumulationTime[];
    deposits: Deposit[];
    borrows: Borrow[];
    totalSupplied: Coin[];
    totalBorrowed: Coin[];
    totalReserves: Coin[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/kava.hard.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the hard module's genesis state. */
export interface GenesisStateAmino {
    params?: ParamsAmino;
    previous_accumulation_times: GenesisAccumulationTimeAmino[];
    deposits: DepositAmino[];
    borrows: BorrowAmino[];
    total_supplied: CoinAmino[];
    total_borrowed: CoinAmino[];
    total_reserves: CoinAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/kava.hard.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the hard module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    previous_accumulation_times: GenesisAccumulationTimeSDKType[];
    deposits: DepositSDKType[];
    borrows: BorrowSDKType[];
    total_supplied: CoinSDKType[];
    total_borrowed: CoinSDKType[];
    total_reserves: CoinSDKType[];
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */
export interface GenesisAccumulationTime {
    collateralType: string;
    previousAccumulationTime: Timestamp;
    supplyInterestFactor: string;
    borrowInterestFactor: string;
}
export interface GenesisAccumulationTimeProtoMsg {
    typeUrl: "/kava.hard.v1beta1.GenesisAccumulationTime";
    value: Uint8Array;
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */
export interface GenesisAccumulationTimeAmino {
    collateral_type: string;
    previous_accumulation_time?: TimestampAmino;
    supply_interest_factor: string;
    borrow_interest_factor: string;
}
export interface GenesisAccumulationTimeAminoMsg {
    type: "/kava.hard.v1beta1.GenesisAccumulationTime";
    value: GenesisAccumulationTimeAmino;
}
/** GenesisAccumulationTime stores the previous distribution time and its corresponding denom. */
export interface GenesisAccumulationTimeSDKType {
    collateral_type: string;
    previous_accumulation_time: TimestampSDKType;
    supply_interest_factor: string;
    borrow_interest_factor: string;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const GenesisAccumulationTime: {
    typeUrl: string;
    encode(message: GenesisAccumulationTime, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisAccumulationTime;
    fromPartial(object: Partial<GenesisAccumulationTime>): GenesisAccumulationTime;
    fromAmino(object: GenesisAccumulationTimeAmino): GenesisAccumulationTime;
    toAmino(message: GenesisAccumulationTime): GenesisAccumulationTimeAmino;
    fromAminoMsg(object: GenesisAccumulationTimeAminoMsg): GenesisAccumulationTime;
    fromProtoMsg(message: GenesisAccumulationTimeProtoMsg): GenesisAccumulationTime;
    toProto(message: GenesisAccumulationTime): Uint8Array;
    toProtoMsg(message: GenesisAccumulationTime): GenesisAccumulationTimeProtoMsg;
};
