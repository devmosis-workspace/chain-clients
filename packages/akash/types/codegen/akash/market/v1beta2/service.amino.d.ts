import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
export declare const AminoConverter: {
    "/akash.market.v1beta2.MsgCreateBid": {
        aminoType: string;
        toAmino: (message: MsgCreateBid) => import("./bid").MsgCreateBidAmino;
        fromAmino: (object: import("./bid").MsgCreateBidAmino) => MsgCreateBid;
    };
    "/akash.market.v1beta2.MsgCloseBid": {
        aminoType: string;
        toAmino: (message: MsgCloseBid) => import("./bid").MsgCloseBidAmino;
        fromAmino: (object: import("./bid").MsgCloseBidAmino) => MsgCloseBid;
    };
    "/akash.market.v1beta2.MsgWithdrawLease": {
        aminoType: string;
        toAmino: (message: MsgWithdrawLease) => import("./lease").MsgWithdrawLeaseAmino;
        fromAmino: (object: import("./lease").MsgWithdrawLeaseAmino) => MsgWithdrawLease;
    };
    "/akash.market.v1beta2.MsgCreateLease": {
        aminoType: string;
        toAmino: (message: MsgCreateLease) => import("./lease").MsgCreateLeaseAmino;
        fromAmino: (object: import("./lease").MsgCreateLeaseAmino) => MsgCreateLease;
    };
    "/akash.market.v1beta2.MsgCloseLease": {
        aminoType: string;
        toAmino: (message: MsgCloseLease) => import("./lease").MsgCloseLeaseAmino;
        fromAmino: (object: import("./lease").MsgCloseLeaseAmino) => MsgCloseLease;
    };
};
