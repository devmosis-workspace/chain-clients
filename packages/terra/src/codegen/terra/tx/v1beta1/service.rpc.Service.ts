import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ComputeTaxRequest, ComputeTaxResponse } from "./service";
/** Service defines a gRPC service for interacting with transactions. */
export interface Service {
  /** EstimateFee simulates executing a transaction for estimating gas usage. */
  computeTax(request: ComputeTaxRequest): Promise<ComputeTaxResponse>;
}
export class ServiceClientImpl implements Service {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.computeTax = this.computeTax.bind(this);
  }
  computeTax(request: ComputeTaxRequest): Promise<ComputeTaxResponse> {
    const data = ComputeTaxRequest.encode(request).finish();
    const promise = this.rpc.request("terra.tx.v1beta1.Service", "ComputeTax", data);
    return promise.then(data => ComputeTaxResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new ServiceClientImpl(rpc);
  return {
    computeTax(request: ComputeTaxRequest): Promise<ComputeTaxResponse> {
      return queryService.computeTax(request);
    }
  };
};