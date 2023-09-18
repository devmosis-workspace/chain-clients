import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgRegisterInterchainAccount, MsgRegisterInterchainAccountResponse, MsgSubmitTx, MsgSubmitTxResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  registerInterchainAccount(request: MsgRegisterInterchainAccount): Promise<MsgRegisterInterchainAccountResponse>;
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.registerInterchainAccount = this.registerInterchainAccount.bind(this);
    this.submitTx = this.submitTx.bind(this);
  }
  registerInterchainAccount(request: MsgRegisterInterchainAccount): Promise<MsgRegisterInterchainAccountResponse> {
    const data = MsgRegisterInterchainAccount.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Msg", "RegisterInterchainAccount", data);
    return promise.then(data => MsgRegisterInterchainAccountResponse.decode(new BinaryReader(data)));
  }
  submitTx(request: MsgSubmitTx): Promise<MsgSubmitTxResponse> {
    const data = MsgSubmitTx.encode(request).finish();
    const promise = this.rpc.request("neutron.interchaintxs.v1.Msg", "SubmitTx", data);
    return promise.then(data => MsgSubmitTxResponse.decode(new BinaryReader(data)));
  }
}