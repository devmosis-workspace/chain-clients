import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgLockedSend, MsgLockedSendResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /**
   * LockedSend defines a method for sending coins and locking them from one
   * account to another account.
   */
  lockedSend(request: MsgLockedSend): Promise<MsgLockedSendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.lockedSend = this.lockedSend.bind(this);
  }
  lockedSend(request: MsgLockedSend): Promise<MsgLockedSendResponse> {
    const data = MsgLockedSend.encode(request).finish();
    const promise = this.rpc.request("shentu.bank.v1alpha1.Msg", "LockedSend", data);
    return promise.then(data => MsgLockedSendResponse.decode(new BinaryReader(data)));
  }
}