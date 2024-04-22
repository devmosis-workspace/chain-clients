import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCellarIDsRequest, QueryCellarIDsResponseSDKType, QueryScheduledCorksRequest, QueryScheduledCorksResponseSDKType, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponseSDKType, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponseSDKType, QueryScheduledCorksByIDRequest, QueryScheduledCorksByIDResponseSDKType, QueryCorkResultRequest, QueryCorkResultResponseSDKType, QueryCorkResultsRequest, QueryCorkResultsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.queryParams = this.queryParams.bind(this);
    this.queryCellarIDs = this.queryCellarIDs.bind(this);
    this.queryScheduledCorks = this.queryScheduledCorks.bind(this);
    this.queryScheduledBlockHeights = this.queryScheduledBlockHeights.bind(this);
    this.queryScheduledCorksByBlockHeight = this.queryScheduledCorksByBlockHeight.bind(this);
    this.queryScheduledCorksByID = this.queryScheduledCorksByID.bind(this);
    this.queryCorkResult = this.queryCorkResult.bind(this);
    this.queryCorkResults = this.queryCorkResults.bind(this);
  }
  /* QueryParams queries the allocation module parameters. */
  async queryParams(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sommelier/cork/v2/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QueryCellarIDs returns all cellars and current tick ranges */
  async queryCellarIDs(_params: QueryCellarIDsRequest = {}): Promise<QueryCellarIDsResponseSDKType> {
    const endpoint = `sommelier/cork/v2/cellar_ids`;
    return await this.req.get<QueryCellarIDsResponseSDKType>(endpoint);
  }
  /* QueryScheduledCorks returns all scheduled corks */
  async queryScheduledCorks(_params: QueryScheduledCorksRequest = {}): Promise<QueryScheduledCorksResponseSDKType> {
    const endpoint = `sommelier/cork/v2/scheduled_corks`;
    return await this.req.get<QueryScheduledCorksResponseSDKType>(endpoint);
  }
  /* QueryScheduledBlockHeights returns all scheduled block heights */
  async queryScheduledBlockHeights(_params: QueryScheduledBlockHeightsRequest = {}): Promise<QueryScheduledBlockHeightsResponseSDKType> {
    const endpoint = `sommelier/cork/v2/scheduled_block_heights`;
    return await this.req.get<QueryScheduledBlockHeightsResponseSDKType>(endpoint);
  }
  /* QueryScheduledCorks returns all scheduled corks at a block height */
  async queryScheduledCorksByBlockHeight(params: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponseSDKType> {
    const endpoint = `sommelier/cork/v2/scheduled_corks_by_block_height/${params.blockHeight}`;
    return await this.req.get<QueryScheduledCorksByBlockHeightResponseSDKType>(endpoint);
  }
  /* QueryScheduledCorks returns all scheduled corks with the specified ID */
  async queryScheduledCorksByID(params: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponseSDKType> {
    const endpoint = `sommelier/cork/v2/scheduled_corks_by_id/${params.id}`;
    return await this.req.get<QueryScheduledCorksByIDResponseSDKType>(endpoint);
  }
  /* QueryCorkResult */
  async queryCorkResult(params: QueryCorkResultRequest): Promise<QueryCorkResultResponseSDKType> {
    const endpoint = `sommelier/cork/v2/cork_results/${params.id}`;
    return await this.req.get<QueryCorkResultResponseSDKType>(endpoint);
  }
  /* QueryCorkResults */
  async queryCorkResults(_params: QueryCorkResultsRequest = {}): Promise<QueryCorkResultsResponseSDKType> {
    const endpoint = `sommelier/cork/v2/cork_results`;
    return await this.req.get<QueryCorkResultsResponseSDKType>(endpoint);
  }
}