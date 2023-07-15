import { Rpc } from "../../../helpers";
import { MsgRegisterRevenue, MsgRegisterRevenueResponse, MsgUpdateRevenue, MsgUpdateRevenueResponse, MsgCancelRevenue, MsgCancelRevenueResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the fees Msg service. */
export interface Msg {
    /** RegisterRevenue registers a new contract for receiving transaction fees */
    registerRevenue(request: MsgRegisterRevenue): Promise<MsgRegisterRevenueResponse>;
    /** UpdateRevenue updates the withdrawer address of a revenue */
    updateRevenue(request: MsgUpdateRevenue): Promise<MsgUpdateRevenueResponse>;
    /**
     * CancelRevenue cancels a contract's fee registration and further receival
     * of transaction fees
     */
    cancelRevenue(request: MsgCancelRevenue): Promise<MsgCancelRevenueResponse>;
    /**
     * UpdateParams defined a governance operation for updating the x/revenue module parameters.
     * The authority is hard-coded to the Cosmos SDK x/gov module account
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerRevenue(request: MsgRegisterRevenue): Promise<MsgRegisterRevenueResponse>;
    updateRevenue(request: MsgUpdateRevenue): Promise<MsgUpdateRevenueResponse>;
    cancelRevenue(request: MsgCancelRevenue): Promise<MsgCancelRevenueResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
