import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** GenesisState - initial state of module */
export interface GenesisState {
    /** Params of this module */
    params: Params;
}
export interface GenesisStateProtoMsg {
    typeUrl: "/OmniFlix.globalfee.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState - initial state of module */
export interface GenesisStateAmino {
    /** Params of this module */
    params?: ParamsAmino;
}
export interface GenesisStateAminoMsg {
    type: "/OmniFlix.globalfee.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState - initial state of module */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
}
/** Params defines the set of module parameters. */
export interface Params {
    /**
     * minimum_gas_prices stores the minimum gas price(s) for all TX on the chain.
     * When multiple coins are defined then they are accepted alternatively.
     * The list must be sorted by denoms asc. No duplicate denoms or zero amount
     * values allowed. For more information see
     * https://docs.cosmos.network/main/modules/auth#concepts
     */
    minimumGasPrices: DecCoin[];
    /**
     * bypass_min_fee_msg_types defines a list of message type urls
     * that are free of fee charge.
     */
    bypassMinFeeMsgTypes: string[];
    /**
     * max_total_bypass_min_fee_msg_gas_usage defines the total maximum gas usage
     * allowed for a transaction containing only messages of types in bypass_min_fee_msg_types
     * to bypass fee charge.
     */
    maxTotalBypassMinFeeMsgGasUsage: bigint;
}
export interface ParamsProtoMsg {
    typeUrl: "/OmniFlix.globalfee.v1beta1.Params";
    value: Uint8Array;
}
/** Params defines the set of module parameters. */
export interface ParamsAmino {
    /**
     * minimum_gas_prices stores the minimum gas price(s) for all TX on the chain.
     * When multiple coins are defined then they are accepted alternatively.
     * The list must be sorted by denoms asc. No duplicate denoms or zero amount
     * values allowed. For more information see
     * https://docs.cosmos.network/main/modules/auth#concepts
     */
    minimum_gas_prices?: DecCoinAmino[];
    /**
     * bypass_min_fee_msg_types defines a list of message type urls
     * that are free of fee charge.
     */
    bypass_min_fee_msg_types?: string[];
    /**
     * max_total_bypass_min_fee_msg_gas_usage defines the total maximum gas usage
     * allowed for a transaction containing only messages of types in bypass_min_fee_msg_types
     * to bypass fee charge.
     */
    max_total_bypass_min_fee_msg_gas_usage?: string;
}
export interface ParamsAminoMsg {
    type: "/OmniFlix.globalfee.v1beta1.Params";
    value: ParamsAmino;
}
/** Params defines the set of module parameters. */
export interface ParamsSDKType {
    minimum_gas_prices: DecCoinSDKType[];
    bypass_min_fee_msg_types: string[];
    max_total_bypass_min_fee_msg_gas_usage: bigint;
}
export declare const GenesisState: {
    typeUrl: string;
    encode(message: GenesisState, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
    fromAmino(object: GenesisStateAmino): GenesisState;
    toAmino(message: GenesisState): GenesisStateAmino;
    fromAminoMsg(object: GenesisStateAminoMsg): GenesisState;
    fromProtoMsg(message: GenesisStateProtoMsg): GenesisState;
    toProto(message: GenesisState): Uint8Array;
    toProtoMsg(message: GenesisState): GenesisStateProtoMsg;
};
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
