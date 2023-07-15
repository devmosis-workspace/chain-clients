import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
import { AminoMsg } from "@cosmjs/amino";
export interface MsgCreateBidAminoType extends AminoMsg {
    type: "/akash.market.v1beta2.MsgCreateBid";
    value: {
        order: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
        };
        provider: string;
        price: {
            denom: string;
            amount: string;
        };
        deposit: {
            denom: string;
            amount: string;
        };
    };
}
export interface MsgCloseBidAminoType extends AminoMsg {
    type: "/akash.market.v1beta2.MsgCloseBid";
    value: {
        bid_id: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
            provider: string;
        };
    };
}
export interface MsgWithdrawLeaseAminoType extends AminoMsg {
    type: "/akash.market.v1beta2.MsgWithdrawLease";
    value: {
        bid_id: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
            provider: string;
        };
    };
}
export interface MsgCreateLeaseAminoType extends AminoMsg {
    type: "/akash.market.v1beta2.MsgCreateLease";
    value: {
        bid_id: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
            provider: string;
        };
    };
}
export interface MsgCloseLeaseAminoType extends AminoMsg {
    type: "/akash.market.v1beta2.MsgCloseLease";
    value: {
        lease_id: {
            owner: string;
            dseq: string;
            gseq: number;
            oseq: number;
            provider: string;
        };
    };
}
export declare const AminoConverter: {
    "/akash.market.v1beta2.MsgCreateBid": {
        aminoType: string;
        toAmino: ({ order, provider, price, deposit }: MsgCreateBid) => MsgCreateBidAminoType["value"];
        fromAmino: ({ order, provider, price, deposit }: MsgCreateBidAminoType["value"]) => MsgCreateBid;
    };
    "/akash.market.v1beta2.MsgCloseBid": {
        aminoType: string;
        toAmino: ({ bidId }: MsgCloseBid) => MsgCloseBidAminoType["value"];
        fromAmino: ({ bid_id }: MsgCloseBidAminoType["value"]) => MsgCloseBid;
    };
    "/akash.market.v1beta2.MsgWithdrawLease": {
        aminoType: string;
        toAmino: ({ bidId }: MsgWithdrawLease) => MsgWithdrawLeaseAminoType["value"];
        fromAmino: ({ bid_id }: MsgWithdrawLeaseAminoType["value"]) => MsgWithdrawLease;
    };
    "/akash.market.v1beta2.MsgCreateLease": {
        aminoType: string;
        toAmino: ({ bidId }: MsgCreateLease) => MsgCreateLeaseAminoType["value"];
        fromAmino: ({ bid_id }: MsgCreateLeaseAminoType["value"]) => MsgCreateLease;
    };
    "/akash.market.v1beta2.MsgCloseLease": {
        aminoType: string;
        toAmino: ({ leaseId }: MsgCloseLease) => MsgCloseLeaseAminoType["value"];
        fromAmino: ({ lease_id }: MsgCloseLeaseAminoType["value"]) => MsgCloseLease;
    };
};
