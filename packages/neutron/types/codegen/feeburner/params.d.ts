import * as _m0 from "protobufjs/minimal";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * Defines Neutron denom, which will be burned during fee processing, any
     * other denom will be sent to Treasury
     */
    neutronDenom: string;
    /** Deprecated in v0.4.4. Is not used anymore */
    reserveAddress: string;
    /** Defines treasury address */
    treasuryAddress: string;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    neutron_denom: string;
    reserve_address: string;
    treasury_address: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
