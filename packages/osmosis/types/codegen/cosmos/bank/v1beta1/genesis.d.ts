import { Params, ParamsSDKType, Metadata, MetadataSDKType } from "./bank";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
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
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const Balance: {
    encode(message: Balance, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Balance;
    fromPartial(object: Partial<Balance>): Balance;
};
export declare const GenesisSupplyOffset: {
    encode(message: GenesisSupplyOffset, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisSupplyOffset;
    fromPartial(object: Partial<GenesisSupplyOffset>): GenesisSupplyOffset;
};
