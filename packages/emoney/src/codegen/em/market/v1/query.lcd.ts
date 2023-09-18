import { LCDClient } from "@cosmology/lcd";
import { QueryByAccountRequest, QueryByAccountResponseSDKType, QueryInstrumentsRequest, QueryInstrumentsResponseSDKType, QueryInstrumentRequest, QueryInstrumentResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.byAccount = this.byAccount.bind(this);
    this.instruments = this.instruments.bind(this);
    this.instrument = this.instrument.bind(this);
  }
  /* ByAccount */
  async byAccount(params: QueryByAccountRequest): Promise<QueryByAccountResponseSDKType> {
    const endpoint = `e-money/market/v1/account/${params.address}`;
    return await this.req.get<QueryByAccountResponseSDKType>(endpoint);
  }
  /* Instruments */
  async instruments(_params: QueryInstrumentsRequest = {}): Promise<QueryInstrumentsResponseSDKType> {
    const endpoint = `e-money/market/v1/instruments`;
    return await this.req.get<QueryInstrumentsResponseSDKType>(endpoint);
  }
  /* Instrument */
  async instrument(params: QueryInstrumentRequest): Promise<QueryInstrumentResponseSDKType> {
    const endpoint = `e-money/market/v1/instrument/${params.source}/${params.destination}`;
    return await this.req.get<QueryInstrumentResponseSDKType>(endpoint);
  }
}