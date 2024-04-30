import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryStateRequest, QueryStateResponseSDKType, QueryChainParamsRequest, QueryChainParamsResponseSDKType, QueryIncentivizedPoolsRequest, QueryIncentivizedPoolsResponseSDKType, QueryPoolsRequest, QueryPoolsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.state = this.state.bind(this);
    this.chainParams = this.chainParams.bind(this);
    this.incentivizedPools = this.incentivizedPools.bind(this);
    this.pools = this.pools.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `quasarlabs/quasarnode/qoracle/osmosis/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries the state of oracle requests. */
  async state(_params: QueryStateRequest = {}): Promise<QueryStateResponseSDKType> {
    const endpoint = `quasarlabs/quasarnode/qoracle/osmosis/state`;
    return await this.req.get<QueryStateResponseSDKType>(endpoint);
  }
  /* Queries latest fetched params from osmosis chain. */
  async chainParams(_params: QueryChainParamsRequest = {}): Promise<QueryChainParamsResponseSDKType> {
    const endpoint = `quasarlabs/quasarnode/qoracle/osmosis/chain_params`;
    return await this.req.get<QueryChainParamsResponseSDKType>(endpoint);
  }
  /* Queries latest fetched list of incentivized pools from osmosis. */
  async incentivizedPools(_params: QueryIncentivizedPoolsRequest = {}): Promise<QueryIncentivizedPoolsResponseSDKType> {
    const endpoint = `quasarlabs/quasarnode/qoracle/osmosis/incentivized_pools`;
    return await this.req.get<QueryIncentivizedPoolsResponseSDKType>(endpoint);
  }
  /* Queries latest fetched list of pool details from osmosis. */
  async pools(params: QueryPoolsRequest = {
    pagination: undefined
  }): Promise<QueryPoolsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `quasarlabs/quasarnode/qoracle/osmosis/pools`;
    return await this.req.get<QueryPoolsResponseSDKType>(endpoint, options);
  }
}