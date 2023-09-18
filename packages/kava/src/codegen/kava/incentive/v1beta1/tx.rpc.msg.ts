import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgClaimUSDXMintingReward, MsgClaimUSDXMintingRewardResponse, MsgClaimHardReward, MsgClaimHardRewardResponse, MsgClaimDelegatorReward, MsgClaimDelegatorRewardResponse, MsgClaimSwapReward, MsgClaimSwapRewardResponse, MsgClaimSavingsReward, MsgClaimSavingsRewardResponse, MsgClaimEarnReward, MsgClaimEarnRewardResponse } from "./tx";
/** Msg defines the incentive Msg service. */
export interface Msg {
  /** ClaimUSDXMintingReward is a message type used to claim USDX minting rewards */
  claimUSDXMintingReward(request: MsgClaimUSDXMintingReward): Promise<MsgClaimUSDXMintingRewardResponse>;
  /** ClaimHardReward is a message type used to claim Hard liquidity provider rewards */
  claimHardReward(request: MsgClaimHardReward): Promise<MsgClaimHardRewardResponse>;
  /** ClaimDelegatorReward is a message type used to claim delegator rewards */
  claimDelegatorReward(request: MsgClaimDelegatorReward): Promise<MsgClaimDelegatorRewardResponse>;
  /** ClaimSwapReward is a message type used to claim swap rewards */
  claimSwapReward(request: MsgClaimSwapReward): Promise<MsgClaimSwapRewardResponse>;
  /** ClaimSavingsReward is a message type used to claim savings rewards */
  claimSavingsReward(request: MsgClaimSavingsReward): Promise<MsgClaimSavingsRewardResponse>;
  /** ClaimEarnReward is a message type used to claim earn rewards */
  claimEarnReward(request: MsgClaimEarnReward): Promise<MsgClaimEarnRewardResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claimUSDXMintingReward = this.claimUSDXMintingReward.bind(this);
    this.claimHardReward = this.claimHardReward.bind(this);
    this.claimDelegatorReward = this.claimDelegatorReward.bind(this);
    this.claimSwapReward = this.claimSwapReward.bind(this);
    this.claimSavingsReward = this.claimSavingsReward.bind(this);
    this.claimEarnReward = this.claimEarnReward.bind(this);
  }
  claimUSDXMintingReward(request: MsgClaimUSDXMintingReward): Promise<MsgClaimUSDXMintingRewardResponse> {
    const data = MsgClaimUSDXMintingReward.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Msg", "ClaimUSDXMintingReward", data);
    return promise.then(data => MsgClaimUSDXMintingRewardResponse.decode(new BinaryReader(data)));
  }
  claimHardReward(request: MsgClaimHardReward): Promise<MsgClaimHardRewardResponse> {
    const data = MsgClaimHardReward.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Msg", "ClaimHardReward", data);
    return promise.then(data => MsgClaimHardRewardResponse.decode(new BinaryReader(data)));
  }
  claimDelegatorReward(request: MsgClaimDelegatorReward): Promise<MsgClaimDelegatorRewardResponse> {
    const data = MsgClaimDelegatorReward.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Msg", "ClaimDelegatorReward", data);
    return promise.then(data => MsgClaimDelegatorRewardResponse.decode(new BinaryReader(data)));
  }
  claimSwapReward(request: MsgClaimSwapReward): Promise<MsgClaimSwapRewardResponse> {
    const data = MsgClaimSwapReward.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Msg", "ClaimSwapReward", data);
    return promise.then(data => MsgClaimSwapRewardResponse.decode(new BinaryReader(data)));
  }
  claimSavingsReward(request: MsgClaimSavingsReward): Promise<MsgClaimSavingsRewardResponse> {
    const data = MsgClaimSavingsReward.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Msg", "ClaimSavingsReward", data);
    return promise.then(data => MsgClaimSavingsRewardResponse.decode(new BinaryReader(data)));
  }
  claimEarnReward(request: MsgClaimEarnReward): Promise<MsgClaimEarnRewardResponse> {
    const data = MsgClaimEarnReward.encode(request).finish();
    const promise = this.rpc.request("kava.incentive.v1beta1.Msg", "ClaimEarnReward", data);
    return promise.then(data => MsgClaimEarnRewardResponse.decode(new BinaryReader(data)));
  }
}