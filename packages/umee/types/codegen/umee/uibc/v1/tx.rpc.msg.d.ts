import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    govUpdateQuota(request: MsgGovUpdateQuota): Promise<MsgGovUpdateQuotaResponse>;
    govSetIBCStatus(request: MsgGovSetIBCStatus): Promise<MsgGovSetIBCStatusResponse>;
}
