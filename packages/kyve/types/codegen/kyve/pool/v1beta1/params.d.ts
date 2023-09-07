import * as _m0 from "protobufjs/minimal";
/** Params defines the pool module parameters. */
export interface Params {
    /** protocol_inflation_share ... */
    protocolInflationShare: string;
    /** pool_inflation_payout_rate ... */
    poolInflationPayoutRate: string;
}
/** Params defines the pool module parameters. */
export interface ParamsSDKType {
    protocol_inflation_share: string;
    pool_inflation_payout_rate: string;
}
export declare const Params: {
    encode(message: Params, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
};
