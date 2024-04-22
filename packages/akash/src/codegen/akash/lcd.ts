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
    akash: {
      audit: {
        v1beta2: new (await import("./audit/v1beta2/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta3: new (await import("./audit/v1beta3/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      cert: {
        v1beta2: new (await import("./cert/v1beta2/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta3: new (await import("./cert/v1beta3/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      deployment: {
        v1beta1: new (await import("./deployment/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta2: new (await import("./deployment/v1beta2/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta3: new (await import("./deployment/v1beta3/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      escrow: {
        v1beta1: new (await import("./escrow/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta2: new (await import("./escrow/v1beta2/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta3: new (await import("./escrow/v1beta3/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      market: {
        v1beta2: new (await import("./market/v1beta2/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta3: new (await import("./market/v1beta3/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta4: new (await import("./market/v1beta4/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      provider: {
        v1beta2: new (await import("./provider/v1beta2/query.lcd")).LCDQueryClient({
          requestClient
        }),
        v1beta3: new (await import("./provider/v1beta3/query.lcd")).LCDQueryClient({
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
        v1beta1: new (await import("../cosmos/gov/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      mint: {
        v1beta1: new (await import("../cosmos/mint/v1beta1/query.lcd")).LCDQueryClient({
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