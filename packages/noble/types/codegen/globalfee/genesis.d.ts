import { DecCoin, DecCoinSDKType } from "../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** GenesisState - initial state of module */
export interface GenesisState {
    /** Params of this module */
    params?: Params;
}
/** GenesisState - initial state of module */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
}
/** Params defines the set of module parameters. */
export interface Params {
    /**
     * Minimum stores the minimum gas price(s) for all TX on the chain.
     * When multiple coins are defined then they are accepted alternatively.
     * The list must be sorted by denoms asc. No duplicate denoms or zero amount
     * values allowed. For more information see
     * https://docs.cosmos.network/main/modules/auth#concepts
     */
    minimumGasPrices: DecCoin[];
    bypassMinFeeMsgTypes: string[];
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
    minimum_gas_prices: DecCoinSDKType[];
    bypass_min_fee_msg_types: string[];
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
