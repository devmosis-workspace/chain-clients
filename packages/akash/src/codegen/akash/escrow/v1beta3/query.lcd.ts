import { setPaginationParams } from "../../../helpers";
import { LCDClient } from "@cosmology/lcd";
import { QueryAccountsRequest, QueryAccountsResponseSDKType, QueryPaymentsRequest, QueryPaymentsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.accounts = this.accounts.bind(this);
    this.payments = this.payments.bind(this);
  }
  /* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   Accounts queries all accounts */
  async accounts(params: QueryAccountsRequest): Promise<QueryAccountsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.scope !== "undefined") {
      options.params.scope = params.scope;
    }
    if (typeof params?.xid !== "undefined") {
      options.params.xid = params.xid;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.state !== "undefined") {
      options.params.state = params.state;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/escrow/v1beta3/types/accounts/list`;
    return await this.req.get<QueryAccountsResponseSDKType>(endpoint, options);
  }
  /* buf:lint:ignore RPC_REQUEST_RESPONSE_UNIQUE
   buf:lint:ignore RPC_RESPONSE_STANDARD_NAME
   Payments queries all payments */
  async payments(params: QueryPaymentsRequest): Promise<QueryPaymentsResponseSDKType> {
    const options: any = {
      params: {}
    };
    if (typeof params?.scope !== "undefined") {
      options.params.scope = params.scope;
    }
    if (typeof params?.xid !== "undefined") {
      options.params.xid = params.xid;
    }
    if (typeof params?.id !== "undefined") {
      options.params.id = params.id;
    }
    if (typeof params?.owner !== "undefined") {
      options.params.owner = params.owner;
    }
    if (typeof params?.state !== "undefined") {
      options.params.state = params.state;
    }
    if (typeof params?.pagination !== "undefined") {
      setPaginationParams(options, params.pagination);
    }
    const endpoint = `akash/escrow/v1beta3/types/payments/list`;
    return await this.req.get<QueryPaymentsResponseSDKType>(endpoint, options);
  }
}