import { Revenue, RevenueAmino, RevenueSDKType } from "./revenue";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the revenue module parameters */
    params: Params;
    /** revenues is a slice of active registered contracts for fee distribution */
    revenues: Revenue[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/evmos.revenue.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
    /** params are the revenue module parameters */
    params?: ParamsAmino;
    /** revenues is a slice of active registered contracts for fee distribution */
    revenues: RevenueAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/evmos.revenue.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    revenues: RevenueSDKType[];
}
/** Params defines the revenue module params */
export interface Params {
    /** enable_revenue defines a parameter to enable the revenue module */
    enableRevenue: boolean;
    /**
     * developer_shares defines the proportion of the transaction fees to be
     * distributed to the registered contract owner
     */
    developerShares: string;
    /**
     * addr_derivation_cost_create defines the cost of address derivation for
     * verifying the contract deployer at fee registration
     */
    addrDerivationCostCreate: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/evmos.revenue.v1.Params";
    value: Uint8Array;
}
/** Params defines the revenue module params */
export interface ParamsAmino {
    /** enable_revenue defines a parameter to enable the revenue module */
    enable_revenue: boolean;
    /**
     * developer_shares defines the proportion of the transaction fees to be
     * distributed to the registered contract owner
     */
    developer_shares: string;
    /**
     * addr_derivation_cost_create defines the cost of address derivation for
     * verifying the contract deployer at fee registration
     */
    addr_derivation_cost_create: string;
}
export interface ParamsAminoMsg {
    type: "/evmos.revenue.v1.Params";
    value: ParamsAmino;
}
/** Params defines the revenue module params */
export interface ParamsSDKType {
    enable_revenue: boolean;
    developer_shares: string;
    addr_derivation_cost_create: bigint;
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
