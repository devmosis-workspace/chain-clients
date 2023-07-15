import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    akash: {
        audit: {
            v1beta1: import("./audit/v1beta1/audit.rpc.msg").MsgClientImpl;
            v1beta2: import("./audit/v1beta2/audit.rpc.msg").MsgClientImpl;
        };
        cert: {
            v1beta2: import("./cert/v1beta2/cert.rpc.msg").MsgClientImpl;
        };
        deployment: {
            v1beta1: import("./deployment/v1beta1/deployment.rpc.msg").MsgClientImpl;
            v1beta2: import("./deployment/v1beta2/service.rpc.msg").MsgClientImpl;
        };
        market: {
            v1beta2: import("./market/v1beta2/service.rpc.msg").MsgClientImpl;
        };
        provider: {
            v1beta1: import("./provider/v1beta1/provider.rpc.msg").MsgClientImpl;
            v1beta2: import("./provider/v1beta2/provider.rpc.msg").MsgClientImpl;
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
