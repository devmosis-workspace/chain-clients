import { MsgCreateBid, MsgCreateBidResponse, MsgCloseBid, MsgCloseBidResponse } from "./bid";
import { MsgWithdrawLease, MsgWithdrawLeaseResponse, MsgCreateLease, MsgCreateLeaseResponse, MsgCloseLease, MsgCloseLeaseResponse } from "./lease";
import { Rpc } from "../../../helpers";
/** Msg defines the market Msg service */
export interface Msg {
    /** CreateBid defines a method to create a bid given proper inputs. */
    createBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
    /** CloseBid defines a method to close a bid given proper inputs. */
    closeBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
    /** WithdrawLease withdraws accrued funds from the lease payment */
    withdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
    /** CreateLease creates a new lease */
    createLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
    /** CloseLease defines a method to close an order given proper inputs. */
    closeLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createBid(request: MsgCreateBid): Promise<MsgCreateBidResponse>;
    closeBid(request: MsgCloseBid): Promise<MsgCloseBidResponse>;
    withdrawLease(request: MsgWithdrawLease): Promise<MsgWithdrawLeaseResponse>;
    createLease(request: MsgCreateLease): Promise<MsgCreateLeaseResponse>;
    closeLease(request: MsgCloseLease): Promise<MsgCloseLeaseResponse>;
}
