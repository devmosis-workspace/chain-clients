import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@osmonauts/lcd";
import { QueryScheduleRequest, QueryScheduleResponseSDKType, QuerySchedulesRequest, QuerySchedulesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.schedule = this.schedule.bind(this);
    this.schedules = this.schedules.bind(this);
  }
  /* Schedule queries an incentives schedule by identifier */
  async schedule(params: QueryScheduleRequest): Promise<QueryScheduleResponseSDKType> {
    const endpoint = `mars/incentives/v1beta1/schedule/${params.id}`;
    return await this.req.get<QueryScheduleResponseSDKType>(endpoint);
  }
  /* Schedules queries all incentives schedules */
  async schedules(params: QuerySchedulesRequest = {
    pagination: undefined
  }): Promise<QuerySchedulesResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `mars/incentives/v1beta1/schedules`;
    return await this.req.get<QuerySchedulesResponseSDKType>(endpoint, options);
  }
}