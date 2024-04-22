import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgScheduleCorkRequest, MsgScheduleCorkResponse } from "./tx";
/** MsgService defines the msgs that the cork module handles */
export interface Msg {
  scheduleCork(request: MsgScheduleCorkRequest): Promise<MsgScheduleCorkResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.scheduleCork = this.scheduleCork.bind(this);
  }
  scheduleCork(request: MsgScheduleCorkRequest): Promise<MsgScheduleCorkResponse> {
    const data = MsgScheduleCorkRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v2.Msg", "ScheduleCork", data);
    return promise.then(data => MsgScheduleCorkResponse.decode(new BinaryReader(data)));
  }
}