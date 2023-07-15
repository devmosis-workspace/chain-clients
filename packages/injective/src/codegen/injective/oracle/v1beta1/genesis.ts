import { Params, ParamsSDKType, BandPriceState, BandPriceStateSDKType, PriceFeedState, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateSDKType, BandOracleRequest, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsSDKType, ChainlinkPriceState, ChainlinkPriceStateSDKType, PriceRecords, PriceRecordsSDKType, ProviderState, ProviderStateSDKType, PythPriceState, PythPriceStateSDKType } from "./oracle";
import { Long, isSet, bytesFromBase64 } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisState {
  /** params defines all the parameters of related to oracle. */
  params?: Params;
  bandRelayers: string[];
  bandPriceStates: BandPriceState[];
  priceFeedPriceStates: PriceFeedState[];
  coinbasePriceStates: CoinbasePriceState[];
  bandIbcPriceStates: BandPriceState[];
  bandIbcOracleRequests: BandOracleRequest[];
  bandIbcParams?: BandIBCParams;
  bandIbcLatestClientId: Long;
  calldataRecords: CalldataRecord[];
  bandIbcLatestRequestId: Long;
  chainlinkPriceStates: ChainlinkPriceState[];
  historicalPriceRecords: PriceRecords[];
  providerStates: ProviderState[];
  pythPriceStates: PythPriceState[];
}
/** GenesisState defines the oracle module's genesis state. */
export interface GenesisStateSDKType {
  params?: ParamsSDKType;
  band_relayers: string[];
  band_price_states: BandPriceStateSDKType[];
  price_feed_price_states: PriceFeedStateSDKType[];
  coinbase_price_states: CoinbasePriceStateSDKType[];
  band_ibc_price_states: BandPriceStateSDKType[];
  band_ibc_oracle_requests: BandOracleRequestSDKType[];
  band_ibc_params?: BandIBCParamsSDKType;
  band_ibc_latest_client_id: Long;
  calldata_records: CalldataRecordSDKType[];
  band_ibc_latest_request_id: Long;
  chainlink_price_states: ChainlinkPriceStateSDKType[];
  historical_price_records: PriceRecordsSDKType[];
  provider_states: ProviderStateSDKType[];
  pyth_price_states: PythPriceStateSDKType[];
}
export interface CalldataRecord {
  clientId: Long;
  calldata: Uint8Array;
}
export interface CalldataRecordSDKType {
  client_id: Long;
  calldata: Uint8Array;
}
function createBaseGenesisState(): GenesisState {
  return {
    params: undefined,
    bandRelayers: [],
    bandPriceStates: [],
    priceFeedPriceStates: [],
    coinbasePriceStates: [],
    bandIbcPriceStates: [],
    bandIbcOracleRequests: [],
    bandIbcParams: undefined,
    bandIbcLatestClientId: Long.UZERO,
    calldataRecords: [],
    bandIbcLatestRequestId: Long.UZERO,
    chainlinkPriceStates: [],
    historicalPriceRecords: [],
    providerStates: [],
    pythPriceStates: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.bandRelayers) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.bandPriceStates) {
      BandPriceState.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.priceFeedPriceStates) {
      PriceFeedState.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.coinbasePriceStates) {
      CoinbasePriceState.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    for (const v of message.bandIbcPriceStates) {
      BandPriceState.encode(v!, writer.uint32(50).fork()).ldelim();
    }
    for (const v of message.bandIbcOracleRequests) {
      BandOracleRequest.encode(v!, writer.uint32(58).fork()).ldelim();
    }
    if (message.bandIbcParams !== undefined) {
      BandIBCParams.encode(message.bandIbcParams, writer.uint32(66).fork()).ldelim();
    }
    if (!message.bandIbcLatestClientId.isZero()) {
      writer.uint32(72).uint64(message.bandIbcLatestClientId);
    }
    for (const v of message.calldataRecords) {
      CalldataRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (!message.bandIbcLatestRequestId.isZero()) {
      writer.uint32(88).uint64(message.bandIbcLatestRequestId);
    }
    for (const v of message.chainlinkPriceStates) {
      ChainlinkPriceState.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    for (const v of message.historicalPriceRecords) {
      PriceRecords.encode(v!, writer.uint32(106).fork()).ldelim();
    }
    for (const v of message.providerStates) {
      ProviderState.encode(v!, writer.uint32(114).fork()).ldelim();
    }
    for (const v of message.pythPriceStates) {
      PythPriceState.encode(v!, writer.uint32(122).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      bandRelayers: Array.isArray(object?.bandRelayers) ? object.bandRelayers.map((e: any) => String(e)) : [],
      bandPriceStates: Array.isArray(object?.bandPriceStates) ? object.bandPriceStates.map((e: any) => BandPriceState.fromJSON(e)) : [],
      priceFeedPriceStates: Array.isArray(object?.priceFeedPriceStates) ? object.priceFeedPriceStates.map((e: any) => PriceFeedState.fromJSON(e)) : [],
      coinbasePriceStates: Array.isArray(object?.coinbasePriceStates) ? object.coinbasePriceStates.map((e: any) => CoinbasePriceState.fromJSON(e)) : [],
      bandIbcPriceStates: Array.isArray(object?.bandIbcPriceStates) ? object.bandIbcPriceStates.map((e: any) => BandPriceState.fromJSON(e)) : [],
      bandIbcOracleRequests: Array.isArray(object?.bandIbcOracleRequests) ? object.bandIbcOracleRequests.map((e: any) => BandOracleRequest.fromJSON(e)) : [],
      bandIbcParams: isSet(object.bandIbcParams) ? BandIBCParams.fromJSON(object.bandIbcParams) : undefined,
      bandIbcLatestClientId: isSet(object.bandIbcLatestClientId) ? Long.fromValue(object.bandIbcLatestClientId) : Long.UZERO,
      calldataRecords: Array.isArray(object?.calldataRecords) ? object.calldataRecords.map((e: any) => CalldataRecord.fromJSON(e)) : [],
      bandIbcLatestRequestId: isSet(object.bandIbcLatestRequestId) ? Long.fromValue(object.bandIbcLatestRequestId) : Long.UZERO,
      chainlinkPriceStates: Array.isArray(object?.chainlinkPriceStates) ? object.chainlinkPriceStates.map((e: any) => ChainlinkPriceState.fromJSON(e)) : [],
      historicalPriceRecords: Array.isArray(object?.historicalPriceRecords) ? object.historicalPriceRecords.map((e: any) => PriceRecords.fromJSON(e)) : [],
      providerStates: Array.isArray(object?.providerStates) ? object.providerStates.map((e: any) => ProviderState.fromJSON(e)) : [],
      pythPriceStates: Array.isArray(object?.pythPriceStates) ? object.pythPriceStates.map((e: any) => PythPriceState.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    message.bandRelayers = object.bandRelayers?.map(e => e) || [];
    message.bandPriceStates = object.bandPriceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    message.priceFeedPriceStates = object.priceFeedPriceStates?.map(e => PriceFeedState.fromPartial(e)) || [];
    message.coinbasePriceStates = object.coinbasePriceStates?.map(e => CoinbasePriceState.fromPartial(e)) || [];
    message.bandIbcPriceStates = object.bandIbcPriceStates?.map(e => BandPriceState.fromPartial(e)) || [];
    message.bandIbcOracleRequests = object.bandIbcOracleRequests?.map(e => BandOracleRequest.fromPartial(e)) || [];
    message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
    message.bandIbcLatestClientId = object.bandIbcLatestClientId !== undefined && object.bandIbcLatestClientId !== null ? Long.fromValue(object.bandIbcLatestClientId) : Long.UZERO;
    message.calldataRecords = object.calldataRecords?.map(e => CalldataRecord.fromPartial(e)) || [];
    message.bandIbcLatestRequestId = object.bandIbcLatestRequestId !== undefined && object.bandIbcLatestRequestId !== null ? Long.fromValue(object.bandIbcLatestRequestId) : Long.UZERO;
    message.chainlinkPriceStates = object.chainlinkPriceStates?.map(e => ChainlinkPriceState.fromPartial(e)) || [];
    message.historicalPriceRecords = object.historicalPriceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
    message.providerStates = object.providerStates?.map(e => ProviderState.fromPartial(e)) || [];
    message.pythPriceStates = object.pythPriceStates?.map(e => PythPriceState.fromPartial(e)) || [];
    return message;
  }
};
function createBaseCalldataRecord(): CalldataRecord {
  return {
    clientId: Long.UZERO,
    calldata: new Uint8Array()
  };
}
export const CalldataRecord = {
  encode(message: CalldataRecord, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.clientId.isZero()) {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.calldata.length !== 0) {
      writer.uint32(18).bytes(message.calldata);
    }
    return writer;
  },
  fromJSON(object: any): CalldataRecord {
    return {
      clientId: isSet(object.clientId) ? Long.fromValue(object.clientId) : Long.UZERO,
      calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CalldataRecord>): CalldataRecord {
    const message = createBaseCalldataRecord();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? Long.fromValue(object.clientId) : Long.UZERO;
    message.calldata = object.calldata ?? new Uint8Array();
    return message;
  }
};