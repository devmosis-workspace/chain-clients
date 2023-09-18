import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgSubmitCorkRequest, MsgSubmitCorkResponse, MsgScheduleCorkRequest, MsgScheduleCorkResponse } from "./tx";
/** MsgService defines the msgs that the cork module handles */
export interface Msg {
  submitCork(request: MsgSubmitCorkRequest): Promise<MsgSubmitCorkResponse>;
  scheduleCork(request: MsgScheduleCorkRequest): Promise<MsgScheduleCorkResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitCork = this.submitCork.bind(this);
    this.scheduleCork = this.scheduleCork.bind(this);
  }
  submitCork(request: MsgSubmitCorkRequest): Promise<MsgSubmitCorkResponse> {
    const data = MsgSubmitCorkRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v1.Msg", "SubmitCork", data);
    return promise.then(data => MsgSubmitCorkResponse.decode(new BinaryReader(data)));
  }
  scheduleCork(request: MsgScheduleCorkRequest): Promise<MsgScheduleCorkResponse> {
    const data = MsgScheduleCorkRequest.encode(request).finish();
    const promise = this.rpc.request("cork.v1.Msg", "ScheduleCork", data);
    return promise.then(data => MsgScheduleCorkResponse.decode(new BinaryReader(data)));
  }
}