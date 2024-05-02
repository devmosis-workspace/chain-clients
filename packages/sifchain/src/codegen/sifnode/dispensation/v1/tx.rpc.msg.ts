import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateDistribution, MsgCreateDistributionResponse, MsgCreateUserClaim, MsgCreateClaimResponse, MsgRunDistribution, MsgRunDistributionResponse } from "./tx";
export interface Msg {
  createDistribution(request: MsgCreateDistribution): Promise<MsgCreateDistributionResponse>;
  createUserClaim(request: MsgCreateUserClaim): Promise<MsgCreateClaimResponse>;
  runDistribution(request: MsgRunDistribution): Promise<MsgRunDistributionResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDistribution = this.createDistribution.bind(this);
    this.createUserClaim = this.createUserClaim.bind(this);
    this.runDistribution = this.runDistribution.bind(this);
  }
  createDistribution(request: MsgCreateDistribution): Promise<MsgCreateDistributionResponse> {
    const data = MsgCreateDistribution.encode(request).finish();
    const promise = this.rpc.request("sifnode.dispensation.v1.Msg", "CreateDistribution", data);
    return promise.then(data => MsgCreateDistributionResponse.decode(new BinaryReader(data)));
  }
  createUserClaim(request: MsgCreateUserClaim): Promise<MsgCreateClaimResponse> {
    const data = MsgCreateUserClaim.encode(request).finish();
    const promise = this.rpc.request("sifnode.dispensation.v1.Msg", "CreateUserClaim", data);
    return promise.then(data => MsgCreateClaimResponse.decode(new BinaryReader(data)));
  }
  runDistribution(request: MsgRunDistribution): Promise<MsgRunDistributionResponse> {
    const data = MsgRunDistribution.encode(request).finish();
    const promise = this.rpc.request("sifnode.dispensation.v1.Msg", "RunDistribution", data);
    return promise.then(data => MsgRunDistributionResponse.decode(new BinaryReader(data)));
  }
}