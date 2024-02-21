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
    dydxprotocol: {
      assets: new (await import("./assets/query.lcd")).LCDQueryClient({
        requestClient
      }),
      blocktime: new (await import("./blocktime/query.lcd")).LCDQueryClient({
        requestClient
      }),
      bridge: new (await import("./bridge/query.lcd")).LCDQueryClient({
        requestClient
      }),
      clob: new (await import("./clob/query.lcd")).LCDQueryClient({
        requestClient
      }),
      delaymsg: new (await import("./delaymsg/query.lcd")).LCDQueryClient({
        requestClient
      }),
      epochs: new (await import("./epochs/query.lcd")).LCDQueryClient({
        requestClient
      }),
      feetiers: new (await import("./feetiers/query.lcd")).LCDQueryClient({
        requestClient
      }),
      perpetuals: new (await import("./perpetuals/query.lcd")).LCDQueryClient({
        requestClient
      }),
      prices: new (await import("./prices/query.lcd")).LCDQueryClient({
        requestClient
      }),
      ratelimit: new (await import("./ratelimit/query.lcd")).LCDQueryClient({
        requestClient
      }),
      rewards: new (await import("./rewards/query.lcd")).LCDQueryClient({
        requestClient
      }),
      stats: new (await import("./stats/query.lcd")).LCDQueryClient({
        requestClient
      }),
      subaccounts: new (await import("./subaccounts/query.lcd")).LCDQueryClient({
        requestClient
      }),
      vest: new (await import("./vest/query.lcd")).LCDQueryClient({
        requestClient
      })
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