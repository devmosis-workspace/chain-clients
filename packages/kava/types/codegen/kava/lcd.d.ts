export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    kava: {
        auction: {
            v1beta1: import("./auction/v1beta1/query.lcd").LCDQueryClient;
        };
        bep3: {
            v1beta1: import("./bep3/v1beta1/query.lcd").LCDQueryClient;
        };
        cdp: {
            v1beta1: import("./cdp/v1beta1/query.lcd").LCDQueryClient;
        };
        committee: {
            v1beta1: import("./committee/v1beta1/query.lcd").LCDQueryClient;
        };
        community: {
            v1beta1: import("./community/v1beta1/query.lcd").LCDQueryClient;
        };
        earn: {
            v1beta1: import("./earn/v1beta1/query.lcd").LCDQueryClient;
        };
        evmutil: {
            v1beta1: import("./evmutil/v1beta1/query.lcd").LCDQueryClient;
        };
        hard: {
            v1beta1: import("./hard/v1beta1/query.lcd").LCDQueryClient;
        };
        incentive: {
            v1beta1: import("./incentive/v1beta1/query.lcd").LCDQueryClient;
        };
        issuance: {
            v1beta1: import("./issuance/v1beta1/query.lcd").LCDQueryClient;
        };
        kavadist: {
            v1beta1: import("./kavadist/v1beta1/query.lcd").LCDQueryClient;
        };
        liquid: {
            v1beta1: import("./liquid/v1beta1/query.lcd").LCDQueryClient;
        };
        pricefeed: {
            v1beta1: import("./pricefeed/v1beta1/query.lcd").LCDQueryClient;
        };
        savings: {
            v1beta1: import("./savings/v1beta1/query.lcd").LCDQueryClient;
        };
        swap: {
            v1beta1: import("./swap/v1beta1/query.lcd").LCDQueryClient;
        };
        validatorvesting: {
            v1beta1: import("./validatorvesting/v1beta1/query.lcd").LCDQueryClient;
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
        consensus: {
            v1: import("../cosmos/consensus/v1/query.lcd").LCDQueryClient;
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
            v1: import("../cosmos/gov/v1/query.lcd").LCDQueryClient;
            v1beta1: import("../cosmos/gov/v1beta1/query.lcd").LCDQueryClient;
        };
        group: {
            v1: import("../cosmos/group/v1/query.lcd").LCDQueryClient;
        };
        mint: {
            v1beta1: import("../cosmos/mint/v1beta1/query.lcd").LCDQueryClient;
        };
        nft: {
            v1beta1: import("../cosmos/nft/v1beta1/query.lcd").LCDQueryClient;
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
