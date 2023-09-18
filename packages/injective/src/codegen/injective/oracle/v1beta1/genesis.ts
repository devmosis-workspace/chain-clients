import { Params, ParamsAmino, ParamsSDKType, BandPriceState, BandPriceStateAmino, BandPriceStateSDKType, PriceFeedState, PriceFeedStateAmino, PriceFeedStateSDKType, CoinbasePriceState, CoinbasePriceStateAmino, CoinbasePriceStateSDKType, BandOracleRequest, BandOracleRequestAmino, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsAmino, BandIBCParamsSDKType, ChainlinkPriceState, ChainlinkPriceStateAmino, ChainlinkPriceStateSDKType, PriceRecords, PriceRecordsAmino, PriceRecordsSDKType, ProviderState, ProviderStateAmino, ProviderStateSDKType, PythPriceState, PythPriceStateAmino, PythPriceStateSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64 } from "../../../helpers";
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
function createBaseGenesisState(): GenesisState {
  return {
    params: Params.fromPartial({}),
    bandRelayers: [],
    bandPriceStates: [],
    priceFeedPriceStates: [],
    coinbasePriceStates: [],
    bandIbcPriceStates: [],
    bandIbcOracleRequests: [],
    bandIbcParams: BandIBCParams.fromPartial({}),
    bandIbcLatestClientId: BigInt(0),
    calldataRecords: [],
    bandIbcLatestRequestId: BigInt(0),
    chainlinkPriceStates: [],
    historicalPriceRecords: [],
    providerStates: [],
    pythPriceStates: []
  };
}
export const GenesisState = {
  typeUrl: "/injective.oracle.v1beta1.GenesisState",
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
    if (message.bandIbcLatestClientId !== BigInt(0)) {
      writer.uint32(72).uint64(message.bandIbcLatestClientId);
    }
    for (const v of message.calldataRecords) {
      CalldataRecord.encode(v!, writer.uint32(82).fork()).ldelim();
    }
    if (message.bandIbcLatestRequestId !== BigInt(0)) {
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
      bandIbcLatestClientId: isSet(object.bandIbcLatestClientId) ? BigInt(object.bandIbcLatestClientId.toString()) : BigInt(0),
      calldataRecords: Array.isArray(object?.calldataRecords) ? object.calldataRecords.map((e: any) => CalldataRecord.fromJSON(e)) : [],
      bandIbcLatestRequestId: isSet(object.bandIbcLatestRequestId) ? BigInt(object.bandIbcLatestRequestId.toString()) : BigInt(0),
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
    message.bandIbcLatestClientId = object.bandIbcLatestClientId !== undefined && object.bandIbcLatestClientId !== null ? BigInt(object.bandIbcLatestClientId.toString()) : BigInt(0);
    message.calldataRecords = object.calldataRecords?.map(e => CalldataRecord.fromPartial(e)) || [];
    message.bandIbcLatestRequestId = object.bandIbcLatestRequestId !== undefined && object.bandIbcLatestRequestId !== null ? BigInt(object.bandIbcLatestRequestId.toString()) : BigInt(0);
    message.chainlinkPriceStates = object.chainlinkPriceStates?.map(e => ChainlinkPriceState.fromPartial(e)) || [];
    message.historicalPriceRecords = object.historicalPriceRecords?.map(e => PriceRecords.fromPartial(e)) || [];
    message.providerStates = object.providerStates?.map(e => ProviderState.fromPartial(e)) || [];
    message.pythPriceStates = object.pythPriceStates?.map(e => PythPriceState.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    return {
      params: object?.params ? Params.fromAmino(object.params) : undefined,
      bandRelayers: Array.isArray(object?.band_relayers) ? object.band_relayers.map((e: any) => e) : [],
      bandPriceStates: Array.isArray(object?.band_price_states) ? object.band_price_states.map((e: any) => BandPriceState.fromAmino(e)) : [],
      priceFeedPriceStates: Array.isArray(object?.price_feed_price_states) ? object.price_feed_price_states.map((e: any) => PriceFeedState.fromAmino(e)) : [],
      coinbasePriceStates: Array.isArray(object?.coinbase_price_states) ? object.coinbase_price_states.map((e: any) => CoinbasePriceState.fromAmino(e)) : [],
      bandIbcPriceStates: Array.isArray(object?.band_ibc_price_states) ? object.band_ibc_price_states.map((e: any) => BandPriceState.fromAmino(e)) : [],
      bandIbcOracleRequests: Array.isArray(object?.band_ibc_oracle_requests) ? object.band_ibc_oracle_requests.map((e: any) => BandOracleRequest.fromAmino(e)) : [],
      bandIbcParams: object?.band_ibc_params ? BandIBCParams.fromAmino(object.band_ibc_params) : undefined,
      bandIbcLatestClientId: BigInt(object.band_ibc_latest_client_id),
      calldataRecords: Array.isArray(object?.calldata_records) ? object.calldata_records.map((e: any) => CalldataRecord.fromAmino(e)) : [],
      bandIbcLatestRequestId: BigInt(object.band_ibc_latest_request_id),
      chainlinkPriceStates: Array.isArray(object?.chainlink_price_states) ? object.chainlink_price_states.map((e: any) => ChainlinkPriceState.fromAmino(e)) : [],
      historicalPriceRecords: Array.isArray(object?.historical_price_records) ? object.historical_price_records.map((e: any) => PriceRecords.fromAmino(e)) : [],
      providerStates: Array.isArray(object?.provider_states) ? object.provider_states.map((e: any) => ProviderState.fromAmino(e)) : [],
      pythPriceStates: Array.isArray(object?.pyth_price_states) ? object.pyth_price_states.map((e: any) => PythPriceState.fromAmino(e)) : []
    };
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    if (message.bandRelayers) {
      obj.band_relayers = message.bandRelayers.map(e => e);
    } else {
      obj.band_relayers = [];
    }
    if (message.bandPriceStates) {
      obj.band_price_states = message.bandPriceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
    } else {
      obj.band_price_states = [];
    }
    if (message.priceFeedPriceStates) {
      obj.price_feed_price_states = message.priceFeedPriceStates.map(e => e ? PriceFeedState.toAmino(e) : undefined);
    } else {
      obj.price_feed_price_states = [];
    }
    if (message.coinbasePriceStates) {
      obj.coinbase_price_states = message.coinbasePriceStates.map(e => e ? CoinbasePriceState.toAmino(e) : undefined);
    } else {
      obj.coinbase_price_states = [];
    }
    if (message.bandIbcPriceStates) {
      obj.band_ibc_price_states = message.bandIbcPriceStates.map(e => e ? BandPriceState.toAmino(e) : undefined);
    } else {
      obj.band_ibc_price_states = [];
    }
    if (message.bandIbcOracleRequests) {
      obj.band_ibc_oracle_requests = message.bandIbcOracleRequests.map(e => e ? BandOracleRequest.toAmino(e) : undefined);
    } else {
      obj.band_ibc_oracle_requests = [];
    }
    obj.band_ibc_params = message.bandIbcParams ? BandIBCParams.toAmino(message.bandIbcParams) : undefined;
    obj.band_ibc_latest_client_id = message.bandIbcLatestClientId ? message.bandIbcLatestClientId.toString() : undefined;
    if (message.calldataRecords) {
      obj.calldata_records = message.calldataRecords.map(e => e ? CalldataRecord.toAmino(e) : undefined);
    } else {
      obj.calldata_records = [];
    }
    obj.band_ibc_latest_request_id = message.bandIbcLatestRequestId ? message.bandIbcLatestRequestId.toString() : undefined;
    if (message.chainlinkPriceStates) {
      obj.chainlink_price_states = message.chainlinkPriceStates.map(e => e ? ChainlinkPriceState.toAmino(e) : undefined);
    } else {
      obj.chainlink_price_states = [];
    }
    if (message.historicalPriceRecords) {
      obj.historical_price_records = message.historicalPriceRecords.map(e => e ? PriceRecords.toAmino(e) : undefined);
    } else {
      obj.historical_price_records = [];
    }
    if (message.providerStates) {
      obj.provider_states = message.providerStates.map(e => e ? ProviderState.toAmino(e) : undefined);
    } else {
      obj.provider_states = [];
    }
    if (message.pythPriceStates) {
      obj.pyth_price_states = message.pythPriceStates.map(e => e ? PythPriceState.toAmino(e) : undefined);
    } else {
      obj.pyth_price_states = [];
    }
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
function createBaseCalldataRecord(): CalldataRecord {
  return {
    clientId: BigInt(0),
    calldata: new Uint8Array()
  };
}
export const CalldataRecord = {
  typeUrl: "/injective.oracle.v1beta1.CalldataRecord",
  encode(message: CalldataRecord, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientId !== BigInt(0)) {
      writer.uint32(8).uint64(message.clientId);
    }
    if (message.calldata.length !== 0) {
      writer.uint32(18).bytes(message.calldata);
    }
    return writer;
  },
  fromJSON(object: any): CalldataRecord {
    return {
      clientId: isSet(object.clientId) ? BigInt(object.clientId.toString()) : BigInt(0),
      calldata: isSet(object.calldata) ? bytesFromBase64(object.calldata) : new Uint8Array()
    };
  },
  fromPartial(object: Partial<CalldataRecord>): CalldataRecord {
    const message = createBaseCalldataRecord();
    message.clientId = object.clientId !== undefined && object.clientId !== null ? BigInt(object.clientId.toString()) : BigInt(0);
    message.calldata = object.calldata ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CalldataRecordAmino): CalldataRecord {
    return {
      clientId: BigInt(object.client_id),
      calldata: object.calldata
    };
  },
  toAmino(message: CalldataRecord): CalldataRecordAmino {
    const obj: any = {};
    obj.client_id = message.clientId ? message.clientId.toString() : undefined;
    obj.calldata = message.calldata;
    return obj;
  },
  fromAminoMsg(object: CalldataRecordAminoMsg): CalldataRecord {
    return CalldataRecord.fromAmino(object.value);
  },
  fromProtoMsg(message: CalldataRecordProtoMsg): CalldataRecord {
    return CalldataRecord.decode(message.value);
  },
  toProto(message: CalldataRecord): Uint8Array {
    return CalldataRecord.encode(message).finish();
  },
  toProtoMsg(message: CalldataRecord): CalldataRecordProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.CalldataRecord",
      value: CalldataRecord.encode(message).finish()
    };
  }
};