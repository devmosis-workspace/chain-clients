import { LCDClient } from "@cosmology/lcd";
import { QueryGovernanceKeyRequest, QueryGovernanceKeyResponseSDKType, ParamsRequest, ParamsResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.governanceKey = this.governanceKey.bind(this);
    this.params = this.params.bind(this);
  }
  /* GovernanceKey returns the multisig governance key */
  async governanceKey(_params: QueryGovernanceKeyRequest = {}): Promise<QueryGovernanceKeyResponseSDKType> {
    const endpoint = `axelar/permission/v1beta1/governance_key`;
    return await this.req.get<QueryGovernanceKeyResponseSDKType>(endpoint);
  }
  /* Params */
  async params(_params: ParamsRequest = {}): Promise<ParamsResponseSDKType> {
    const endpoint = `axelar/permission/v1beta1/params`;
    return await this.req.get<ParamsResponseSDKType>(endpoint);
  }
}