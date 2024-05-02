import { Rpc } from "../helpers";
export const createRPCMsgClient = async ({
  rpc
}: {
  rpc: Rpc;
}) => ({
  shentu: {
    auth: {
      v1alpha1: new (await import("./auth/v1alpha1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bank: {
      v1alpha1: new (await import("./bank/v1alpha1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    bounty: {
      v1: new (await import("./bounty/v1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    cert: {
      v1alpha1: new (await import("./cert/v1alpha1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    cvm: {
      v1alpha1: new (await import("./cvm/v1alpha1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    oracle: {
      v1alpha1: new (await import("./oracle/v1alpha1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    shield: {
      v1alpha1: new (await import("./shield/v1alpha1/tx.rpc.msg")).MsgClientImpl(rpc)
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
      v1beta1: new (await import("../cosmos/gov/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    slashing: {
      v1beta1: new (await import("../cosmos/slashing/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    staking: {
      v1beta1: new (await import("../cosmos/staking/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    },
    vesting: {
      v1beta1: new (await import("../cosmos/vesting/v1beta1/tx.rpc.msg")).MsgClientImpl(rpc)
    }
  }
});