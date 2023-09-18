import { Params, ParamsAmino, ParamsSDKType, BandPriceState, BandPriceStateAmino, BandPriceStateSDKType, PriceFeedState, PriceFeedStateAmino, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateAmino, CoinbasePriceStateSDKType, BandOracleRequest, BandOracleRequestAmino, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsAmino, BandIBCParamsSDKType, ChainlinkPriceState, ChainlinkPriceStateAmino, ChainlinkPriceStateSDKType, PriceRecords, PriceRecordsAmino, PriceRecordsSDKType, ProviderState, ProviderStateAmino, ProviderStateSDKType, PythPriceState, PythPriceStateAmino, PythPriceStateSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of related to oracle. */
    params: Params;
    bandRelayers: string[];
    bandPriceStates: BandPriceState[];
    priceFeedPriceStates: PriceFeedState[];
    coinbasePriceStates: CoinbasePriceState[];
    bandIbcPriceStates: BandPriceState[];
    bandIbcOracleRequests: BandOracleRequest[];
    bandIbcParams: BandIBCParams;
    bandIbcLatestClientId: bigint;
    calldataRecords: CalldataRecord[];
    bandIbcLatestRequestId: bigint;
    chainlinkPriceStates: ChainlinkPriceState[];
    historicalPriceRecords: PriceRecords[];
    providerStates: ProviderState[];
    pythPriceStates: PythPriceState[];
}
export interface GenesisStateProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.GenesisState";
    value: Uint8Array;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateAmino {
    /** params defines all the parameters of related to oracle. */
    params?: ParamsAmino;
    band_relayers: string[];
    band_price_states: BandPriceStateAmino[];
    price_feed_price_states: PriceFeedStateAmino[];
    coinbase_price_states: CoinbasePriceStateAmino[];
    band_ibc_price_states: BandPriceStateAmino[];
    band_ibc_oracle_requests: BandOracleRequestAmino[];
    band_ibc_params?: BandIBCParamsAmino;
    band_ibc_latest_client_id: string;
    calldata_records: CalldataRecordAmino[];
    band_ibc_latest_request_id: string;
    chainlink_price_states: ChainlinkPriceStateAmino[];
    historical_price_records: PriceRecordsAmino[];
    provider_states: ProviderStateAmino[];
    pyth_price_states: PythPriceStateAmino[];
}
export interface GenesisStateAminoMsg {
    type: "/injective.oracle.v1beta1.GenesisState";
    value: GenesisStateAmino;
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
    params: ParamsSDKType;
    band_relayers: string[];
    band_price_states: BandPriceStateSDKType[];
    price_feed_price_states: PriceFeedStateSDKType[];
    coinbase_price_states: CoinbasePriceStateSDKType[];
    band_ibc_price_states: BandPriceStateSDKType[];
    band_ibc_oracle_requests: BandOracleRequestSDKType[];
    band_ibc_params: BandIBCParamsSDKType;
    band_ibc_latest_client_id: bigint;
    calldata_records: CalldataRecordSDKType[];
    band_ibc_latest_request_id: bigint;
    chainlink_price_states: ChainlinkPriceStateSDKType[];
    historical_price_records: PriceRecordsSDKType[];
    provider_states: ProviderStateSDKType[];
    pyth_price_states: PythPriceStateSDKType[];
}
export interface CalldataRecord {
    clientId: bigint;
    calldata: Uint8Array;
}
export interface CalldataRecordProtoMsg {
    typeUrl: "/injective.oracle.v1beta1.CalldataRecord";
    value: Uint8Array;
}
export interface CalldataRecordAmino {
    client_id: string;
    calldata: Uint8Array;
}
export interface CalldataRecordAminoMsg {
    type: "/injective.oracle.v1beta1.CalldataRecord";
    value: CalldataRecordAmino;
}
export interface CalldataRecordSDKType {
    client_id: bigint;
    calldata: Uint8Array;
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
export declare const CalldataRecord: {
    typeUrl: string;
    encode(message: CalldataRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CalldataRecord;
    fromPartial(object: Partial<CalldataRecord>): CalldataRecord;
    fromAmino(object: CalldataRecordAmino): CalldataRecord;
    toAmino(message: CalldataRecord): CalldataRecordAmino;
    fromAminoMsg(object: CalldataRecordAminoMsg): CalldataRecord;
    fromProtoMsg(message: CalldataRecordProtoMsg): CalldataRecord;
    toProto(message: CalldataRecord): Uint8Array;
    toProtoMsg(message: CalldataRecord): CalldataRecordProtoMsg;
};
