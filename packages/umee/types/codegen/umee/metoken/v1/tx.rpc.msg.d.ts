import { Rpc } from "../../../helpers";
import { MsgSwap, MsgSwapResponse, MsgRedeem, MsgRedeemResponse, MsgGovSetParams, MsgGovSetParamsResponse, MsgGovUpdateRegistry, MsgGovUpdateRegistryResponse } from "./tx";
/** Msg defines the x/metoken module's Msg service. */
export interface Msg {
    /** Swap defines a method for swapping an accepted asset for Index's meToken. */
    swap(request: MsgSwap): Promise<MsgSwapResponse>;
    /** Redeem defines a method for redeeming Index's meToken for an accepted asset. */
    redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
    /** GovSetParams is used by governance proposals to update parameters. */
    govSetParams(request: MsgGovSetParams): Promise<MsgGovSetParamsResponse>;
    /**
     * GovUpdateRegistry adds new index to the index registry or
     * updates existing index with new settings.
     */
    govUpdateRegistry(request: MsgGovUpdateRegistry): Promise<MsgGovUpdateRegistryResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    swap(request: MsgSwap): Promise<MsgSwapResponse>;
    redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
    govSetParams(request: MsgGovSetParams): Promise<MsgGovSetParamsResponse>;
    govUpdateRegistry(request: MsgGovUpdateRegistry): Promise<MsgGovUpdateRegistryResponse>;
}
