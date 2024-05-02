import { FeeShare, FeeShareAmino, FeeShareSDKType } from "./feeshare";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the feeshare module parameters */
    params: Params;
    /** FeeShare is a slice of active registered contracts for fee distribution */
    feeShare: FeeShare[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/juno.feeshare.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
    /** params are the feeshare module parameters */
    params?: ParamsAmino;
    /** FeeShare is a slice of active registered contracts for fee distribution */
    fee_share?: FeeShareAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/juno.feeshare.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    fee_share: FeeShareSDKType[];
}
/** Params defines the feeshare module params */
export interface Params {
    /** enable_feeshare defines a parameter to enable the feeshare module */
    enableFeeShare: boolean;
    /**
     * developer_shares defines the proportion of the transaction fees to be
     * distributed to the registered contract owner
     */
    developerShares: string;
    /**
     * allowed_denoms defines the list of denoms that are allowed to be paid to
     * the contract withdraw addresses. If said denom is not in the list, the fees
     * will ONLY be sent to the community pool.
     * If this list is empty, all denoms are allowed.
     */
    allowedDenoms: string[];
}
export interface ParamsProtoMsg {
    typeUrl: "/juno.feeshare.v1.Params";
    value: Uint8Array;
}
/** Params defines the feeshare module params */
export interface ParamsAmino {
    /** enable_feeshare defines a parameter to enable the feeshare module */
    enable_fee_share?: boolean;
    /**
     * developer_shares defines the proportion of the transaction fees to be
     * distributed to the registered contract owner
     */
    developer_shares?: string;
    /**
     * allowed_denoms defines the list of denoms that are allowed to be paid to
     * the contract withdraw addresses. If said denom is not in the list, the fees
     * will ONLY be sent to the community pool.
     * If this list is empty, all denoms are allowed.
     */
    allowed_denoms?: string[];
}
export interface ParamsAminoMsg {
    type: "/juno.feeshare.v1.Params";
    value: ParamsAmino;
}
/** Params defines the feeshare module params */
export interface ParamsSDKType {
    enable_fee_share: boolean;
    developer_shares: string;
    allowed_denoms: string[];
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
