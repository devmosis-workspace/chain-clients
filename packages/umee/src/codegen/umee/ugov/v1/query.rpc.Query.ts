import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { QueryMinGasPrice, QueryMinGasPriceResponse, QueryEmergencyGroup, QueryEmergencyGroupResponse, QueryInflationParams, QueryInflationParamsResponse, QueryInflationCycleEnd, QueryInflationCycleEndResponse } from "./query";
/** Query defines the gRPC querier service. */
export interface Query {
  /** MinGasPrice returns minimum transaction fees. */
  minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse>;
  /** EmergencyGroup returns emergency group address */
  emergencyGroup(request?: QueryEmergencyGroup): Promise<QueryEmergencyGroupResponse>;
  /** InflationParams returns params of inflation reduction rates */
  inflationParams(request?: QueryInflationParams): Promise<QueryInflationParamsResponse>;
  /** InflationCycleEnd returns inflation cycle end time */
  inflationCycleEnd(request?: QueryInflationCycleEnd): Promise<QueryInflationCycleEndResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.minGasPrice = this.minGasPrice.bind(this);
    this.emergencyGroup = this.emergencyGroup.bind(this);
    this.inflationParams = this.inflationParams.bind(this);
    this.inflationCycleEnd = this.inflationCycleEnd.bind(this);
  }
  minGasPrice(request: QueryMinGasPrice = {}): Promise<QueryMinGasPriceResponse> {
    const data = QueryMinGasPrice.encode(request).finish();
    const promise = this.rpc.request("umee.ugov.v1.Query", "MinGasPrice", data);
    return promise.then(data => QueryMinGasPriceResponse.decode(new BinaryReader(data)));
  }
  emergencyGroup(request: QueryEmergencyGroup = {}): Promise<QueryEmergencyGroupResponse> {
    const data = QueryEmergencyGroup.encode(request).finish();
    const promise = this.rpc.request("umee.ugov.v1.Query", "EmergencyGroup", data);
    return promise.then(data => QueryEmergencyGroupResponse.decode(new BinaryReader(data)));
  }
  inflationParams(request: QueryInflationParams = {}): Promise<QueryInflationParamsResponse> {
    const data = QueryInflationParams.encode(request).finish();
    const promise = this.rpc.request("umee.ugov.v1.Query", "InflationParams", data);
    return promise.then(data => QueryInflationParamsResponse.decode(new BinaryReader(data)));
  }
  inflationCycleEnd(request: QueryInflationCycleEnd = {}): Promise<QueryInflationCycleEndResponse> {
    const data = QueryInflationCycleEnd.encode(request).finish();
    const promise = this.rpc.request("umee.ugov.v1.Query", "InflationCycleEnd", data);
    return promise.then(data => QueryInflationCycleEndResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    minGasPrice(request?: QueryMinGasPrice): Promise<QueryMinGasPriceResponse> {
      return queryService.minGasPrice(request);
    },
    emergencyGroup(request?: QueryEmergencyGroup): Promise<QueryEmergencyGroupResponse> {
      return queryService.emergencyGroup(request);
    },
    inflationParams(request?: QueryInflationParams): Promise<QueryInflationParamsResponse> {
      return queryService.inflationParams(request);
    },
    inflationCycleEnd(request?: QueryInflationCycleEnd): Promise<QueryInflationCycleEndResponse> {
      return queryService.inflationCycleEnd(request);
    }
  };
};