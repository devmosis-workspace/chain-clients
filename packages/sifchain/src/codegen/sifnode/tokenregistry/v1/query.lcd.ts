import { LCDClient } from "@cosmology/lcd";
import { QueryEntriesRequest, QueryEntriesResponseSDKType } from "./query";
export class LCDQueryClient {
  req: LCDClient;
  constructor({
    requestClient
  }: {
    requestClient: LCDClient;
  }) {
    this.req = requestClient;
    this.entries = this.entries.bind(this);
  }
  /* Entries */
  async entries(_params: QueryEntriesRequest = {}): Promise<QueryEntriesResponseSDKType> {
    const endpoint = `sifchain/tokenregistry/v1beta1/entries`;
    return await this.req.get<QueryEntriesResponseSDKType>(endpoint);
  }
}