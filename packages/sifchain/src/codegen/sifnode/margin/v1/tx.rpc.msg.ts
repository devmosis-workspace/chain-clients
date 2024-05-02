import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgOpen, MsgOpenResponse, MsgClose, MsgCloseResponse, MsgForceClose, MsgForceCloseResponse, MsgUpdateParams, MsgUpdateParamsResponse, MsgUpdatePools, MsgUpdatePoolsResponse, MsgUpdateRowanCollateral, MsgUpdateRowanCollateralResponse, MsgWhitelist, MsgWhitelistResponse, MsgDewhitelist, MsgDewhitelistResponse, MsgAdminClose, MsgAdminCloseResponse, MsgAdminCloseAll, MsgAdminCloseAllResponse } from "./tx";
export interface Msg {
  open(request: MsgOpen): Promise<MsgOpenResponse>;
  close(request: MsgClose): Promise<MsgCloseResponse>;
  forceClose(request: MsgForceClose): Promise<MsgForceCloseResponse>;
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
  updatePools(request: MsgUpdatePools): Promise<MsgUpdatePoolsResponse>;
  updateRowanCollateral(request: MsgUpdateRowanCollateral): Promise<MsgUpdateRowanCollateralResponse>;
  whitelist(request: MsgWhitelist): Promise<MsgWhitelistResponse>;
  dewhitelist(request: MsgDewhitelist): Promise<MsgDewhitelistResponse>;
  adminClose(request: MsgAdminClose): Promise<MsgAdminCloseResponse>;
  adminCloseAll(request: MsgAdminCloseAll): Promise<MsgAdminCloseAllResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
    this.forceClose = this.forceClose.bind(this);
    this.updateParams = this.updateParams.bind(this);
    this.updatePools = this.updatePools.bind(this);
    this.updateRowanCollateral = this.updateRowanCollateral.bind(this);
    this.whitelist = this.whitelist.bind(this);
    this.dewhitelist = this.dewhitelist.bind(this);
    this.adminClose = this.adminClose.bind(this);
    this.adminCloseAll = this.adminCloseAll.bind(this);
  }
  open(request: MsgOpen): Promise<MsgOpenResponse> {
    const data = MsgOpen.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "Open", data);
    return promise.then(data => MsgOpenResponse.decode(new BinaryReader(data)));
  }
  close(request: MsgClose): Promise<MsgCloseResponse> {
    const data = MsgClose.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "Close", data);
    return promise.then(data => MsgCloseResponse.decode(new BinaryReader(data)));
  }
  forceClose(request: MsgForceClose): Promise<MsgForceCloseResponse> {
    const data = MsgForceClose.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "ForceClose", data);
    return promise.then(data => MsgForceCloseResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
  updatePools(request: MsgUpdatePools): Promise<MsgUpdatePoolsResponse> {
    const data = MsgUpdatePools.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "UpdatePools", data);
    return promise.then(data => MsgUpdatePoolsResponse.decode(new BinaryReader(data)));
  }
  updateRowanCollateral(request: MsgUpdateRowanCollateral): Promise<MsgUpdateRowanCollateralResponse> {
    const data = MsgUpdateRowanCollateral.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "UpdateRowanCollateral", data);
    return promise.then(data => MsgUpdateRowanCollateralResponse.decode(new BinaryReader(data)));
  }
  whitelist(request: MsgWhitelist): Promise<MsgWhitelistResponse> {
    const data = MsgWhitelist.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "Whitelist", data);
    return promise.then(data => MsgWhitelistResponse.decode(new BinaryReader(data)));
  }
  dewhitelist(request: MsgDewhitelist): Promise<MsgDewhitelistResponse> {
    const data = MsgDewhitelist.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "Dewhitelist", data);
    return promise.then(data => MsgDewhitelistResponse.decode(new BinaryReader(data)));
  }
  adminClose(request: MsgAdminClose): Promise<MsgAdminCloseResponse> {
    const data = MsgAdminClose.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "AdminClose", data);
    return promise.then(data => MsgAdminCloseResponse.decode(new BinaryReader(data)));
  }
  adminCloseAll(request: MsgAdminCloseAll): Promise<MsgAdminCloseAllResponse> {
    const data = MsgAdminCloseAll.encode(request).finish();
    const promise = this.rpc.request("sifnode.margin.v1.Msg", "AdminCloseAll", data);
    return promise.then(data => MsgAdminCloseAllResponse.decode(new BinaryReader(data)));
  }
}