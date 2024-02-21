import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgAddSuper, MsgAddSuperResponse, MsgDeleteSuper, MsgDeleteSuperResponse } from "./tx";
/** Msg defines the guardian Msg service */
export interface Msg {
  /** AddSuper defines a method for adding a super account */
  addSuper(request: MsgAddSuper): Promise<MsgAddSuperResponse>;
  /** DeleteSuper defines a method for deleting a super account */
  deleteSuper(request: MsgDeleteSuper): Promise<MsgDeleteSuperResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.addSuper = this.addSuper.bind(this);
    this.deleteSuper = this.deleteSuper.bind(this);
  }
  addSuper(request: MsgAddSuper): Promise<MsgAddSuperResponse> {
    const data = MsgAddSuper.encode(request).finish();
    const promise = this.rpc.request("irishub.guardian.Msg", "AddSuper", data);
    return promise.then(data => MsgAddSuperResponse.decode(new BinaryReader(data)));
  }
  deleteSuper(request: MsgDeleteSuper): Promise<MsgDeleteSuperResponse> {
    const data = MsgDeleteSuper.encode(request).finish();
    const promise = this.rpc.request("irishub.guardian.Msg", "DeleteSuper", data);
    return promise.then(data => MsgDeleteSuperResponse.decode(new BinaryReader(data)));
  }
}