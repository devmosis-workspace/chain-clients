import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { RecoveredSinceDowntimeOfLengthRequest, RecoveredSinceDowntimeOfLengthResponse } from "./query";
export interface Query {
  recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.recoveredSinceDowntimeOfLength = this.recoveredSinceDowntimeOfLength.bind(this);
  }
  recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse> {
    const data = RecoveredSinceDowntimeOfLengthRequest.encode(request).finish();
    const promise = this.rpc.request("osmosis.downtimedetector.v1beta1.Query", "RecoveredSinceDowntimeOfLength", data);
    return promise.then(data => RecoveredSinceDowntimeOfLengthResponse.decode(new _m0.Reader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    recoveredSinceDowntimeOfLength(request: RecoveredSinceDowntimeOfLengthRequest): Promise<RecoveredSinceDowntimeOfLengthResponse> {
      return queryService.recoveredSinceDowntimeOfLength(request);
    }
  };
};