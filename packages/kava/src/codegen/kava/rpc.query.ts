import { Tendermint34Client, HttpEndpoint } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate";
export const createRPCQueryClient = async ({
  rpcEndpoint
}: {
  rpcEndpoint: string | HttpEndpoint;
}) => {
  const tmClient = await Tendermint34Client.connect(rpcEndpoint);
  const client = new QueryClient(tmClient);
  return {
    kava: {
      auction: {
        v1beta1: (await import("./auction/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bep3: {
        v1beta1: (await import("./bep3/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      cdp: {
        v1beta1: (await import("./cdp/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      committee: {
        v1beta1: (await import("./committee/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      community: {
        v1beta1: (await import("./community/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      earn: {
        v1beta1: (await import("./earn/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evmutil: {
        v1beta1: (await import("./evmutil/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      hard: {
        v1beta1: (await import("./hard/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      incentive: {
        v1beta1: (await import("./incentive/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      issuance: {
        v1beta1: (await import("./issuance/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      kavadist: {
        v1beta1: (await import("./kavadist/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      liquid: {
        v1beta1: (await import("./liquid/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      pricefeed: {
        v1beta1: (await import("./pricefeed/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      savings: {
        v1beta1: (await import("./savings/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      swap: {
        v1beta1: (await import("./swap/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      validatorvesting: {
        v1beta1: (await import("./validatorvesting/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    },
    cosmos: {
      app: {
        v1alpha1: (await import("../cosmos/app/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      auth: {
        v1beta1: (await import("../cosmos/auth/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      authz: {
        v1beta1: (await import("../cosmos/authz/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      autocli: {
        v1: (await import("../cosmos/autocli/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      bank: {
        v1beta1: (await import("../cosmos/bank/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      base: {
        node: {
          v1beta1: (await import("../cosmos/base/node/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        },
        tendermint: {
          v1beta1: (await import("../cosmos/base/tendermint/v1beta1/query.rpc.Service")).createRpcQueryExtension(client)
        }
      },
      consensus: {
        v1: (await import("../cosmos/consensus/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      distribution: {
        v1beta1: (await import("../cosmos/distribution/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      evidence: {
        v1beta1: (await import("../cosmos/evidence/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      feegrant: {
        v1beta1: (await import("../cosmos/feegrant/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      gov: {
        v1: (await import("../cosmos/gov/v1/query.rpc.Query")).createRpcQueryExtension(client),
        v1beta1: (await import("../cosmos/gov/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      group: {
        v1: (await import("../cosmos/group/v1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      mint: {
        v1beta1: (await import("../cosmos/mint/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      nft: {
        v1beta1: (await import("../cosmos/nft/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      orm: {
        query: {
          v1alpha1: (await import("../cosmos/orm/query/v1alpha1/query.rpc.Query")).createRpcQueryExtension(client)
        }
      },
      params: {
        v1beta1: (await import("../cosmos/params/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      slashing: {
        v1beta1: (await import("../cosmos/slashing/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      staking: {
        v1beta1: (await import("../cosmos/staking/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      },
      tx: {
        v1beta1: (await import("../cosmos/tx/v1beta1/service.rpc.Service")).createRpcQueryExtension(client)
      },
      upgrade: {
        v1beta1: (await import("../cosmos/upgrade/v1beta1/query.rpc.Query")).createRpcQueryExtension(client)
      }
    }
  };
};