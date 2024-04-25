import { BinaryWriter } from "../../../binary";
/** Params defines the funders module parameters. */
export interface Params {
    /** Minimum amount of tokens that can be funded. */
    minFundingAmount: bigint;
    /** Minimum amount of tokens that can be funded per bundle. */
    minFundingAmountPerBundle: bigint;
    /**
     * Minimum ratio between the funded amount and the amount_per_bundle.
     * In other words this param ensures, that a funder provides at least funding for
     * `min_funding_multiple` bundles.
     */
    minFundingMultiple: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/kyve.funders.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the funders module parameters. */
export interface ParamsAmino {
    /** Minimum amount of tokens that can be funded. */
    min_funding_amount?: string;
    /** Minimum amount of tokens that can be funded per bundle. */
    min_funding_amount_per_bundle?: string;
    /**
     * Minimum ratio between the funded amount and the amount_per_bundle.
     * In other words this param ensures, that a funder provides at least funding for
     * `min_funding_multiple` bundles.
     */
    min_funding_multiple?: string;
}
export interface ParamsAminoMsg {
    type: "/kyve.funders.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the funders module parameters. */
export interface ParamsSDKType {
    min_funding_amount: bigint;
    min_funding_amount_per_bundle: bigint;
    min_funding_multiple: bigint;
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
