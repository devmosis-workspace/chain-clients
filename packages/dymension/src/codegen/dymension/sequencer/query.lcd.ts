import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetSequencerRequest, QueryGetSequencerResponseSDKType, QueryAllSequencerRequest, QueryAllSequencerResponseSDKType, QueryGetSequencersByRollappRequest, QueryGetSequencersByRollappResponseSDKType, QueryAllSequencersByRollappRequest, QueryAllSequencersByRollappResponseSDKType, QueryGetSchedulerRequest, QueryGetSchedulerResponseSDKType, QueryAllSchedulerRequest, QueryAllSchedulerResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.sequencer = this.sequencer.bind(this);
    this.sequencerAll = this.sequencerAll.bind(this);
    this.sequencersByRollapp = this.sequencersByRollapp.bind(this);
    this.sequencersByRollappAll = this.sequencersByRollappAll.bind(this);
    this.scheduler = this.scheduler.bind(this);
    this.schedulerAll = this.schedulerAll.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `dymensionxyz/dymension/sequencer/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Sequencer by index. */
  async sequencer(params: QueryGetSequencerRequest): Promise<QueryGetSequencerResponseSDKType> {
    const endpoint = `dymensionxyz/dymension/sequencer/sequencer/${params.sequencerAddress}`;
    return await this.req.get<QueryGetSequencerResponseSDKType>(endpoint);
  }
  /* Queries a list of Sequencer items. */
  async sequencerAll(params: QueryAllSequencerRequest = {
    pagination: undefined
  }): Promise<QueryAllSequencerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `dymensionxyz/dymension/sequencer/sequencer`;
    return await this.req.get<QueryAllSequencerResponseSDKType>(endpoint, options);
  }
  /* Queries a SequencersByRollapp by index. */
  async sequencersByRollapp(params: QueryGetSequencersByRollappRequest): Promise<QueryGetSequencersByRollappResponseSDKType> {
    const endpoint = `dymensionxyz/dymension/sequencer/sequencers_by_rollapp/${params.rollappId}`;
    return await this.req.get<QueryGetSequencersByRollappResponseSDKType>(endpoint);
  }
  /* Queries a list of SequencersByRollapp items. */
  async sequencersByRollappAll(params: QueryAllSequencersByRollappRequest = {
    pagination: undefined
  }): Promise<QueryAllSequencersByRollappResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `dymensionxyz/dymension/sequencer/sequencers_by_rollapp`;
    return await this.req.get<QueryAllSequencersByRollappResponseSDKType>(endpoint, options);
  }
  /* Queries a Scheduler by index. */
  async scheduler(params: QueryGetSchedulerRequest): Promise<QueryGetSchedulerResponseSDKType> {
    const endpoint = `dymensionxyz/dymension/sequencer/scheduler/${params.sequencerAddress}`;
    return await this.req.get<QueryGetSchedulerResponseSDKType>(endpoint);
  }
  /* Queries a list of Scheduler items. */
  async schedulerAll(params: QueryAllSchedulerRequest = {
    pagination: undefined
  }): Promise<QueryAllSchedulerResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `dymensionxyz/dymension/sequencer/scheduler`;
    return await this.req.get<QueryAllSchedulerResponseSDKType>(endpoint, options);
  }
}