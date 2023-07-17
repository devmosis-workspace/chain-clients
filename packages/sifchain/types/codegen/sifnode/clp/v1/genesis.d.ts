import { Params, ParamsSDKType } from "./params";
import { Pool, PoolSDKType, LiquidityProvider, LiquidityProviderSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/**
 * GenesisState - all clp state that must be provided at genesis
 * TODO: Add parameters to Genesis state ,such as minimum liquidity required to
 * create a pool
 */
export interface GenesisState {
    params?: Params;
    addressWhitelist: string[];
    poolList: Pool[];
    liquidityProviders: LiquidityProvider[];
}
/**
 * GenesisState - all clp state that must be provided at genesis
 * TODO: Add parameters to Genesis state ,such as minimum liquidity required to
 * create a pool
 */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    address_whitelist: string[];
    pool_list: PoolSDKType[];
    liquidity_providers: LiquidityProviderSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
