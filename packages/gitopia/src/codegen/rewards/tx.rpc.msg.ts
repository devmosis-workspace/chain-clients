import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
import { MsgClaim, MsgClaimResponse, MsgCreateReward, MsgCreateRewardResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  claim(request: MsgClaim): Promise<MsgClaimResponse>;
  createReward(request: MsgCreateReward): Promise<MsgCreateRewardResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/rewards module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claim = this.claim.bind(this);
    this.createReward = this.createReward.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.rewards.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new BinaryReader(data)));
  }
  createReward(request: MsgCreateReward): Promise<MsgCreateRewardResponse> {
    const data = MsgCreateReward.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.rewards.Msg", "CreateReward", data);
    return promise.then(data => MsgCreateRewardResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("gitopia.gitopia.rewards.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}