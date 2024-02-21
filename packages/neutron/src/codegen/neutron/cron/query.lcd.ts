import { setPaginationParams } from "../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryParamsRequest, QueryParamsResponseSDKType, QueryGetScheduleRequest, QueryGetScheduleResponseSDKType, QuerySchedulesRequest, QuerySchedulesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.params = this.params.bind(this);
    this.schedule = this.schedule.bind(this);
    this.schedules = this.schedules.bind(this);
  }
  /* Queries the parameters of the module. */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `neutron/cron/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* Queries a Schedule by name. */
  async schedule(params: QueryGetScheduleRequest): Promise<QueryGetScheduleResponseSDKType> {
    const endpoint = `neutron/cron/schedule/${params.name}`;
    return await this.req.get<QueryGetScheduleResponseSDKType>(endpoint);
  }
  /* Queries a list of Schedule items. */
  async schedules(params: QuerySchedulesRequest = {
    pagination: undefined
  }): Promise<QuerySchedulesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `neutron/cron/schedule`;
    return await this.req.get<QuerySchedulesResponseSDKType>(endpoint, options);
  }
}