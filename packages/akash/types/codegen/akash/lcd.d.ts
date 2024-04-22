export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    akash: {
        audit: {
            v1beta2: import("./audit/v1beta2/query.lcd").LCDQueryClient;
            v1beta3: import("./audit/v1beta3/query.lcd").LCDQueryClient;
        };
        cert: {
            v1beta2: import("./cert/v1beta2/query.lcd").LCDQueryClient;
            v1beta3: import("./cert/v1beta3/query.lcd").LCDQueryClient;
        };
        deployment: {
            v1beta1: import("./deployment/v1beta1/query.lcd").LCDQueryClient;
            v1beta2: import("./deployment/v1beta2/query.lcd").LCDQueryClient;
            v1beta3: import("./deployment/v1beta3/query.lcd").LCDQueryClient;
        };
        escrow: {
            v1beta1: import("./escrow/v1beta1/query.lcd").LCDQueryClient;
            v1beta2: import("./escrow/v1beta2/query.lcd").LCDQueryClient;
            v1beta3: import("./escrow/v1beta3/query.lcd").LCDQueryClient;
        };
        market: {
            v1beta2: import("./market/v1beta2/query.lcd").LCDQueryClient;
            v1beta3: import("./market/v1beta3/query.lcd").LCDQueryClient;
            v1beta4: import("./market/v1beta4/query.lcd").LCDQueryClient;
        };
        provider: {
            v1beta2: import("./provider/v1beta2/query.lcd").LCDQueryClient;
            v1beta3: import("./provider/v1beta3/query.lcd").LCDQueryClient;
        };
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
