import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    kyve: {
        bundles: {
            v1beta1: import("./bundles/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        delegation: {
            v1beta1: import("./delegation/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        global: {
            v1beta1: import("./global/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        pool: {
            v1beta1: import("./pool/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        stakers: {
            v1beta1: import("./stakers/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        team: {
            v1beta1: import("./team/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
    cosmos: {
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        crisis: {
            v1beta1: import("../cosmos/crisis/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        gov: {
            v1: import("../cosmos/gov/v1/tx.rpc.msg").MsgClientImpl;
            v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        group: {
            v1: import("../cosmos/group/v1/tx.rpc.msg").MsgClientImpl;
        };
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        vesting: {
            v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
}>;
