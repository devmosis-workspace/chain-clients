import * as _m0 from "protobufjs/minimal";
/** Params represent the genesis parameters for the module */
export interface Params {
    externalChainVotingInflationRate: Uint8Array;
    keyMgmtRelativeInflationRate: Uint8Array;
}
/** Params represent the genesis parameters for the module */
export interface ParamsSDKType {
    external_chain_voting_inflation_rate: Uint8Array;
    key_mgmt_relative_inflation_rate: Uint8Array;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
