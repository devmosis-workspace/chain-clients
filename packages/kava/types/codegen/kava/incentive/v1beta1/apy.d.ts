import { BinaryWriter } from "../../../binary";
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface Apy {
    collateralType: string;
    apy: string;
}
export interface ApyProtoMsg {
    typeUrl: "/kava.incentive.v1beta1.Apy";
    value: Uint8Array;
}
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface ApyAmino {
    collateral_type?: string;
    apy?: string;
}
export interface ApyAminoMsg {
    type: "/kava.incentive.v1beta1.Apy";
    value: ApyAmino;
}
/**
 * Apy contains the calculated APY for a given collateral type at a specific
 * instant in time.
 */
export interface ApySDKType {
    collateral_type: string;
    apy: string;
}
export declare const Apy: {
    typeUrl: string;
    encode(message: Apy, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Apy;
    fromPartial(object: Partial<Apy>): Apy;
    fromAmino(object: ApyAmino): Apy;
    toAmino(message: Apy): ApyAmino;
    fromAminoMsg(object: ApyAminoMsg): Apy;
    fromProtoMsg(message: ApyProtoMsg): Apy;
    toProto(message: Apy): Uint8Array;
    toProtoMsg(message: Apy): ApyProtoMsg;
};
