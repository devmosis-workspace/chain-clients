import { Rpc } from "../../../helpers";
import { MsgCreateEscrow, MsgCreateEscrowResponse, MsgUpdateEscrow, MsgUpdateEscrowResponse, MsgTransferToEscrow, MsgTransferToEscrowResponse, MsgRefundEscrow, MsgRefundEscrowResponse } from "./tx";
/** Msg defines the escrow Msg service */
export interface Msg {
    /** CreateEscrow defines a method for creating an escrow */
    createEscrow(request: MsgCreateEscrow): Promise<MsgCreateEscrowResponse>;
    /** UpdateEscrow defines a method for updating an escrow */
    updateEscrow(request: MsgUpdateEscrow): Promise<MsgUpdateEscrowResponse>;
    /**
     * TransferToEscrow defines a method for a buyer to transfer funds to the
     * escrow
     */
    transferToEscrow(request: MsgTransferToEscrow): Promise<MsgTransferToEscrowResponse>;
    /**
     * RefundEscrow defines a method for the seller to return the assets locked in
     * the escrow
     */
    refundEscrow(request: MsgRefundEscrow): Promise<MsgRefundEscrowResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createEscrow(request: MsgCreateEscrow): Promise<MsgCreateEscrowResponse>;
    updateEscrow(request: MsgUpdateEscrow): Promise<MsgUpdateEscrowResponse>;
    transferToEscrow(request: MsgTransferToEscrow): Promise<MsgTransferToEscrowResponse>;
    refundEscrow(request: MsgRefundEscrow): Promise<MsgRefundEscrowResponse>;
}
