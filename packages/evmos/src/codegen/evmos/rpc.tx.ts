import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  evmos: {
    claims: {
      v1: new (await import("./claims/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    erc20: {
      v1: new (await import("./erc20/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    incentives: {
      v1: new (await import("./incentives/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    inflation: {
      v1: new (await import("./inflation/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    recovery: {
      v1: new (await import("./recovery/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    revenue: {
      v1: new (await import("./revenue/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1: new (await import("./vesting/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  },
  cosmos: {
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    crisis: {
      v1beta1: new (await import("../cosmos/crisis/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    distribution: {
      v1beta1: new (await import("../cosmos/distribution/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    evidence: {
      v1beta1: new (await import("../cosmos/evidence/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    feegrant: {
      v1beta1: new (await import("../cosmos/feegrant/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    gov: {
      v1: new (await import("../cosmos/gov/v1/tx.rpc.msg")).MsgClientImpl(rpc),
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    group: {
      v1: new (await import("../cosmos/group/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    nft: {
      v1beta1: new (await import("../cosmos/nft/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    upgrade: {
      v1beta1: new (await import("../cosmos/upgrade/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});