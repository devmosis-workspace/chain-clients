import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgRelayProviderPrices, MsgRelayProviderPricesResponse, MsgRelayPriceFeedPrice, MsgRelayPriceFeedPriceResponse, MsgRelayBandRates, MsgRelayBandRatesResponse, MsgRequestBandIBCRates, MsgRequestBandIBCRatesResponse, MsgRelayCoinbaseMessages, MsgRelayCoinbaseMessagesResponse, MsgRelayPythPrices, MsgRelayPythPricesResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the oracle Msg service. */
export interface Msg {
  /**
   * RelayProviderPrice defines a method for relaying a price for a
   * provider-based oracle
   */
  relayProviderPrices(request: MsgRelayProviderPrices): Promise<MsgRelayProviderPricesResponse>;
  /**
   * RelayPriceFeedPrice defines a method for relaying a price for a price
   * feeder-based oracle
   */
  relayPriceFeedPrice(request: MsgRelayPriceFeedPrice): Promise<MsgRelayPriceFeedPriceResponse>;
  /** RelayBandRates defines a method for relaying rates from Band */
  relayBandRates(request: MsgRelayBandRates): Promise<MsgRelayBandRatesResponse>;
  /** RequestBandIBCRates defines a method for fetching rates from Band ibc */
  requestBandIBCRates(request: MsgRequestBandIBCRates): Promise<MsgRequestBandIBCRatesResponse>;
  /**
   * RelayCoinbaseMessages defines a method for relaying price messages from
   * Coinbase API
   */
  relayCoinbaseMessages(request: MsgRelayCoinbaseMessages): Promise<MsgRelayCoinbaseMessagesResponse>;
  /** RelayPythPrices defines a method for relaying rates from the Pyth contract */
  relayPythPrices(request: MsgRelayPythPrices): Promise<MsgRelayPythPricesResponse>;
  /** UpdateParams enables updating oracle module's params via governance */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.relayProviderPrices = this.relayProviderPrices.bind(this);
    this.relayPriceFeedPrice = this.relayPriceFeedPrice.bind(this);
    this.relayBandRates = this.relayBandRates.bind(this);
    this.requestBandIBCRates = this.requestBandIBCRates.bind(this);
    this.relayCoinbaseMessages = this.relayCoinbaseMessages.bind(this);
    this.relayPythPrices = this.relayPythPrices.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  relayProviderPrices(request: MsgRelayProviderPrices): Promise<MsgRelayProviderPricesResponse> {
    const data = MsgRelayProviderPrices.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayProviderPrices", data);
    return promise.then(data => MsgRelayProviderPricesResponse.decode(new _m0.Reader(data)));
  }
  relayPriceFeedPrice(request: MsgRelayPriceFeedPrice): Promise<MsgRelayPriceFeedPriceResponse> {
    const data = MsgRelayPriceFeedPrice.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayPriceFeedPrice", data);
    return promise.then(data => MsgRelayPriceFeedPriceResponse.decode(new _m0.Reader(data)));
  }
  relayBandRates(request: MsgRelayBandRates): Promise<MsgRelayBandRatesResponse> {
    const data = MsgRelayBandRates.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayBandRates", data);
    return promise.then(data => MsgRelayBandRatesResponse.decode(new _m0.Reader(data)));
  }
  requestBandIBCRates(request: MsgRequestBandIBCRates): Promise<MsgRequestBandIBCRatesResponse> {
    const data = MsgRequestBandIBCRates.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RequestBandIBCRates", data);
    return promise.then(data => MsgRequestBandIBCRatesResponse.decode(new _m0.Reader(data)));
  }
  relayCoinbaseMessages(request: MsgRelayCoinbaseMessages): Promise<MsgRelayCoinbaseMessagesResponse> {
    const data = MsgRelayCoinbaseMessages.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayCoinbaseMessages", data);
    return promise.then(data => MsgRelayCoinbaseMessagesResponse.decode(new _m0.Reader(data)));
  }
  relayPythPrices(request: MsgRelayPythPrices): Promise<MsgRelayPythPricesResponse> {
    const data = MsgRelayPythPrices.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "RelayPythPrices", data);
    return promise.then(data => MsgRelayPythPricesResponse.decode(new _m0.Reader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("injective.oracle.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new _m0.Reader(data)));
  }
}