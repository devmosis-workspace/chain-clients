export declare const createLCDClient: ({ restEndpoint }: {
    restEndpoint: string;
}) => Promise<{
    osmosis: {
        concentratedliquidity: {
            v1beta1: import("./concentratedliquidity/v1beta1/query.lcd").LCDQueryClient;
        };
        cosmwasmpool: {
            v1beta1: import("./cosmwasmpool/v1beta1/query.lcd").LCDQueryClient;
        };
        downtimedetector: {
            v1beta1: import("./downtimedetector/v1beta1/query.lcd").LCDQueryClient;
        };
        epochs: {
            v1beta1: import("./epochs/v1beta1/query.lcd").LCDQueryClient;
        };
        gamm: {
            v1beta1: import("./gamm/v1beta1/query.lcd").LCDQueryClient;
            v2: import("./gamm/v2/query.lcd").LCDQueryClient;
        };
        ibcratelimit: {
            v1beta1: import("./ibcratelimit/v1beta1/query.lcd").LCDQueryClient;
        };
        incentives: import("./incentives/query.lcd").LCDQueryClient;
        lockup: import("./lockup/query.lcd").LCDQueryClient;
        mint: {
            v1beta1: import("./mint/v1beta1/query.lcd").LCDQueryClient;
        };
        poolincentives: {
            v1beta1: import("./poolincentives/v1beta1/query.lcd").LCDQueryClient;
        };
        poolmanager: {
            v1beta1: import("./poolmanager/v1beta1/query.lcd").LCDQueryClient;
            v2: import("./poolmanager/v2/query.lcd").LCDQueryClient;
        };
        protorev: {
            v1beta1: import("./protorev/v1beta1/query.lcd").LCDQueryClient;
        };
        superfluid: import("./superfluid/query.lcd").LCDQueryClient;
        tokenfactory: {
            v1beta1: import("./tokenfactory/v1beta1/query.lcd").LCDQueryClient;
        };
        twap: {
            v1beta1: import("./twap/v1beta1/query.lcd").LCDQueryClient;
        };
        txfees: {
            v1beta1: import("./txfees/v1beta1/query.lcd").LCDQueryClient;
        };
        valsetpref: {
            v1beta1: import("./valsetpref/v1beta1/query.lcd").LCDQueryClient;
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
