import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    injective: {
        auction: {
            v1beta1: import("./auction/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        exchange: {
            v1beta1: import("./exchange/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        insurance: {
            v1beta1: import("./insurance/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        ocr: {
            v1beta1: import("./ocr/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        oracle: {
            v1beta1: import("./oracle/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        peggy: {
            v1: import("./peggy/v1/msgs.rpc.msg").MsgClientImpl;
        };
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        wasmx: {
            v1: import("./wasmx/v1/tx.rpc.msg").MsgClientImpl;
        };
    };
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        consensus: {
            v1: import("../cosmos/consensus/v1/tx.rpc.msg").MsgClientImpl;
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
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/tx.rpc.msg").MsgClientImpl;
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
