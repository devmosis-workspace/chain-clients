import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateCampaign, MsgCreateCampaignResponse, MsgCancelCampaign, MsgCancelCampaignResponse, MsgClaim, MsgClaimResponse, MsgDepositCampaign, MsgDepositCampaignResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export interface Msg {
  createCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
  cancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse>;
  claim(request: MsgClaim): Promise<MsgClaimResponse>;
  depositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/itc module
   * parameters. The authority is hard-coded to the x/gov module account.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createCampaign = this.createCampaign.bind(this);
    this.cancelCampaign = this.cancelCampaign.bind(this);
    this.claim = this.claim.bind(this);
    this.depositCampaign = this.depositCampaign.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  createCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse> {
    const data = MsgCreateCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CreateCampaign", data);
    return promise.then(data => MsgCreateCampaignResponse.decode(new BinaryReader(data)));
  }
  cancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse> {
    const data = MsgCancelCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CancelCampaign", data);
    return promise.then(data => MsgCancelCampaignResponse.decode(new BinaryReader(data)));
  }
  claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new BinaryReader(data)));
  }
  depositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse> {
    const data = MsgDepositCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "DepositCampaign", data);
    return promise.then(data => MsgDepositCampaignResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}