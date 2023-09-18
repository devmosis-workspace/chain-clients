import { Incentive, IncentiveAmino, IncentiveSDKType, GasMeter, GasMeterAmino, GasMeterSDKType } from "./incentives";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the incentives module parameters */
    params: Params;
    /** incentives is a slice of active incentives */
    incentives: Incentive[];
    /** gas_meters is a slice of active Gasmeters */
    gasMeters: GasMeter[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/evmos.incentives.v1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateAmino {
    /** params are the incentives module parameters */
    params?: ParamsAmino;
    /** incentives is a slice of active incentives */
    incentives: IncentiveAmino[];
    /** gas_meters is a slice of active Gasmeters */
    gas_meters: GasMeterAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/evmos.incentives.v1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    incentives: IncentiveSDKType[];
    gas_meters: GasMeterSDKType[];
}
/** Params defines the incentives module params */
export interface Params {
    /** enable_incentives is the parameter to enable incentives */
    enableIncentives: boolean;
    /** allocation_limit is the maximum percentage an incentive can allocate per denomination */
    allocationLimit: string;
    /** incentives_epoch_identifier for the epochs module hooks */
    incentivesEpochIdentifier: string;
    /** reward_scaler is the scaling factor for capping rewards */
    rewardScaler: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/evmos.incentives.v1.Params";
    value: Uint8Array;
}
/** Params defines the incentives module params */
export interface ParamsAmino {
    /** enable_incentives is the parameter to enable incentives */
    enable_incentives: boolean;
    /** allocation_limit is the maximum percentage an incentive can allocate per denomination */
    allocation_limit: string;
    /** incentives_epoch_identifier for the epochs module hooks */
    incentives_epoch_identifier: string;
    /** reward_scaler is the scaling factor for capping rewards */
    reward_scaler: string;
}
export interface ParamsAminoMsg {
    type: "/evmos.incentives.v1.Params";
    value: ParamsAmino;
}
/** Params defines the incentives module params */
export interface ParamsSDKType {
    enable_incentives: boolean;
    allocation_limit: string;
    incentives_epoch_identifier: string;
    reward_scaler: string;
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
