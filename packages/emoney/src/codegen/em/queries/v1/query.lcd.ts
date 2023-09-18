import { LCDClient } from "@cosmology/lcd";
import { QueryCirculatingRequest, QueryCirculatingResponseSDKType, QueryMissedBlocksRequest, QueryMissedBlocksResponseSDKType, QuerySpendableRequest, QuerySpendableResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.circulating = this.circulating.bind(this);
    this.missedBlocks = this.missedBlocks.bind(this);
    this.spendable = this.spendable.bind(this);
  }
  /* Circulating */
  async circulating(_params: QueryCirculatingRequest = {}): Promise<QueryCirculatingResponseSDKType> {
    const endpoint = `e-money/bank/v1/circulating`;
    return await this.req.get<QueryCirculatingResponseSDKType>(endpoint);
  }
  /* MissedBlocks */
  async missedBlocks(params: QueryMissedBlocksRequest): Promise<QueryMissedBlocksResponseSDKType> {
    const endpoint = `e-money/slashing/v1/missedblocks/${params.consAddress}`;
    return await this.req.get<QueryMissedBlocksResponseSDKType>(endpoint);
  }
  /* Spendable */
  async spendable(params: QuerySpendableRequest): Promise<QuerySpendableResponseSDKType> {
    const endpoint = `e-money/bank/v1/spendable/${params.address}`;
    return await this.req.get<QuerySpendableResponseSDKType>(endpoint);
  }
}