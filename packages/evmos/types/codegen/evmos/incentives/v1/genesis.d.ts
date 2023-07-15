import { Incentive, IncentiveSDKType, GasMeter, GasMeterSDKType } from "./incentives";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the incentives module parameters */
    params?: Params;
    /** incentives is a slice of active incentives */
    incentives: Incentive[];
    /** gas_meters is a slice of active Gasmeters */
    gasMeters: GasMeter[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
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
/** Params defines the incentives module params */
export interface ParamsSDKType {
    enable_incentives: boolean;
    allocation_limit: string;
    incentives_epoch_identifier: string;
    reward_scaler: string;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
