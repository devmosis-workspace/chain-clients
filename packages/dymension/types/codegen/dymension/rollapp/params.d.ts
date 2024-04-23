import { BinaryWriter } from "../../binary";
export interface DeployerParams {
    /**
     * address is a bech32-encoded address of the
     * accounts that are allowed to create a rollapp.
     */
    address: string;
    /** max_rollapps is the maximum number of rollapps that address allowed to deploy */
    maxRollapps: bigint;
}
export interface DeployerParamsProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.DeployerParams";
    value: Uint8Array;
}
export interface DeployerParamsAmino {
    /**
     * address is a bech32-encoded address of the
     * accounts that are allowed to create a rollapp.
     */
    address?: string;
    /** max_rollapps is the maximum number of rollapps that address allowed to deploy */
    max_rollapps?: string;
}
export interface DeployerParamsAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.DeployerParams";
    value: DeployerParamsAmino;
}
export interface DeployerParamsSDKType {
    address: string;
    max_rollapps: bigint;
}
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * dispute_period_in_blocks the number of blocks it takes
     * to change a status of a state from received to finalized.
     * during that period, any user could submit fraud proof
     */
    disputePeriodInBlocks: bigint;
    /**
     * deployer_whitelist is a list of the
     * accounts that are allowed to create a rollapp and maximum number of rollapps.
     * In the case of an empty list, there are no restrictions
     */
    deployerWhitelist: DeployerParams[];
    rollappsEnabled: boolean;
}
export interface ParamsProtoMsg {
    typeUrl: "/dymensionxyz.dymension.rollapp.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /**
     * dispute_period_in_blocks the number of blocks it takes
     * to change a status of a state from received to finalized.
     * during that period, any user could submit fraud proof
     */
    dispute_period_in_blocks?: string;
    /**
     * deployer_whitelist is a list of the
     * accounts that are allowed to create a rollapp and maximum number of rollapps.
     * In the case of an empty list, there are no restrictions
     */
    deployer_whitelist?: DeployerParamsAmino[];
    rollapps_enabled?: boolean;
}
export interface ParamsAminoMsg {
    type: "/dymensionxyz.dymension.rollapp.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    dispute_period_in_blocks: bigint;
    deployer_whitelist: DeployerParamsSDKType[];
    rollapps_enabled: boolean;
}
export declare const DeployerParams: {
    typeUrl: string;
    encode(message: DeployerParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DeployerParams;
    fromPartial(object: Partial<DeployerParams>): DeployerParams;
    fromAmino(object: DeployerParamsAmino): DeployerParams;
    toAmino(message: DeployerParams): DeployerParamsAmino;
    fromAminoMsg(object: DeployerParamsAminoMsg): DeployerParams;
    fromProtoMsg(message: DeployerParamsProtoMsg): DeployerParams;
    toProto(message: DeployerParams): Uint8Array;
    toProtoMsg(message: DeployerParams): DeployerParamsProtoMsg;
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
