import { MsgLock, MsgBurn, MsgCreateEthBridgeClaim, MsgUpdateWhiteListValidator, MsgUpdateCethReceiverAccount, MsgRescueCeth, MsgSetBlacklist, MsgPause } from "./tx";
export const AminoConverter = {
  "/sifnode.ethbridge.v1.MsgLock": {
    aminoType: "/sifnode.ethbridge.v1.MsgLock",
    toAmino: MsgLock.toAmino,
    fromAmino: MsgLock.fromAmino
  },
  "/sifnode.ethbridge.v1.MsgBurn": {
    aminoType: "/sifnode.ethbridge.v1.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim": {
    aminoType: "/sifnode.ethbridge.v1.MsgCreateEthBridgeClaim",
    toAmino: MsgCreateEthBridgeClaim.toAmino,
    fromAmino: MsgCreateEthBridgeClaim.fromAmino
  },
  "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator": {
    aminoType: "/sifnode.ethbridge.v1.MsgUpdateWhiteListValidator",
    toAmino: MsgUpdateWhiteListValidator.toAmino,
    fromAmino: MsgUpdateWhiteListValidator.fromAmino
  },
  "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount": {
    aminoType: "/sifnode.ethbridge.v1.MsgUpdateCethReceiverAccount",
    toAmino: MsgUpdateCethReceiverAccount.toAmino,
    fromAmino: MsgUpdateCethReceiverAccount.fromAmino
  },
  "/sifnode.ethbridge.v1.MsgRescueCeth": {
    aminoType: "/sifnode.ethbridge.v1.MsgRescueCeth",
    toAmino: MsgRescueCeth.toAmino,
    fromAmino: MsgRescueCeth.fromAmino
  },
  "/sifnode.ethbridge.v1.MsgSetBlacklist": {
    aminoType: "/sifnode.ethbridge.v1.MsgSetBlacklist",
    toAmino: MsgSetBlacklist.toAmino,
    fromAmino: MsgSetBlacklist.fromAmino
  },
  "/sifnode.ethbridge.v1.MsgPause": {
    aminoType: "/sifnode.ethbridge.v1.MsgPause",
    toAmino: MsgPause.toAmino,
    fromAmino: MsgPause.fromAmino
  }
};