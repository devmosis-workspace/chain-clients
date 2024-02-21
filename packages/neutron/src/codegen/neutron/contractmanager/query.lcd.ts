import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryFailuresRequest, QueryFailuresResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.addressFailure = this.addressFailure.bind(this);
    this.addressFailures = this.addressFailures.bind(this);
    this.failures = this.failures.bind(this);
  }
  /* Parameters queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `neutron/contractmanager/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Failure by contract address and failure ID. */
  async addressFailure(params: QueryFailuresRequest): Promise<QueryFailuresResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/contractmanager/failures/${params.address}/${params.failureId}`;
    return await this.req.get<QueryFailuresResponseSDKType>(endpoint, options);
  }
  /* Queries Failures by contract address. */
  async addressFailures(params: QueryFailuresRequest): Promise<QueryFailuresResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.failureId !== "undefined") {
      options.params.failure_id = params.failureId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/contractmanager/failures/${params.address}`;
    return await this.req.get<QueryFailuresResponseSDKType>(endpoint, options);
  }
  /* Queries a list of Failures occurred on the network. */
  async failures(params: QueryFailuresRequest): Promise<QueryFailuresResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.address !== "undefined") {
      options.params.address = params.address;
    }
    if (typeof params?.failureId !== "undefined") {
      options.params.failure_id = params.failureId;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/contractmanager/failures`;
    return await this.req.get<QueryFailuresResponseSDKType>(endpoint, options);
  }
}