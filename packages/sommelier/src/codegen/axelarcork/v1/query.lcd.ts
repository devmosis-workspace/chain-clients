import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryCellarIDsRequest, QueryCellarIDsResponseSDKType, QueryCellarIDsByChainIDRequest, QueryCellarIDsByChainIDResponseSDKType, QueryScheduledCorksRequest, QueryScheduledCorksResponseSDKType, QueryScheduledBlockHeightsRequest, QueryScheduledBlockHeightsResponseSDKType, QueryScheduledCorksByBlockHeightRequest, QueryScheduledCorksByBlockHeightResponseSDKType, QueryScheduledCorksByIDRequest, QueryScheduledCorksByIDResponseSDKType, QueryCorkResultRequest, QueryCorkResultResponseSDKType, QueryCorkResultsRequest, QueryCorkResultsResponseSDKType, QueryChainConfigurationsRequest, QueryChainConfigurationsResponseSDKType, QueryAxelarContractCallNoncesRequest, QueryAxelarContractCallNoncesResponseSDKType, QueryAxelarProxyUpgradeDataRequest, QueryAxelarProxyUpgradeDataResponseSDKType, QueryWinningAxelarCorkRequest, QueryWinningAxelarCorkResponseSDKType, QueryWinningAxelarCorksRequest, QueryWinningAxelarCorksResponseSDKType } from "./query";
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
    this.queryCellarIDsByChainID = this.queryCellarIDsByChainID.bind(this);
    this.queryScheduledCorks = this.queryScheduledCorks.bind(this);
    this.queryScheduledBlockHeights = this.queryScheduledBlockHeights.bind(this);
    this.queryScheduledCorksByBlockHeight = this.queryScheduledCorksByBlockHeight.bind(this);
    this.queryScheduledCorksByID = this.queryScheduledCorksByID.bind(this);
    this.queryCorkResult = this.queryCorkResult.bind(this);
    this.queryCorkResults = this.queryCorkResults.bind(this);
    this.queryChainConfigurations = this.queryChainConfigurations.bind(this);
    this.queryAxelarContractCallNonces = this.queryAxelarContractCallNonces.bind(this);
    this.queryAxelarProxyUpgradeData = this.queryAxelarProxyUpgradeData.bind(this);
    this.queryWinningAxelarCork = this.queryWinningAxelarCork.bind(this);
    this.queryWinningAxelarCorks = this.queryWinningAxelarCorks.bind(this);
  }
  /* QueryParams queries the axelar cork module parameters. */
  async queryParams(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `sommelier/cork/v1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* QueryCellarIDs queries approved cellar ids of all supported chains */
  async queryCellarIDs(_params: QueryCellarIDsRequest = {}): Promise<QueryCellarIDsResponseSDKType> {
    const endpoint = `sommelier/axelarcork/v1/cellar_ids`;
    return await this.req.get<QueryCellarIDsResponseSDKType>(endpoint);
  }
  /* QueryCellarIDsByChainID returns all cellars and current tick ranges */
  async queryCellarIDsByChainID(params: QueryCellarIDsByChainIDRequest): Promise<QueryCellarIDsByChainIDResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.chainId !== "undefined") {
      options.params.chain_id = params.chainId;
    }
    const endpoint = `sommelier/axelarcork/v1/cellar_ids_by_chain_id`;
    return await this.req.get<QueryCellarIDsByChainIDResponseSDKType>(endpoint, options);
  }
  /* QueryScheduledCorks returns all scheduled corks */
  async queryScheduledCorks(params: QueryScheduledCorksRequest): Promise<QueryScheduledCorksResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.chainId !== "undefined") {
      options.params.chain_id = params.chainId;
    }
    const endpoint = `sommelier/axelarcork/v1/scheduled_corks`;
    return await this.req.get<QueryScheduledCorksResponseSDKType>(endpoint, options);
  }
  /* QueryScheduledBlockHeights returns all scheduled block heights */
  async queryScheduledBlockHeights(params: QueryScheduledBlockHeightsRequest): Promise<QueryScheduledBlockHeightsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.chainId !== "undefined") {
      options.params.chain_id = params.chainId;
    }
    const endpoint = `sommelier/axelarcork/v1/scheduled_block_heights`;
    return await this.req.get<QueryScheduledBlockHeightsResponseSDKType>(endpoint, options);
  }
  /* QueryScheduledCorks returns all scheduled corks at a block height */
  async queryScheduledCorksByBlockHeight(params: QueryScheduledCorksByBlockHeightRequest): Promise<QueryScheduledCorksByBlockHeightResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.chainId !== "undefined") {
      options.params.chain_id = params.chainId;
    }
    const endpoint = `sommelier/axelarcork/v1/scheduled_corks_by_block_height/${params.blockHeight}`;
    return await this.req.get<QueryScheduledCorksByBlockHeightResponseSDKType>(endpoint, options);
  }
  /* QueryScheduledCorks returns all scheduled corks with the specified ID */
  async queryScheduledCorksByID(params: QueryScheduledCorksByIDRequest): Promise<QueryScheduledCorksByIDResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.chainId !== "undefined") {
      options.params.chain_id = params.chainId;
    }
    const endpoint = `sommelier/axelarcork/v1/scheduled_corks_by_id/${params.id}`;
    return await this.req.get<QueryScheduledCorksByIDResponseSDKType>(endpoint, options);
  }
  /* QueryCorkResult */
  async queryCorkResult(params: QueryCorkResultRequest): Promise<QueryCorkResultResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.chainId !== "undefined") {
      options.params.chain_id = params.chainId;
    }
    const endpoint = `sommelier/axelarcork/v1/cork_results/${params.id}`;
    return await this.req.get<QueryCorkResultResponseSDKType>(endpoint, options);
  }
  /* QueryCorkResults */
  async queryCorkResults(params: QueryCorkResultsRequest): Promise<QueryCorkResultsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.chainId !== "undefined") {
      options.params.chain_id = params.chainId;
    }
    const endpoint = `sommelier/axelarcork/v1/cork_results`;
    return await this.req.get<QueryCorkResultsResponseSDKType>(endpoint, options);
  }
  /* QueryChainConfigurations */
  async queryChainConfigurations(_params: QueryChainConfigurationsRequest = {}): Promise<QueryChainConfigurationsResponseSDKType> {
    const endpoint = `sommelier/axelarcork/v1/chain_configurations`;
    return await this.req.get<QueryChainConfigurationsResponseSDKType>(endpoint);
  }
  /* QueryAxelarContractCallNonces */
  async queryAxelarContractCallNonces(_params: QueryAxelarContractCallNoncesRequest = {}): Promise<QueryAxelarContractCallNoncesResponseSDKType> {
    const endpoint = `sommelier/axelarcork/v1/contract_call_nonces`;
    return await this.req.get<QueryAxelarContractCallNoncesResponseSDKType>(endpoint);
  }
  /* QueryAxelarProxyUpgradeData */
  async queryAxelarProxyUpgradeData(_params: QueryAxelarProxyUpgradeDataRequest = {}): Promise<QueryAxelarProxyUpgradeDataResponseSDKType> {
    const endpoint = `sommelier/axelarcork/v1/proxy_upgrade_data`;
    return await this.req.get<QueryAxelarProxyUpgradeDataResponseSDKType>(endpoint);
  }
  /* QueryWinningAxelarCork */
  async queryWinningAxelarCork(params: QueryWinningAxelarCorkRequest): Promise<QueryWinningAxelarCorkResponseSDKType> {
    const endpoint = `sommelier/axelarcork/v1/winning_axelar_corks/${params.chainId}/${params.contractAddress}`;
    return await this.req.get<QueryWinningAxelarCorkResponseSDKType>(endpoint);
  }
  /* QueryWinningAxelarCorks */
  async queryWinningAxelarCorks(params: QueryWinningAxelarCorksRequest): Promise<QueryWinningAxelarCorksResponseSDKType> {
    const endpoint = `sommelier/axelarcork/v1/winning_axelar_corks/${params.chainId}`;
    return await this.req.get<QueryWinningAxelarCorksResponseSDKType>(endpoint);
  }
}