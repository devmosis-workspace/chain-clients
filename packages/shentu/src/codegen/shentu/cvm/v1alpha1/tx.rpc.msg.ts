import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCall, MsgCallResponse, MsgDeploy, MsgDeployResponse } from "./tx";
export interface Msg {
  call(request: MsgCall): Promise<MsgCallResponse>;
  deploy(request: MsgDeploy): Promise<MsgDeployResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.call = this.call.bind(this);
    this.deploy = this.deploy.bind(this);
  }
  call(request: MsgCall): Promise<MsgCallResponse> {
    const data = MsgCall.encode(request).finish();
    const promise = this.rpc.request("shentu.cvm.v1alpha1.Msg", "Call", data);
    return promise.then(data => MsgCallResponse.decode(new BinaryReader(data)));
  }
  deploy(request: MsgDeploy): Promise<MsgDeployResponse> {
    const data = MsgDeploy.encode(request).finish();
    const promise = this.rpc.request("shentu.cvm.v1alpha1.Msg", "Deploy", data);
    return promise.then(data => MsgDeployResponse.decode(new BinaryReader(data)));
  }
}