export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    incentives: {
        v1: import("./v1/query.lcd").LCDQueryClient;
    };
    cosmos: {
        auth: {
            v1beta1: import("../cosmos/auth/v1beta1/query.lcd").LCDQueryClient;
        };
        authz: {
            v1beta1: import("../cosmos/authz/v1beta1/query.lcd").LCDQueryClient;
        };
        bank: {
            v1beta1: import("../cosmos/bank/v1beta1/query.lcd").LCDQueryClient;
        };
        base: {
            node: {
                v1beta1: import("../cosmos/base/node/v1beta1/query.lcd").LCDQueryClient;
            };
            tendermint: {
                v1beta1: import("../cosmos/base/tendermint/v1beta1/query.lcd").LCDQueryClient;
            };
        };
        distribution: {
            v1beta1: import("../cosmos/distribution/v1beta1/query.lcd").LCDQueryClient;
        };
        evidence: {
            v1beta1: import("../cosmos/evidence/v1beta1/query.lcd").LCDQueryClient;
        };
        feegrant: {
            v1beta1: import("../cosmos/feegrant/v1beta1/query.lcd").LCDQueryClient;
        };
        gov: {
            v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
        };
        params: {
            v1beta1: import("../cosmos/params/v1beta1/query.lcd").LCDQueryClient;
        };
        slashing: {
            v1beta1: import("../cosmos/slashing/v1beta1/query.lcd").LCDQueryClient;
        };
        staking: {
            v1beta1: import("../cosmos/staking/v1beta1/query.lcd").LCDQueryClient;
        };
        tx: {
            v1beta1: import("../cosmos/tx/v1beta1/service.lcd").LCDQueryClient;
        };
        upgrade: {
            v1beta1: import("../cosmos/upgrade/v1beta1/query.lcd").LCDQueryClient;
        };
    };
}>;
