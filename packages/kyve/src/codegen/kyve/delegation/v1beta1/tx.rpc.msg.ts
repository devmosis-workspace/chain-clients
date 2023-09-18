import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgDelegate, MsgDelegateResponse, MsgWithdrawRewards, MsgWithdrawRewardsResponse, MsgUndelegate, MsgUndelegateResponse, MsgRedelegate, MsgRedelegateResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** Delegate ... */
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse>;
  /** Withdraw ... */
  withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse>;
  /** Undelegate ... */
  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse>;
  /** Redelegate ... */
  redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/delegation module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.delegate = this.delegate.bind(this);
    this.withdrawRewards = this.withdrawRewards.bind(this);
    this.undelegate = this.undelegate.bind(this);
    this.redelegate = this.redelegate.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  delegate(request: MsgDelegate): Promise<MsgDelegateResponse> {
    const data = MsgDelegate.encode(request).finish();
    const promise = this.rpc.request("kyve.delegation.v1beta1.Msg", "Delegate", data);
    return promise.then(data => MsgDelegateResponse.decode(new BinaryReader(data)));
  }
  withdrawRewards(request: MsgWithdrawRewards): Promise<MsgWithdrawRewardsResponse> {
    const data = MsgWithdrawRewards.encode(request).finish();
    const promise = this.rpc.request("kyve.delegation.v1beta1.Msg", "WithdrawRewards", data);
    return promise.then(data => MsgWithdrawRewardsResponse.decode(new BinaryReader(data)));
  }
  undelegate(request: MsgUndelegate): Promise<MsgUndelegateResponse> {
    const data = MsgUndelegate.encode(request).finish();
    const promise = this.rpc.request("kyve.delegation.v1beta1.Msg", "Undelegate", data);
    return promise.then(data => MsgUndelegateResponse.decode(new BinaryReader(data)));
  }
  redelegate(request: MsgRedelegate): Promise<MsgRedelegateResponse> {
    const data = MsgRedelegate.encode(request).finish();
    const promise = this.rpc.request("kyve.delegation.v1beta1.Msg", "Redelegate", data);
    return promise.then(data => MsgRedelegateResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("kyve.delegation.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}