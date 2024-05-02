import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgUnlock, MsgUnlockResponse } from "./tx";
/** Msg defines the auth Msg service. */
export interface Msg {
  /**
   * Unlock defines a method for unlocking coins from a manual vesting
   * account.
   */
  unlock(request: MsgUnlock): Promise<MsgUnlockResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.unlock = this.unlock.bind(this);
  }
  unlock(request: MsgUnlock): Promise<MsgUnlockResponse> {
    const data = MsgUnlock.encode(request).finish();
    const promise = this.rpc.request("shentu.auth.v1alpha1.Msg", "Unlock", data);
    return promise.then(data => MsgUnlockResponse.decode(new BinaryReader(data)));
  }
}