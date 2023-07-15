import { Revenue, RevenueSDKType } from "./revenue";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the module's genesis state. */
export interface GenesisState {
    /** params are the revenue module parameters */
    params?: Params;
    /** revenues is a slice of active registered contracts for fee distribution */
    revenues: Revenue[];
}
/** GenesisState defines the module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
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
    addrDerivationCostCreate: Long;
}
/** Params defines the revenue module params */
export interface ParamsSDKType {
    enable_revenue: boolean;
    developer_shares: string;
    addr_derivation_cost_create: Long;
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
