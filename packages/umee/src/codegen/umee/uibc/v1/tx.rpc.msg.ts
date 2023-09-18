import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgGovUpdateQuota, MsgGovUpdateQuotaResponse, MsgGovSetIBCStatus, MsgGovSetIBCStatusResponse } from "./tx";
/** Msg defines the x/uibc module's Msg service. */
export interface Msg {
  /**
   * GovUpdateQuota adds new quota for ibc denoms or
   * updates the quota for existed ibc denoms.
   */
  govUpdateQuota(request: MsgGovUpdateQuota): Promise<MsgGovUpdateQuotaResponse>;
  /** GovSetIBCStatus sets IBC ICS20 status. Must be called by x/gov. */
  govSetIBCStatus(request: MsgGovSetIBCStatus): Promise<MsgGovSetIBCStatusResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.govUpdateQuota = this.govUpdateQuota.bind(this);
    this.govSetIBCStatus = this.govSetIBCStatus.bind(this);
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
}