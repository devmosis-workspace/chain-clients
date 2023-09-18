import { setPaginationParams } from "../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryRegisteredQueriesRequest, QueryRegisteredQueriesResponseSDKType, QueryRegisteredQueryRequest, QueryRegisteredQueryResponseSDKType, QueryRegisteredQueryResultRequest, QueryRegisteredQueryResultResponseSDKType, QueryLastRemoteHeight, QueryLastRemoteHeightResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.registeredQueries = this.registeredQueries.bind(this);
    this.registeredQuery = this.registeredQuery.bind(this);
    this.queryResult = this.queryResult.bind(this);
    this.lastRemoteHeight = this.lastRemoteHeight.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `neutron/interchainqueries/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* RegisteredQueries */
  async registeredQueries(params: QueryRegisteredQueriesRequest): Promise<QueryRegisteredQueriesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.owners !== "undefined") {
      options.params.owners = params.owners;
    }
    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/interchainqueries/registered_queries`;
    return await this.req.get<QueryRegisteredQueriesResponseSDKType>(endpoint, options);
  }
  /* RegisteredQuery */
  async registeredQuery(params: QueryRegisteredQueryRequest): Promise<QueryRegisteredQueryResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.queryId !== "undefined") {
      options.params.query_id = params.queryId;
    }
    const endpoint = `neutron/interchainqueries/registered_query`;
    return await this.req.get<QueryRegisteredQueryResponseSDKType>(endpoint, options);
  }
  /* QueryResult */
  async queryResult(params: QueryRegisteredQueryResultRequest): Promise<QueryRegisteredQueryResultResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.queryId !== "undefined") {
      options.params.query_id = params.queryId;
    }
    const endpoint = `neutron/interchainqueries/query_result`;
    return await this.req.get<QueryRegisteredQueryResultResponseSDKType>(endpoint, options);
  }
  /* LastRemoteHeight */
  async lastRemoteHeight(params: QueryLastRemoteHeight): Promise<QueryLastRemoteHeightResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.connectionId !== "undefined") {
      options.params.connection_id = params.connectionId;
    }
    const endpoint = `neutron/interchainqueries/remote_height`;
    return await this.req.get<QueryLastRemoteHeightResponseSDKType>(endpoint, options);
  }
}