import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRegisterAccount, MsgRegisterAccountResponse, MsgClearAccount, MsgClearAccountResponse } from "./tx";
export interface Msg {
  registerAccount(request: noble.forwarding.v1.MsgRegisterAccount): Promise<MsgRegisterAccountResponse>;
  clearAccount(request: noble.forwarding.v1.MsgClearAccount): Promise<MsgClearAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerAccount = this.registerAccount.bind(this);
    this.clearAccount = this.clearAccount.bind(this);
  }
  registerAccount(request: noble.forwarding.v1.MsgRegisterAccount): Promise<MsgRegisterAccountResponse> {
    const data = noble.forwarding.v1.MsgRegisterAccount.encode(request).finish();
    const promise = this.rpc.request("noble.forwarding.v1.Msg", "RegisterAccount", data);
    return promise.then(data => MsgRegisterAccountResponse.decode(new BinaryReader(data)));
  }
  clearAccount(request: noble.forwarding.v1.MsgClearAccount): Promise<MsgClearAccountResponse> {
    const data = noble.forwarding.v1.MsgClearAccount.encode(request).finish();
    const promise = this.rpc.request("noble.forwarding.v1.Msg", "ClearAccount", data);
    return promise.then(data => MsgClearAccountResponse.decode(new BinaryReader(data)));
  }
}