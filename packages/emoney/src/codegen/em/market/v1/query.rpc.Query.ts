import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryByAccountRequest, QueryByAccountResponse, QueryInstrumentsRequest, QueryInstrumentsResponse, QueryInstrumentRequest, QueryInstrumentResponse } from "./query";
export interface Query {
  byAccount(request: QueryByAccountRequest): Promise<QueryByAccountResponse>;
  instruments(request?: QueryInstrumentsRequest): Promise<QueryInstrumentsResponse>;
  instrument(request: QueryInstrumentRequest): Promise<QueryInstrumentResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.byAccount = this.byAccount.bind(this);
    this.instruments = this.instruments.bind(this);
    this.instrument = this.instrument.bind(this);
  }
  byAccount(request: QueryByAccountRequest): Promise<QueryByAccountResponse> {
    const data = QueryByAccountRequest.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Query", "ByAccount", data);
    return promise.then(data => QueryByAccountResponse.decode(new BinaryReader(data)));
  }
  instruments(request: QueryInstrumentsRequest = {}): Promise<QueryInstrumentsResponse> {
    const data = QueryInstrumentsRequest.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Query", "Instruments", data);
    return promise.then(data => QueryInstrumentsResponse.decode(new BinaryReader(data)));
  }
  instrument(request: QueryInstrumentRequest): Promise<QueryInstrumentResponse> {
    const data = QueryInstrumentRequest.encode(request).finish();
    const promise = this.rpc.request("em.market.v1.Query", "Instrument", data);
    return promise.then(data => QueryInstrumentResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    byAccount(request: QueryByAccountRequest): Promise<QueryByAccountResponse> {
      return queryService.byAccount(request);
    },
    instruments(request?: QueryInstrumentsRequest): Promise<QueryInstrumentsResponse> {
      return queryService.instruments(request);
    },
    instrument(request: QueryInstrumentRequest): Promise<QueryInstrumentResponse> {
      return queryService.instrument(request);
    }
  };
};