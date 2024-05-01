import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgInvestmint, MsgInvestmintResponse } from "./tx";
export interface Msg {
  investmint(request: MsgInvestmint): Promise<MsgInvestmintResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.investmint = this.investmint.bind(this);
  }
  investmint(request: MsgInvestmint): Promise<MsgInvestmintResponse> {
    const data = MsgInvestmint.encode(request).finish();
    const promise = this.rpc.request("cyber.resources.v1beta1.Msg", "Investmint", data);
    return promise.then(data => MsgInvestmintResponse.decode(new BinaryReader(data)));
  }
}