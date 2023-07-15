import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GenesisState defines the bank module's genesis state. */
export interface GenesisState {
  /** params defines all the paramaters of the module. */
  params?: Params;
  /** balances is an array containing the balances of all the accounts. */
  balances: Balance[];
  /**
   * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
   * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
   */
  supply: Coin[];
  /** denom_metadata defines the metadata of the differents coins. */
  denomMetadata: Metadata[];
  /** supply_offsets defines the amount of supply offset. */
  supplyOffsets: GenesisSupplyOffset[];
}
/** GenesisState defines the bank module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  balances: BalanceSDKType[];
  supply: CoinSDKType[];
  denom_metadata: MetadataSDKType[];
  supply_offsets: GenesisSupplyOffsetSDKType[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface Balance {
  /** address is the address of the balance holder. */
  address: string;
  /** coins defines the different coins this balance holds. */
  coins: Coin[];
}
/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 */
export interface BalanceSDKType {
  address: string;
  coins: CoinSDKType[];
}
/**
 * GenesisSupplyOffset encodes the supply offsets, just for genesis.
 * The offsets are serialized directly by denom in state.
 */
export interface GenesisSupplyOffset {
  /** Denom */
  denom: string;
  /** SupplyOffset */
  offset: string;
}
/**
 * GenesisSupplyOffset encodes the supply offsets, just for genesis.
 * The offsets are serialized directly by denom in state.
 */
export interface GenesisSupplyOffsetSDKType {
  denom: string;
  offset: string;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    balances: [],
    supply: [],
    denomMetadata: [],
    supplyOffsets: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.balances) {
      Balance.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.supply) {
      Coin.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.denomMetadata) {
      Metadata.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.supplyOffsets) {
      GenesisSupplyOffset.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      balances: Array.isArray(object?.balances) ? object.balances.map((e: any) => Balance.fromJSON(e)) : [],
      supply: Array.isArray(object?.supply) ? object.supply.map((e: any) => Coin.fromJSON(e)) : [],
      denomMetadata: Array.isArray(object?.denomMetadata) ? object.denomMetadata.map((e: any) => Metadata.fromJSON(e)) : [],
      supplyOffsets: Array.isArray(object?.supplyOffsets) ? object.supplyOffsets.map((e: any) => GenesisSupplyOffset.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.balances = object.balances?.map(e => Balance.fromPartial(e)) || [];
    message.supply = object.supply?.map(e => Coin.fromPartial(e)) || [];
    message.denomMetadata = object.denomMetadata?.map(e => Metadata.fromPartial(e)) || [];
    message.supplyOffsets = object.supplyOffsets?.map(e => GenesisSupplyOffset.fromPartial(e)) || [];
    return message;
  }
};
function createBaseBalance(): Balance {
  return {
    address: "",
    coins: []
  };
}
export const Balance = {
  encode(message: Balance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.coins) {
      Coin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Balance {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      coins: Array.isArray(object?.coins) ? object.coins.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<Balance>): Balance {
    const message = createBaseBalance();
    message.address = object.address ?? "";
    message.coins = object.coins?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseGenesisSupplyOffset(): GenesisSupplyOffset {
  return {
    denom: "",
    offset: ""
  };
}
export const GenesisSupplyOffset = {
  encode(message: GenesisSupplyOffset, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.offset !== "") {
      writer.uint32(18).string(message.offset);
    }
    return writer;
  },
  fromJSON(object: any): GenesisSupplyOffset {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      offset: isSet(object.offset) ? String(object.offset) : ""
    };
  },
  fromPartial(object: Partial<GenesisSupplyOffset>): GenesisSupplyOffset {
    const message = createBaseGenesisSupplyOffset();
    message.denom = object.denom ?? "";
    message.offset = object.offset ?? "";
    return message;
  }
};