import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgMintTokens, MsgMintTokensResponse, MsgBurnTokens, MsgBurnTokensResponse } from "./tx";
export interface Msg {
  mintTokens(request: MsgMintTokens): Promise<MsgMintTokensResponse>;
  burnTokens(request: MsgBurnTokens): Promise<MsgBurnTokensResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.mintTokens = this.mintTokens.bind(this);
    this.burnTokens = this.burnTokens.bind(this);
  }
  mintTokens(request: MsgMintTokens): Promise<MsgMintTokensResponse> {
    const data = MsgMintTokens.encode(request).finish();
    const promise = this.rpc.request("em.liquidityprovider.v1.Msg", "MintTokens", data);
    return promise.then(data => MsgMintTokensResponse.decode(new BinaryReader(data)));
  }
  burnTokens(request: MsgBurnTokens): Promise<MsgBurnTokensResponse> {
    const data = MsgBurnTokens.encode(request).finish();
    const promise = this.rpc.request("em.liquidityprovider.v1.Msg", "BurnTokens", data);
    return promise.then(data => MsgBurnTokensResponse.decode(new BinaryReader(data)));
  }
}