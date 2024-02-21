import { BinaryWriter } from "../../../binary";
/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have osmo as one of its assets.
 */
export interface FeeToken {
    denom: string;
    poolID: bigint;
}
export interface FeeTokenProtoMsg {
    typeUrl: "/osmosis.txfees.v1beta1.FeeToken";
    value: Uint8Array;
}
/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have osmo as one of its assets.
 */
export interface FeeTokenAmino {
    denom?: string;
    poolID?: string;
}
export interface FeeTokenAminoMsg {
    type: "osmosis/txfees/fee-token";
    value: FeeTokenAmino;
}
/**
 * FeeToken is a struct that specifies a coin denom, and pool ID pair.
 * This marks the token as eligible for use as a tx fee asset in Osmosis.
 * Its price in osmo is derived through looking at the provided pool ID.
 * The pool ID must have osmo as one of its assets.
 */
export interface FeeTokenSDKType {
    denom: string;
    poolID: bigint;
}
export declare const FeeToken: {
    typeUrl: string;
    encode(message: FeeToken, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): FeeToken;
    fromPartial(object: Partial<FeeToken>): FeeToken;
    fromAmino(object: FeeTokenAmino): FeeToken;
    toAmino(message: FeeToken): FeeTokenAmino;
    fromAminoMsg(object: FeeTokenAminoMsg): FeeToken;
    toAminoMsg(message: FeeToken): FeeTokenAminoMsg;
    fromProtoMsg(message: FeeTokenProtoMsg): FeeToken;
    toProto(message: FeeToken): Uint8Array;
    toProtoMsg(message: FeeToken): FeeTokenProtoMsg;
};
