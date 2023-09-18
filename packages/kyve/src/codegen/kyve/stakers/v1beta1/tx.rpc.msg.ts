import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateStaker, MsgCreateStakerResponse, MsgUpdateMetadata, MsgUpdateMetadataResponse, MsgUpdateCommission, MsgUpdateCommissionResponse, MsgClaimCommissionRewards, MsgClaimCommissionRewardsResponse, MsgJoinPool, MsgJoinPoolResponse, MsgLeavePool, MsgLeavePoolResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  /** CreateStaker ... */
  createStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse>;
  /** UpdateMetadata ... */
  updateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse>;
  /** UpdateCommission ... */
  updateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse>;
  /** ClaimCommissionRewards ... */
  claimCommissionRewards(request: MsgClaimCommissionRewards): Promise<MsgClaimCommissionRewardsResponse>;
  /** JoinPool ... */
  joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse>;
  /** LeavePool ... */
  leavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/stakers module
   * parameters. The authority is hard-coded to the x/gov module account.
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createStaker = this.createStaker.bind(this);
    this.updateMetadata = this.updateMetadata.bind(this);
    this.updateCommission = this.updateCommission.bind(this);
    this.claimCommissionRewards = this.claimCommissionRewards.bind(this);
    this.joinPool = this.joinPool.bind(this);
    this.leavePool = this.leavePool.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createStaker(request: MsgCreateStaker): Promise<MsgCreateStakerResponse> {
    const data = MsgCreateStaker.encode(request).finish();
    const promise = this.rpc.request("kyve.stakers.v1beta1.Msg", "CreateStaker", data);
    return promise.then(data => MsgCreateStakerResponse.decode(new BinaryReader(data)));
  }
  updateMetadata(request: MsgUpdateMetadata): Promise<MsgUpdateMetadataResponse> {
    const data = MsgUpdateMetadata.encode(request).finish();
    const promise = this.rpc.request("kyve.stakers.v1beta1.Msg", "UpdateMetadata", data);
    return promise.then(data => MsgUpdateMetadataResponse.decode(new BinaryReader(data)));
  }
  updateCommission(request: MsgUpdateCommission): Promise<MsgUpdateCommissionResponse> {
    const data = MsgUpdateCommission.encode(request).finish();
    const promise = this.rpc.request("kyve.stakers.v1beta1.Msg", "UpdateCommission", data);
    return promise.then(data => MsgUpdateCommissionResponse.decode(new BinaryReader(data)));
  }
  claimCommissionRewards(request: MsgClaimCommissionRewards): Promise<MsgClaimCommissionRewardsResponse> {
    const data = MsgClaimCommissionRewards.encode(request).finish();
    const promise = this.rpc.request("kyve.stakers.v1beta1.Msg", "ClaimCommissionRewards", data);
    return promise.then(data => MsgClaimCommissionRewardsResponse.decode(new BinaryReader(data)));
  }
  joinPool(request: MsgJoinPool): Promise<MsgJoinPoolResponse> {
    const data = MsgJoinPool.encode(request).finish();
    const promise = this.rpc.request("kyve.stakers.v1beta1.Msg", "JoinPool", data);
    return promise.then(data => MsgJoinPoolResponse.decode(new BinaryReader(data)));
  }
  leavePool(request: MsgLeavePool): Promise<MsgLeavePoolResponse> {
    const data = MsgLeavePool.encode(request).finish();
    const promise = this.rpc.request("kyve.stakers.v1beta1.Msg", "LeavePool", data);
    return promise.then(data => MsgLeavePoolResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("kyve.stakers.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}