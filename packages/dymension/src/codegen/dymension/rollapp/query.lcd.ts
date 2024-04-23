import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetRollappRequest, QueryGetRollappResponseSDKType, QueryGetRollappByEIP155Request, QueryAllRollappRequest, QueryAllRollappResponseSDKType, QueryGetLatestStateIndexRequest, QueryGetLatestStateIndexResponseSDKType, QueryGetStateInfoRequest, QueryGetStateInfoResponseSDKType, QueryAllStateInfoRequest, QueryAllStateInfoResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.rollapp = this.rollapp.bind(this);
    this.rollappByEIP155 = this.rollappByEIP155.bind(this);
    this.rollappAll = this.rollappAll.bind(this);
    this.latestStateIndex = this.latestStateIndex.bind(this);
    this.stateInfo = this.stateInfo.bind(this);
    this.stateInfoAll = this.stateInfoAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `dymensionxyz/dymension/rollapp/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Rollapp by index. */
  async rollapp(params: QueryGetRollappRequest): Promise<QueryGetRollappResponseSDKType> {
    const endpoint = `dymensionxyz/dymension/rollapp/rollapp/${params.rollappId}`;
    return await this.req.get<QueryGetRollappResponseSDKType>(endpoint);
  }
  /* Queries a Rollapp by index. */
  async rollappByEIP155(params: QueryGetRollappByEIP155Request): Promise<QueryGetRollappResponseSDKType> {
    const endpoint = `dymensionxyz/dymension/rollapp/eip155/${params.eip155}`;
    return await this.req.get<QueryGetRollappResponseSDKType>(endpoint);
  }
  /* Queries a list of Rollapp items. */
  async rollappAll(params: QueryAllRollappRequest = {
    pagination: undefined
  }): Promise<QueryAllRollappResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `dymensionxyz/dymension/rollapp/rollapp`;
    return await this.req.get<QueryAllRollappResponseSDKType>(endpoint, options);
  }
  /* Queries a LatestStateIndex by rollapp-id. */
  async latestStateIndex(params: QueryGetLatestStateIndexRequest): Promise<QueryGetLatestStateIndexResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.finalized !== "undefined") {
      options.params.finalized = params.finalized;
    }
    const endpoint = `dymensionxyz/dymension/rollapp/latest_state_index/${params.rollappId}`;
    return await this.req.get<QueryGetLatestStateIndexResponseSDKType>(endpoint, options);
  }
  /* Queries a StateInfo by index. */
  async stateInfo(params: QueryGetStateInfoRequest): Promise<QueryGetStateInfoResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.height !== "undefined") {
      options.params.height = params.height;
    }
    if (typeof params?.finalized !== "undefined") {
      options.params.finalized = params.finalized;
    }
    const endpoint = `dymensionxyz/dymension/rollapp/state_info/${params.rollappId}/${params.index}`;
    return await this.req.get<QueryGetStateInfoResponseSDKType>(endpoint, options);
  }
  /* Queries a list of StateInfo items. */
  async stateInfoAll(params: QueryAllStateInfoRequest): Promise<QueryAllStateInfoResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.rollappId !== "undefined") {
      options.params.rollappId = params.rollappId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `dymensionxyz/dymension/rollapp/state_info`;
    return await this.req.get<QueryAllStateInfoResponseSDKType>(endpoint, options);
  }
}