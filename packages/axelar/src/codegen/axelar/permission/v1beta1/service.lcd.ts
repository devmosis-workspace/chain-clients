import { LCDClient } from "@osmonauts/lcd";
import { QueryGovernanceKeyRequest, QueryGovernanceKeyResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.governanceKey = this.governanceKey.bind(this);
  }
  /* GovernanceKey returns the multisig governance key */
  async governanceKey(_params: QueryGovernanceKeyRequest = {}): Promise<QueryGovernanceKeyResponseSDKType> {
    const endpoint = `axelar/permission/v1beta1/governance_key`;
    return await this.req.get<QueryGovernanceKeyResponseSDKType>(endpoint);
  }
}