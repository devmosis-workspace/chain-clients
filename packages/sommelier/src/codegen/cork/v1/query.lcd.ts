import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QuerySubmittedCorksRequest, QuerySubmittedCorksResponseSDKType, QueryCommitPeriodRequest, QueryCommitPeriodResponseSDKType, QueryCellarIDsRequest, QueryCellarIDsResponseSDKType, QueryScheduledCorksRequest, QueryScheduledCorksResponseSDKType, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponseSDKType, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.queryParams = this.queryParams.bind(this);
    this.querySubmittedCorks = this.querySubmittedCorks.bind(this);
    this.queryCommitPeriod = this.queryCommitPeriod.bind(this);
    this.queryCellarIDs = this.queryCellarIDs.bind(this);
    this.queryScheduledCorks = this.queryScheduledCorks.bind(this);
    this.queryScheduledBlockHeights = this.queryScheduledBlockHeights.bind(this);
    this.queryScheduledCorksByBlockHeight = this.queryScheduledCorksByBlockHeight.bind(this);
  }
  /* QueryParams queries the allocation module parameters. */
  async queryParams(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sommelier/cork/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QuerySubmittedCorks queries the submitted corks awaiting vote */
  async querySubmittedCorks(_params: QuerySubmittedCorksRequest = {}): Promise<QuerySubmittedCorksResponseSDKType> {
    const endpoint = `sommelier/cork/v1/submitted`;
    return await this.req.get<QuerySubmittedCorksResponseSDKType>(endpoint);
  }
  /* QueryCommitPeriod queries the heights for the current voting period (current, start and end) */
  async queryCommitPeriod(_params: QueryCommitPeriodRequest = {}): Promise<QueryCommitPeriodResponseSDKType> {
    const endpoint = `sommelier/cork/v1/commit_period`;
    return await this.req.get<QueryCommitPeriodResponseSDKType>(endpoint);
  }
  /* QueryCellarIDs returns all cellars and current tick ranges */
  async queryCellarIDs(_params: QueryCellarIDsRequest = {}): Promise<QueryCellarIDsResponseSDKType> {
    const endpoint = `sommelier/cork/v1/cellar_ids`;
    return await this.req.get<QueryCellarIDsResponseSDKType>(endpoint);
  }
  /* QueryScheduledCorks returns all scheduled corks */
  async queryScheduledCorks(_params: QueryScheduledCorksRequest = {}): Promise<QueryScheduledCorksResponseSDKType> {
    const endpoint = `sommelier/cork/v1/scheduled_corks`;
    return await this.req.get<QueryScheduledCorksResponseSDKType>(endpoint);
  }
  /* QueryScheduledBlockHeights returns all scheduled block heights */
  async queryScheduledBlockHeights(_params: QueryScheduledBlockHeightsRequest = {}): Promise<QueryScheduledBlockHeightsResponseSDKType> {
    const endpoint = `sommelier/cork/v1/scheduled_block_heights`;
    return await this.req.get<QueryScheduledBlockHeightsResponseSDKType>(endpoint);
  }
  /* QueryScheduledCorks returns all scheduled corks at a block height */
  async queryScheduledCorksByBlockHeight(params: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponseSDKType> {
    const endpoint = `sommelier/cork/v1/scheduled_corks_by_block_height/${params.blockHeight}`;
    return await this.req.get<QueryScheduledCorksByBlockHeightResponseSDKType>(endpoint);
  }
}