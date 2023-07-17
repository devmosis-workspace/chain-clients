import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgToggleIbcSwitch, MsgToggleIbcSwitchResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** ToggleIbcSwitch defines a method for toggling the status of the emergencybutton. */
  toggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.toggleIbcSwitch = this.toggleIbcSwitch.bind(this);
  }
  toggleIbcSwitch(request: MsgToggleIbcSwitch): Promise<MsgToggleIbcSwitchResponse> {
    const data = MsgToggleIbcSwitch.encode(request).finish();
    const promise = this.rpc.request("secret.emergencybutton.v1beta1.Msg", "ToggleIbcSwitch", data);
    return promise.then(data => MsgToggleIbcSwitchResponse.decode(new _m0.Reader(data)));
  }
}