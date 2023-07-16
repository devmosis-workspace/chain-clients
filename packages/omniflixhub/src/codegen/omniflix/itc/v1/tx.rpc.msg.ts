import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateCampaign, MsgCreateCampaignResponse, MsgCancelCampaign, MsgCancelCampaignResponse, MsgClaim, MsgClaimResponse, MsgDepositCampaign, MsgDepositCampaignResponse } from "./tx";
export interface Msg {
  createCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse>;
  cancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse>;
  claim(request: MsgClaim): Promise<MsgClaimResponse>;
  depositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createCampaign = this.createCampaign.bind(this);
    this.cancelCampaign = this.cancelCampaign.bind(this);
    this.claim = this.claim.bind(this);
    this.depositCampaign = this.depositCampaign.bind(this);
  }
  createCampaign(request: MsgCreateCampaign): Promise<MsgCreateCampaignResponse> {
    const data = MsgCreateCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CreateCampaign", data);
    return promise.then(data => MsgCreateCampaignResponse.decode(new _m0.Reader(data)));
  }
  cancelCampaign(request: MsgCancelCampaign): Promise<MsgCancelCampaignResponse> {
    const data = MsgCancelCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "CancelCampaign", data);
    return promise.then(data => MsgCancelCampaignResponse.decode(new _m0.Reader(data)));
  }
  claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new _m0.Reader(data)));
  }
  depositCampaign(request: MsgDepositCampaign): Promise<MsgDepositCampaignResponse> {
    const data = MsgDepositCampaign.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.itc.v1.Msg", "DepositCampaign", data);
    return promise.then(data => MsgDepositCampaignResponse.decode(new _m0.Reader(data)));
  }
}