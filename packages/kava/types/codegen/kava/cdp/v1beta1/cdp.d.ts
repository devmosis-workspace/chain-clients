import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
/** CDP defines the state of a single collateralized debt position. */
export interface CDP {
    id: bigint;
    owner: Uint8Array;
    type: string;
    collateral: Coin;
    principal: Coin;
    accumulatedFees: Coin;
    feesUpdated: Timestamp;
    interestFactor: string;
}
export interface CDPProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.CDP";
    value: Uint8Array;
}
/** CDP defines the state of a single collateralized debt position. */
export interface CDPAmino {
    id?: string;
    owner?: string;
    type?: string;
    collateral?: CoinAmino;
    principal?: CoinAmino;
    accumulated_fees?: CoinAmino;
    fees_updated?: string;
    interest_factor?: string;
}
export interface CDPAminoMsg {
    type: "/kava.cdp.v1beta1.CDP";
    value: CDPAmino;
}
/** CDP defines the state of a single collateralized debt position. */
export interface CDPSDKType {
    id: bigint;
    owner: Uint8Array;
    type: string;
    collateral: CoinSDKType;
    principal: CoinSDKType;
    accumulated_fees: CoinSDKType;
    fees_updated: TimestampSDKType;
    interest_factor: string;
}
/** Deposit defines an amount of coins deposited by an account to a cdp */
export interface Deposit {
    cdpId: bigint;
    depositor: string;
    amount: Coin;
}
export interface DepositProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.Deposit";
    value: Uint8Array;
}
/** Deposit defines an amount of coins deposited by an account to a cdp */
export interface DepositAmino {
    cdp_id?: string;
    depositor?: string;
    amount?: CoinAmino;
}
export interface DepositAminoMsg {
    type: "/kava.cdp.v1beta1.Deposit";
    value: DepositAmino;
}
/** Deposit defines an amount of coins deposited by an account to a cdp */
export interface DepositSDKType {
    cdp_id: bigint;
    depositor: string;
    amount: CoinSDKType;
}
/** TotalPrincipal defines the total principal of a given collateral type */
export interface TotalPrincipal {
    collateralType: string;
    amount: Coin;
}
export interface TotalPrincipalProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.TotalPrincipal";
    value: Uint8Array;
}
/** TotalPrincipal defines the total principal of a given collateral type */
export interface TotalPrincipalAmino {
    collateral_type?: string;
    amount?: CoinAmino;
}
export interface TotalPrincipalAminoMsg {
    type: "/kava.cdp.v1beta1.TotalPrincipal";
    value: TotalPrincipalAmino;
}
/** TotalPrincipal defines the total principal of a given collateral type */
export interface TotalPrincipalSDKType {
    collateral_type: string;
    amount: CoinSDKType;
}
/** TotalCollateral defines the total collateral of a given collateral type */
export interface TotalCollateral {
    collateralType: string;
    amount: Coin;
}
export interface TotalCollateralProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.TotalCollateral";
    value: Uint8Array;
}
/** TotalCollateral defines the total collateral of a given collateral type */
export interface TotalCollateralAmino {
    collateral_type?: string;
    amount?: CoinAmino;
}
export interface TotalCollateralAminoMsg {
    type: "/kava.cdp.v1beta1.TotalCollateral";
    value: TotalCollateralAmino;
}
/** TotalCollateral defines the total collateral of a given collateral type */
export interface TotalCollateralSDKType {
    collateral_type: string;
    amount: CoinSDKType;
}
/** OwnerCDPIndex defines the cdp ids for a single cdp owner */
export interface OwnerCDPIndex {
    cdpIds: bigint[];
}
export interface OwnerCDPIndexProtoMsg {
    typeUrl: "/kava.cdp.v1beta1.OwnerCDPIndex";
    value: Uint8Array;
}
/** OwnerCDPIndex defines the cdp ids for a single cdp owner */
export interface OwnerCDPIndexAmino {
    cdp_ids?: string[];
}
export interface OwnerCDPIndexAminoMsg {
    type: "/kava.cdp.v1beta1.OwnerCDPIndex";
    value: OwnerCDPIndexAmino;
}
/** OwnerCDPIndex defines the cdp ids for a single cdp owner */
export interface OwnerCDPIndexSDKType {
    cdp_ids: bigint[];
}
export declare const CDP: {
    typeUrl: string;
    encode(message: CDP, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CDP;
    fromPartial(object: Partial<CDP>): CDP;
    fromAmino(object: CDPAmino): CDP;
    toAmino(message: CDP): CDPAmino;
    fromAminoMsg(object: CDPAminoMsg): CDP;
    fromProtoMsg(message: CDPProtoMsg): CDP;
    toProto(message: CDP): Uint8Array;
    toProtoMsg(message: CDP): CDPProtoMsg;
};
export declare const Deposit: {
    typeUrl: string;
    encode(message: Deposit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Deposit;
    fromPartial(object: Partial<Deposit>): Deposit;
    fromAmino(object: DepositAmino): Deposit;
    toAmino(message: Deposit): DepositAmino;
    fromAminoMsg(object: DepositAminoMsg): Deposit;
    fromProtoMsg(message: DepositProtoMsg): Deposit;
    toProto(message: Deposit): Uint8Array;
    toProtoMsg(message: Deposit): DepositProtoMsg;
};
export declare const TotalPrincipal: {
    typeUrl: string;
    encode(message: TotalPrincipal, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TotalPrincipal;
    fromPartial(object: Partial<TotalPrincipal>): TotalPrincipal;
    fromAmino(object: TotalPrincipalAmino): TotalPrincipal;
    toAmino(message: TotalPrincipal): TotalPrincipalAmino;
    fromAminoMsg(object: TotalPrincipalAminoMsg): TotalPrincipal;
    fromProtoMsg(message: TotalPrincipalProtoMsg): TotalPrincipal;
    toProto(message: TotalPrincipal): Uint8Array;
    toProtoMsg(message: TotalPrincipal): TotalPrincipalProtoMsg;
};
export declare const TotalCollateral: {
    typeUrl: string;
    encode(message: TotalCollateral, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): TotalCollateral;
    fromPartial(object: Partial<TotalCollateral>): TotalCollateral;
    fromAmino(object: TotalCollateralAmino): TotalCollateral;
    toAmino(message: TotalCollateral): TotalCollateralAmino;
    fromAminoMsg(object: TotalCollateralAminoMsg): TotalCollateral;
    fromProtoMsg(message: TotalCollateralProtoMsg): TotalCollateral;
    toProto(message: TotalCollateral): Uint8Array;
    toProtoMsg(message: TotalCollateral): TotalCollateralProtoMsg;
};
export declare const OwnerCDPIndex: {
    typeUrl: string;
    encode(message: OwnerCDPIndex, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): OwnerCDPIndex;
    fromPartial(object: Partial<OwnerCDPIndex>): OwnerCDPIndex;
    fromAmino(object: OwnerCDPIndexAmino): OwnerCDPIndex;
    toAmino(message: OwnerCDPIndex): OwnerCDPIndexAmino;
    fromAminoMsg(object: OwnerCDPIndexAminoMsg): OwnerCDPIndex;
    fromProtoMsg(message: OwnerCDPIndexProtoMsg): OwnerCDPIndex;
    toProto(message: OwnerCDPIndex): Uint8Array;
    toProtoMsg(message: OwnerCDPIndex): OwnerCDPIndexProtoMsg;
};
