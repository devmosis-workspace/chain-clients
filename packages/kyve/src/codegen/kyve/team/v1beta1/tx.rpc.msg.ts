import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgClaimUnlocked, MsgClaimUnlockedResponse, MsgClawback, MsgClawbackResponse, MsgCreateTeamVestingAccount, MsgCreateTeamVestingAccountResponse, MsgClaimAuthorityRewards, MsgClaimAuthorityRewardsResponse, MsgClaimAccountRewards, MsgClaimAccountRewardsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** ClaimUnlocked ... */
  claimUnlocked(request: MsgClaimUnlocked): Promise<MsgClaimUnlockedResponse>;
  /** Clawback ... */
  clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
  /** CreateTeamVestingAccount ... */
  createTeamVestingAccount(request: MsgCreateTeamVestingAccount): Promise<MsgCreateTeamVestingAccountResponse>;
  /** ClaimAuthorityRewards ... */
  claimAuthorityRewards(request: MsgClaimAuthorityRewards): Promise<MsgClaimAuthorityRewardsResponse>;
  /** ClaimInflationRewards ... */
  claimAccountRewards(request: MsgClaimAccountRewards): Promise<MsgClaimAccountRewardsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claimUnlocked = this.claimUnlocked.bind(this);
    this.clawback = this.clawback.bind(this);
    this.createTeamVestingAccount = this.createTeamVestingAccount.bind(this);
    this.claimAuthorityRewards = this.claimAuthorityRewards.bind(this);
    this.claimAccountRewards = this.claimAccountRewards.bind(this);
  }
  claimUnlocked(request: MsgClaimUnlocked): Promise<MsgClaimUnlockedResponse> {
    const data = MsgClaimUnlocked.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Msg", "ClaimUnlocked", data);
    return promise.then(data => MsgClaimUnlockedResponse.decode(new _m0.Reader(data)));
  }
  clawback(request: MsgClawback): Promise<MsgClawbackResponse> {
    const data = MsgClawback.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Msg", "Clawback", data);
    return promise.then(data => MsgClawbackResponse.decode(new _m0.Reader(data)));
  }
  createTeamVestingAccount(request: MsgCreateTeamVestingAccount): Promise<MsgCreateTeamVestingAccountResponse> {
    const data = MsgCreateTeamVestingAccount.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Msg", "CreateTeamVestingAccount", data);
    return promise.then(data => MsgCreateTeamVestingAccountResponse.decode(new _m0.Reader(data)));
  }
  claimAuthorityRewards(request: MsgClaimAuthorityRewards): Promise<MsgClaimAuthorityRewardsResponse> {
    const data = MsgClaimAuthorityRewards.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Msg", "ClaimAuthorityRewards", data);
    return promise.then(data => MsgClaimAuthorityRewardsResponse.decode(new _m0.Reader(data)));
  }
  claimAccountRewards(request: MsgClaimAccountRewards): Promise<MsgClaimAccountRewardsResponse> {
    const data = MsgClaimAccountRewards.encode(request).finish();
    const promise = this.rpc.request("kyve.team.v1beta1.Msg", "ClaimAccountRewards", data);
    return promise.then(data => MsgClaimAccountRewardsResponse.decode(new _m0.Reader(data)));
  }
}