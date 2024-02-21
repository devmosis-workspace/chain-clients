import { Rpc } from "../helpers";
export declare const createRPCMsgClient: ({ rpc }: {
    rpc: Rpc;
}) => Promise<{
    osmosis: {
        concentratedliquidity: {
            poolmodel: {
                concentrated: {
                    v1beta1: import("./concentratedliquidity/poolmodel/concentrated/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            v1beta1: import("./concentratedliquidity/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        gamm: {
            poolmodels: {
                balancer: {
                    v1beta1: import("./gamm/poolmodels/balancer/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
                stableswap: {
                    v1beta1: import("./gamm/poolmodels/stableswap/v1beta1/tx.rpc.msg").MsgClientImpl;
                };
            };
            v1beta1: import("./gamm/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        ibchooks: import("./ibchooks/tx.rpc.msg").MsgClientImpl;
        incentives: import("./incentives/tx.rpc.msg").MsgClientImpl;
        lockup: import("./lockup/tx.rpc.msg").MsgClientImpl;
        poolmanager: {
            v1beta1: import("./poolmanager/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        protorev: {
            v1beta1: import("./protorev/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        superfluid: import("./superfluid/tx.rpc.msg").MsgClientImpl;
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/tx.rpc.msg").MsgClientImpl;
        };
        valsetpref: {
            v1beta1: import("./valsetpref/v1beta1/tx.rpc.msg").MsgClientImpl;
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
