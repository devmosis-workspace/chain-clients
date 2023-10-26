import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  dydxprotocol: {
    blocktime: new (await import("./blocktime/tx.rpc.msg")).MsgClientImpl(rpc),
    bridge: new (await import("./bridge/tx.rpc.msg")).MsgClientImpl(rpc),
    clob: new (await import("./clob/tx.rpc.msg")).MsgClientImpl(rpc),
    delaymsg: new (await import("./delaymsg/tx.rpc.msg")).MsgClientImpl(rpc),
    feetiers: new (await import("./feetiers/tx.rpc.msg")).MsgClientImpl(rpc),
    perpetuals: new (await import("./perpetuals/tx.rpc.msg")).MsgClientImpl(rpc),
    prices: new (await import("./prices/tx.rpc.msg")).MsgClientImpl(rpc),
    rewards: new (await import("./rewards/tx.rpc.msg")).MsgClientImpl(rpc),
    sending: new (await import("./sending/tx.rpc.msg")).MsgClientImpl(rpc),
    stats: new (await import("./stats/tx.rpc.msg")).MsgClientImpl(rpc),
    vest: new (await import("./vest/tx.rpc.msg")).MsgClientImpl(rpc)
  },
  cosmos: {
    auth: {
      v1beta1: new (await import("../cosmos/auth/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    authz: {
      v1beta1: new (await import("../cosmos/authz/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1beta1: new (await import("../cosmos/bank/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    consensus: {
      v1: new (await import("../cosmos/consensus/v1/tx.rpc.msg")).MsgClientImpl(rpc)
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
    mint: {
      v1beta1: new (await import("../cosmos/mint/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
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