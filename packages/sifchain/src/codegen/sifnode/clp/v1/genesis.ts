import { Params, ParamsSDKType } from "./params";
import { Pool, PoolSDKType, LiquidityProvider, LiquidityProviderSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    addressWhitelist: [],
    poolList: [],
    liquidityProviders: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.addressWhitelist) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.poolList) {
      Pool.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.liquidityProviders) {
      LiquidityProvider.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      addressWhitelist: Array.isArray(object?.addressWhitelist) ? object.addressWhitelist.map((e: any) => String(e)) : [],
      poolList: Array.isArray(object?.poolList) ? object.poolList.map((e: any) => Pool.fromJSON(e)) : [],
      liquidityProviders: Array.isArray(object?.liquidityProviders) ? object.liquidityProviders.map((e: any) => LiquidityProvider.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.addressWhitelist = object.addressWhitelist?.map(e => e) || [];
    message.poolList = object.poolList?.map(e => Pool.fromPartial(e)) || [];
    message.liquidityProviders = object.liquidityProviders?.map(e => LiquidityProvider.fromPartial(e)) || [];
    return message;
  }
};