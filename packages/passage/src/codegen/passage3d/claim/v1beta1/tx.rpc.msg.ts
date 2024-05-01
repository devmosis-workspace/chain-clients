import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgClaim, MsgClaimResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** InitialClaim defines RPC service for claim */
  claim(request: MsgClaim): Promise<MsgClaimResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claim = this.claim.bind(this);
  }
  claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("passage3d.claim.v1beta1.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new BinaryReader(data)));
  }
}