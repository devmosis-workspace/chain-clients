import { Params, ParamsSDKType, Metadata, MetadataSDKType, SendEnabled, SendEnabledSDKType } from "./bank";
import { Coin, CoinSDKType } from "../../base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the bank module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /** balances is an array containing the balances of all the accounts. */
    balances: Balance[];
    /**
     * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
     * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
     */
    supply: Coin[];
    /** denom_metadata defines the metadata of the different coins. */
    denomMetadata: Metadata[];
    /**
     * send_enabled defines the denoms where send is enabled or disabled.
     *
     * Since: cosmos-sdk 0.47
     */
    sendEnabled: SendEnabled[];
}
/** GenesisState defines the bank module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    balances: BalanceSDKType[];
    supply: CoinSDKType[];
    denom_metadata: MetadataSDKType[];
    send_enabled: SendEnabledSDKType[];
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
