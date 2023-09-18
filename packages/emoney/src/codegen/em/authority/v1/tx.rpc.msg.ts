import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateIssuer, MsgCreateIssuerResponse, MsgDestroyIssuer, MsgDestroyIssuerResponse, MsgSetGasPrices, MsgSetGasPricesResponse, MsgReplaceAuthority, MsgReplaceAuthorityResponse, MsgScheduleUpgrade, MsgScheduleUpgradeResponse, MsgSetParameters, MsgSetParametersResponse } from "./tx";
export interface Msg {
  createIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse>;
  destroyIssuer(request: MsgDestroyIssuer): Promise<MsgDestroyIssuerResponse>;
  setGasPrices(request: MsgSetGasPrices): Promise<MsgSetGasPricesResponse>;
  replaceAuthority(request: MsgReplaceAuthority): Promise<MsgReplaceAuthorityResponse>;
  scheduleUpgrade(request: MsgScheduleUpgrade): Promise<MsgScheduleUpgradeResponse>;
  setParameters(request: MsgSetParameters): Promise<MsgSetParametersResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createIssuer = this.createIssuer.bind(this);
    this.destroyIssuer = this.destroyIssuer.bind(this);
    this.setGasPrices = this.setGasPrices.bind(this);
    this.replaceAuthority = this.replaceAuthority.bind(this);
    this.scheduleUpgrade = this.scheduleUpgrade.bind(this);
    this.setParameters = this.setParameters.bind(this);
  }
  createIssuer(request: MsgCreateIssuer): Promise<MsgCreateIssuerResponse> {
    const data = MsgCreateIssuer.encode(request).finish();
    const promise = this.rpc.request("em.authority.v1.Msg", "CreateIssuer", data);
    return promise.then(data => MsgCreateIssuerResponse.decode(new BinaryReader(data)));
  }
  destroyIssuer(request: MsgDestroyIssuer): Promise<MsgDestroyIssuerResponse> {
    const data = MsgDestroyIssuer.encode(request).finish();
    const promise = this.rpc.request("em.authority.v1.Msg", "DestroyIssuer", data);
    return promise.then(data => MsgDestroyIssuerResponse.decode(new BinaryReader(data)));
  }
  setGasPrices(request: MsgSetGasPrices): Promise<MsgSetGasPricesResponse> {
    const data = MsgSetGasPrices.encode(request).finish();
    const promise = this.rpc.request("em.authority.v1.Msg", "SetGasPrices", data);
    return promise.then(data => MsgSetGasPricesResponse.decode(new BinaryReader(data)));
  }
  replaceAuthority(request: MsgReplaceAuthority): Promise<MsgReplaceAuthorityResponse> {
    const data = MsgReplaceAuthority.encode(request).finish();
    const promise = this.rpc.request("em.authority.v1.Msg", "ReplaceAuthority", data);
    return promise.then(data => MsgReplaceAuthorityResponse.decode(new BinaryReader(data)));
  }
  scheduleUpgrade(request: MsgScheduleUpgrade): Promise<MsgScheduleUpgradeResponse> {
    const data = MsgScheduleUpgrade.encode(request).finish();
    const promise = this.rpc.request("em.authority.v1.Msg", "ScheduleUpgrade", data);
    return promise.then(data => MsgScheduleUpgradeResponse.decode(new BinaryReader(data)));
  }
  setParameters(request: MsgSetParameters): Promise<MsgSetParametersResponse> {
    const data = MsgSetParameters.encode(request).finish();
    const promise = this.rpc.request("em.authority.v1.Msg", "SetParameters", data);
    return promise.then(data => MsgSetParametersResponse.decode(new BinaryReader(data)));
  }
}