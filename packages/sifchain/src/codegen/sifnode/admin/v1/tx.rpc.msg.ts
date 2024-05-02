import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgAddAccount, MsgAddAccountResponse, MsgRemoveAccount, MsgRemoveAccountResponse, MsgSetParams, MsgSetParamsResponse } from "./tx";
export interface Msg {
  addAccount(request: MsgAddAccount): Promise<MsgAddAccountResponse>;
  removeAccount(request: MsgRemoveAccount): Promise<MsgRemoveAccountResponse>;
  setParams(request: MsgSetParams): Promise<MsgSetParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addAccount = this.addAccount.bind(this);
    this.removeAccount = this.removeAccount.bind(this);
    this.setParams = this.setParams.bind(this);
  }
  addAccount(request: MsgAddAccount): Promise<MsgAddAccountResponse> {
    const data = MsgAddAccount.encode(request).finish();
    const promise = this.rpc.request("sifnode.admin.v1.Msg", "AddAccount", data);
    return promise.then(data => MsgAddAccountResponse.decode(new BinaryReader(data)));
  }
  removeAccount(request: MsgRemoveAccount): Promise<MsgRemoveAccountResponse> {
    const data = MsgRemoveAccount.encode(request).finish();
    const promise = this.rpc.request("sifnode.admin.v1.Msg", "RemoveAccount", data);
    return promise.then(data => MsgRemoveAccountResponse.decode(new BinaryReader(data)));
  }
  setParams(request: MsgSetParams): Promise<MsgSetParamsResponse> {
    const data = MsgSetParams.encode(request).finish();
    const promise = this.rpc.request("sifnode.admin.v1.Msg", "SetParams", data);
    return promise.then(data => MsgSetParamsResponse.decode(new BinaryReader(data)));
  }
}