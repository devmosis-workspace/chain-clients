import { LCDClient } from "@osmonauts/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    em: {
      authority: {
        v1: new (await import("./authority/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      buyback: {
        v1: new (await import("./buyback/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      inflation: {
        v1: new (await import("./inflation/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      issuer: {
        v1: new (await import("./issuer/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      liquidityprovider: {
        v1: new (await import("./liquidityprovider/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      market: {
        v1: new (await import("./market/v1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      queries: {
        v1: new (await import("./queries/v1/query.lcd")).LCDQueryClient({
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
      bank: {
        v1beta1: new (await import("../cosmos/bank/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      base: {
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