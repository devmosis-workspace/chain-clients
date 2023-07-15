import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgFundCommunityPool, MsgFundCommunityPoolResponse } from "./tx";
/** Msg defines the community Msg service. */
export interface Msg {
  /** FundCommunityPool defines a method to allow an account to directly fund the community module account. */
  fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.fundCommunityPool = this.fundCommunityPool.bind(this);
  }
  fundCommunityPool(request: MsgFundCommunityPool): Promise<MsgFundCommunityPoolResponse> {
    const data = MsgFundCommunityPool.encode(request).finish();
    const promise = this.rpc.request("kava.community.v1beta1.Msg", "FundCommunityPool", data);
    return promise.then(data => MsgFundCommunityPoolResponse.decode(new _m0.Reader(data)));
  }
}