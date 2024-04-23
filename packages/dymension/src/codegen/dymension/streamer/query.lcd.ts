import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { ModuleToDistributeCoinsRequest, ModuleToDistributeCoinsResponseSDKType, StreamByIDRequest, StreamByIDResponseSDKType, StreamsRequest, StreamsResponseSDKType, ActiveStreamsRequest, ActiveStreamsResponseSDKType, UpcomingStreamsRequest, UpcomingStreamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.moduleToDistributeCoins = this.moduleToDistributeCoins.bind(this);
    this.streamByID = this.streamByID.bind(this);
    this.streams = this.streams.bind(this);
    this.activeStreams = this.activeStreams.bind(this);
    this.upcomingStreams = this.upcomingStreams.bind(this);
  }
  /* ModuleToDistributeCoins returns coins that are going to be distributed */
  async moduleToDistributeCoins(_params: ModuleToDistributeCoinsRequest = {}): Promise<ModuleToDistributeCoinsResponseSDKType> {
    const endpoint = `dymensionxyz/dymension/streamer/module_to_distribute_coins`;
    return await this.req.get<ModuleToDistributeCoinsResponseSDKType>(endpoint);
  }
  /* StreamByID returns streams by their respective ID */
  async streamByID(params: StreamByIDRequest): Promise<StreamByIDResponseSDKType> {
    const endpoint = `dymensionxyz/dymension/streamer/stream_by_id/${params.id}`;
    return await this.req.get<StreamByIDResponseSDKType>(endpoint);
  }
  /* Streams returns both upcoming and active streams */
  async streams(params: StreamsRequest = {
    pagination: undefined
  }): Promise<StreamsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `dymensionxyz/dymension/streamer/streams`;
    return await this.req.get<StreamsResponseSDKType>(endpoint, options);
  }
  /* ActiveStreams returns active streams */
  async activeStreams(params: ActiveStreamsRequest = {
    pagination: undefined
  }): Promise<ActiveStreamsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `dymensionxyz/dymension/streamer/active_streams`;
    return await this.req.get<ActiveStreamsResponseSDKType>(endpoint, options);
  }
  /* Returns scheduled streams that have not yet occurred */
  async upcomingStreams(params: UpcomingStreamsRequest = {
    pagination: undefined
  }): Promise<UpcomingStreamsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `dymensionxyz/dymension/streamer/upcoming_streams`;
    return await this.req.get<UpcomingStreamsResponseSDKType>(endpoint, options);
  }
}