import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgGovUpdateQuota, MsgGovUpdateQuotaResponse, MsgGovSetIBCStatus, MsgGovSetIBCStatusResponse, MsgGovToggleICS20Hooks, MsgGovToggleICS20HooksResponse } from "./tx";
/** Msg defines the x/uibc module's Msg service. */
export interface Msg {
  /**
   * GovUpdateQuota adds new quota for ibc denoms or
   * updates the quota for existed ibc denoms.
   */
  govUpdateQuota(request: MsgGovUpdateQuota): Promise<MsgGovUpdateQuotaResponse>;
  /** GovSetIBCStatus sets IBC ICS20 status. Must be called by x/gov. */
  govSetIBCStatus(request: MsgGovSetIBCStatus): Promise<MsgGovSetIBCStatusResponse>;
  /** GovToggleICS20Hooks enables / disables ICS20 hooks support. Must be called by x/gov. */
  govToggleICS20Hooks(request: MsgGovToggleICS20Hooks): Promise<MsgGovToggleICS20HooksResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.govUpdateQuota = this.govUpdateQuota.bind(this);
    this.govSetIBCStatus = this.govSetIBCStatus.bind(this);
    this.govToggleICS20Hooks = this.govToggleICS20Hooks.bind(this);
  }
  govUpdateQuota(request: MsgGovUpdateQuota): Promise<MsgGovUpdateQuotaResponse> {
    const data = MsgGovUpdateQuota.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Msg", "GovUpdateQuota", data);
    return promise.then(data => MsgGovUpdateQuotaResponse.decode(new BinaryReader(data)));
  }
  govSetIBCStatus(request: MsgGovSetIBCStatus): Promise<MsgGovSetIBCStatusResponse> {
    const data = MsgGovSetIBCStatus.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Msg", "GovSetIBCStatus", data);
    return promise.then(data => MsgGovSetIBCStatusResponse.decode(new BinaryReader(data)));
  }
  govToggleICS20Hooks(request: MsgGovToggleICS20Hooks): Promise<MsgGovToggleICS20HooksResponse> {
    const data = MsgGovToggleICS20Hooks.encode(request).finish();
    const promise = this.rpc.request("umee.uibc.v1.Msg", "GovToggleICS20Hooks", data);
    return promise.then(data => MsgGovToggleICS20HooksResponse.decode(new BinaryReader(data)));
  }
}