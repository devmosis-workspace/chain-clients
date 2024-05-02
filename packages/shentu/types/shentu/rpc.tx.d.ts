import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    shentu: {
        auth: {
            v1alpha1: import("./auth/v1alpha1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
            v1alpha1: import("./bank/v1alpha1/tx.rpc.msg").MsgClientImpl;
        };
        bounty: {
            v1: import("./bounty/v1/tx.rpc.msg").MsgClientImpl;
        };
        cert: {
            v1alpha1: import("./cert/v1alpha1/tx.rpc.msg").MsgClientImpl;
        };
        cvm: {
            v1alpha1: import("./cvm/v1alpha1/tx.rpc.msg").MsgClientImpl;
        };
        oracle: {
            v1alpha1: import("./oracle/v1alpha1/tx.rpc.msg").MsgClientImpl;
        };
        shield: {
            v1alpha1: import("./shield/v1alpha1/tx.rpc.msg").MsgClientImpl;
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
            v1beta1: import("../cosmos/gov/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        vesting: {
            v1beta1: import("../cosmos/vesting/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
    };
}>;
