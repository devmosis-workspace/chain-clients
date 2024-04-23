import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { QueryClient, createProtobufRpcClient } from "@cosmjs/stargate";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponse, StreamByIDRequest, StreamByIDResponse, StreamsRequest, StreamsResponse, ActiveStreamsRequest, ActiveStreamsResponse, UpcomingStreamsRequest, UpcomingStreamsResponse } from "./query";
/** Query defines the gRPC querier service */
export interface Query {
  /** ModuleToDistributeCoins returns coins that are going to be distributed */
  moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse>;
  /** StreamByID returns streams by their respective ID */
  streamByID(request: StreamByIDRequest): Promise<StreamByIDResponse>;
  /** Streams returns both upcoming and active streams */
  streams(request?: StreamsRequest): Promise<StreamsResponse>;
  /** ActiveStreams returns active streams */
  activeStreams(request?: ActiveStreamsRequest): Promise<ActiveStreamsResponse>;
  /** Returns scheduled streams that have not yet occurred */
  upcomingStreams(request?: UpcomingStreamsRequest): Promise<UpcomingStreamsResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
    this.streamByID = this.streamByID.bind(this);
    this.streams = this.streams.bind(this);
    this.activeStreams = this.activeStreams.bind(this);
    this.upcomingStreams = this.upcomingStreams.bind(this);
  }
  moduleToDistributeCoins(request: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponse> {
    const data = ModuleToDistributeCoinsRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.streamer.Query", "ModuleToDistributeCoins", data);
    return promise.then(data => ModuleToDistributeCoinsResponse.decode(new BinaryReader(data)));
  }
  streamByID(request: StreamByIDRequest): Promise<StreamByIDResponse> {
    const data = StreamByIDRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.streamer.Query", "StreamByID", data);
    return promise.then(data => StreamByIDResponse.decode(new BinaryReader(data)));
  }
  streams(request: StreamsRequest = {
    pagination: undefined
  }): Promise<StreamsResponse> {
    const data = StreamsRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.streamer.Query", "Streams", data);
    return promise.then(data => StreamsResponse.decode(new BinaryReader(data)));
  }
  activeStreams(request: ActiveStreamsRequest = {
    pagination: undefined
  }): Promise<ActiveStreamsResponse> {
    const data = ActiveStreamsRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.streamer.Query", "ActiveStreams", data);
    return promise.then(data => ActiveStreamsResponse.decode(new BinaryReader(data)));
  }
  upcomingStreams(request: UpcomingStreamsRequest = {
    pagination: undefined
  }): Promise<UpcomingStreamsResponse> {
    const data = UpcomingStreamsRequest.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.streamer.Query", "UpcomingStreams", data);
    return promise.then(data => UpcomingStreamsResponse.decode(new BinaryReader(data)));
  }
}
export const createRpcQueryExtension = (base: QueryClient) => {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryClientImpl(rpc);
  return {
    moduleToDistributeCoins(request?: ModuleToDistributeCoinsRequest): Promise<ModuleToDistributeCoinsResponse> {
      return queryService.moduleToDistributeCoins(request);
    },
    streamByID(request: StreamByIDRequest): Promise<StreamByIDResponse> {
      return queryService.streamByID(request);
    },
    streams(request?: StreamsRequest): Promise<StreamsResponse> {
      return queryService.streams(request);
    },
    activeStreams(request?: ActiveStreamsRequest): Promise<ActiveStreamsResponse> {
      return queryService.activeStreams(request);
    },
    upcomingStreams(request?: UpcomingStreamsRequest): Promise<UpcomingStreamsResponse> {
      return queryService.upcomingStreams(request);
    }
  };
};