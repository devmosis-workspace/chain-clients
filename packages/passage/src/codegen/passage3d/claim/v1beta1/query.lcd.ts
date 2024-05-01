import { LCDClient } from "@cosmology/lcd";
import { QueryModuleAccountBalanceRequest, QueryModuleAccountBalanceResponseSDKType, QueryParamsRequest, QueryParamsResponseSDKType, QueryClaimRecordRequest, QueryClaimRecordResponseSDKType, QueryClaimableForActionRequest, QueryClaimableForActionResponseSDKType, QueryTotalClaimableRequest, QueryTotalClaimableResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.moduleAccountBalance = this.moduleAccountBalance.bind(this);
    this.params = this.params.bind(this);
    this.claimRecord = this.claimRecord.bind(this);
    this.claimableForAction = this.claimableForAction.bind(this);
    this.totalClaimable = this.totalClaimable.bind(this);
  }
  /* ModuleAccountBalance RPC returns the claim module account balance */
  async moduleAccountBalance(_params: QueryModuleAccountBalanceRequest = {}): Promise<QueryModuleAccountBalanceResponseSDKType> {
    const endpoint = `passage3d/claim/v1beta1/module_account_balance`;
    return await this.req.get<QueryModuleAccountBalanceResponseSDKType>(endpoint);
  }
  /* Params RPC returns claim module params */
  async params(_params: QueryParamsRequest = {}): Promise<QueryParamsResponseSDKType> {
    const endpoint = `passage3d/claim/v1beta1/params`;
    return await this.req.get<QueryParamsResponseSDKType>(endpoint);
  }
  /* ClaimRecord RPC returns claim record for an address */
  async claimRecord(params: QueryClaimRecordRequest): Promise<QueryClaimRecordResponseSDKType> {
    const endpoint = `passage3d/claim/v1beta1/claim_record/${params.address}`;
    return await this.req.get<QueryClaimRecordResponseSDKType>(endpoint);
  }
  /* ClaimableForAction RPC returns claimable amount for an action of an address */
  async claimableForAction(params: QueryClaimableForActionRequest): Promise<QueryClaimableForActionResponseSDKType> {
    const endpoint = `passage3d/claim/v1beta1/claimable_for_action/${params.address}/${params.action}`;
    return await this.req.get<QueryClaimableForActionResponseSDKType>(endpoint);
  }
  /* TotalClaimable RPC returns total claimable amount for address */
  async totalClaimable(params: QueryTotalClaimableRequest): Promise<QueryTotalClaimableResponseSDKType> {
    const endpoint = `passage3d/claim/v1beta1/total_claimable/${params.address}`;
    return await this.req.get<QueryTotalClaimableResponseSDKType>(endpoint);
  }
}