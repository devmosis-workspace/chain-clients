import { Rpc } from "../../../helpers";
import { MsgCreateInsuranceFund, MsgCreateInsuranceFundResponse, MsgUnderwrite, MsgUnderwriteResponse, MsgRequestRedemption, MsgRequestRedemptionResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the insurance Msg service. */
export interface Msg {
    /** CreateInsuranceFund defines a method for creating an insurance fund */
    createInsuranceFund(request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse>;
    /**
     * Underwrite defines a method for depositing tokens to underwrite an
     * insurance fund
     */
    underwrite(request: MsgUnderwrite): Promise<MsgUnderwriteResponse>;
    /**
     * RequestRedemption defines a method for requesting a redemption of the
     * sender's insurance fund tokens
     */
    requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createInsuranceFund(request: MsgCreateInsuranceFund): Promise<MsgCreateInsuranceFundResponse>;
    underwrite(request: MsgUnderwrite): Promise<MsgUnderwriteResponse>;
    requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
