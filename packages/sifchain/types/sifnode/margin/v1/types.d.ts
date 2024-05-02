import { BinaryWriter } from "../../../binary";
export declare enum Position {
    UNSPECIFIED = 0,
    LONG = 1,
    SHORT = 2,
    UNRECOGNIZED = -1
}
export declare const PositionSDKType: typeof Position;
export declare const PositionAmino: typeof Position;
export declare function positionFromJSON(object: any): Position;
export declare function positionToJSON(object: Position): string;
export interface MTP {
    address: string;
    collateralAsset: string;
    collateralAmount: string;
    liabilities: string;
    interestPaidCollateral: string;
    interestPaidCustody: string;
    interestUnpaidCollateral: string;
    custodyAsset: string;
    custodyAmount: string;
    leverage: string;
    mtpHealth: string;
    position: Position;
    id: bigint;
}
export interface MTPProtoMsg {
    typeUrl: "/sifnode.margin.v1.MTP";
    value: Uint8Array;
}
export interface MTPAmino {
    address?: string;
    collateral_asset?: string;
    collateral_amount?: string;
    liabilities?: string;
    interest_paid_collateral?: string;
    interest_paid_custody?: string;
    interest_unpaid_collateral?: string;
    custody_asset?: string;
    custody_amount?: string;
    leverage?: string;
    mtp_health?: string;
    position?: Position;
    id?: string;
}
export interface MTPAminoMsg {
    type: "/sifnode.margin.v1.MTP";
    value: MTPAmino;
}
export interface MTPSDKType {
    address: string;
    collateral_asset: string;
    collateral_amount: string;
    liabilities: string;
    interest_paid_collateral: string;
    interest_paid_custody: string;
    interest_unpaid_collateral: string;
    custody_asset: string;
    custody_amount: string;
    leverage: string;
    mtp_health: string;
    position: Position;
    id: bigint;
}
export declare const MTP: {
    typeUrl: string;
    encode(message: MTP, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MTP;
    fromPartial(object: Partial<MTP>): MTP;
    fromAmino(object: MTPAmino): MTP;
    toAmino(message: MTP): MTPAmino;
    fromAminoMsg(object: MTPAminoMsg): MTP;
    fromProtoMsg(message: MTPProtoMsg): MTP;
    toProto(message: MTP): Uint8Array;
    toProtoMsg(message: MTP): MTPProtoMsg;
};
