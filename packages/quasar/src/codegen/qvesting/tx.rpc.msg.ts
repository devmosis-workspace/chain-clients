import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { MsgCreateVestingAccount, MsgCreateVestingAccountResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createVestingAccount = this.createVestingAccount.bind(this);
  }
  createVestingAccount(request: MsgCreateVestingAccount): Promise<MsgCreateVestingAccountResponse> {
    const data = MsgCreateVestingAccount.encode(request).finish();
    const promise = this.rpc.request("quasarlabs.quasarnode.qvesting.Msg", "CreateVestingAccount", data);
    return promise.then(data => MsgCreateVestingAccountResponse.decode(new BinaryReader(data)));
  }
}