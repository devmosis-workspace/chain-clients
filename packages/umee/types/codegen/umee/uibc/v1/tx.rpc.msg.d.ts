import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    govUpdateQuota(request: MsgGovUpdateQuota): Promise<MsgGovUpdateQuotaResponse>;
    govSetIBCStatus(request: MsgGovSetIBCStatus): Promise<MsgGovSetIBCStatusResponse>;
    govToggleICS20Hooks(request: MsgGovToggleICS20Hooks): Promise<MsgGovToggleICS20HooksResponse>;
}
