import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    kava: {
      auction: {
        v1beta1: new (await import("./auction/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bep3: {
        v1beta1: new (await import("./bep3/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      cdp: {
        v1beta1: new (await import("./cdp/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      committee: {
        v1beta1: new (await import("./committee/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      community: {
        v1beta1: new (await import("./community/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      earn: {
        v1beta1: new (await import("./earn/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      evmutil: {
        v1beta1: new (await import("./evmutil/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      hard: {
        v1beta1: new (await import("./hard/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      incentive: {
        v1beta1: new (await import("./incentive/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      issuance: {
        v1beta1: new (await import("./issuance/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      kavadist: {
        v1beta1: new (await import("./kavadist/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      liquid: {
        v1beta1: new (await import("./liquid/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      pricefeed: {
        v1beta1: new (await import("./pricefeed/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      savings: {
        v1beta1: new (await import("./savings/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      swap: {
        v1beta1: new (await import("./swap/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      validatorvesting: {
        v1beta1: new (await import("./validatorvesting/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    },
    cosmos: {
      auth: {
        v1beta1: new (await import("../cosmos/auth/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      authz: {
        v1beta1: new (await import("../cosmos/authz/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
        node: {
          v1beta1: new (await import("../cosmos/base/node/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        },
        tendermint: {
          v1beta1: new (await import("../cosmos/base/tendermint/v1beta1/query.lcd")).LCDQueryClient({
            requestClient
          })
        }
      },
      consensus: {
        v1: new (await import("../cosmos/consensus/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      distribution: {
        v1beta1: new (await import("../cosmos/distribution/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      evidence: {
        v1beta1: new (await import("../cosmos/evidence/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      feegrant: {
        v1beta1: new (await import("../cosmos/feegrant/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      gov: {
        v1: new (await import("../cosmos/gov/v1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      group: {
        v1: new (await import("../cosmos/group/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      nft: {
        v1beta1: new (await import("../cosmos/nft/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      params: {
        v1beta1: new (await import("../cosmos/params/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      slashing: {
        v1beta1: new (await import("../cosmos/slashing/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      staking: {
        v1beta1: new (await import("../cosmos/staking/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      tx: {
        v1beta1: new (await import("../cosmos/tx/v1beta1/service.lcd")).LCDQueryClient({
          requestClient
        })
      },
      upgrade: {
        v1beta1: new (await import("../cosmos/upgrade/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};