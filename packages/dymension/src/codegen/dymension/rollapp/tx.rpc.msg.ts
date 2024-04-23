import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreateRollapp, MsgCreateRollappResponse, MsgUpdateState, MsgUpdateStateResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createRollapp(request: MsgCreateRollapp): Promise<MsgCreateRollappResponse>;
  updateState(request: MsgUpdateState): Promise<MsgUpdateStateResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createRollapp = this.createRollapp.bind(this);
    this.updateState = this.updateState.bind(this);
  }
  createRollapp(request: MsgCreateRollapp): Promise<MsgCreateRollappResponse> {
    const data = MsgCreateRollapp.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.rollapp.Msg", "CreateRollapp", data);
    return promise.then(data => MsgCreateRollappResponse.decode(new BinaryReader(data)));
  }
  updateState(request: MsgUpdateState): Promise<MsgUpdateStateResponse> {
    const data = MsgUpdateState.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.rollapp.Msg", "UpdateState", data);
    return promise.then(data => MsgUpdateStateResponse.decode(new BinaryReader(data)));
  }
}