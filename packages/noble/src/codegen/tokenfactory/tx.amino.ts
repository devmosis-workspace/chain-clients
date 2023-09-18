import { MsgUpdateMasterMinter, MsgUpdatePauser, MsgUpdateBlacklister, MsgUpdateOwner, MsgAcceptOwner, MsgConfigureMinter, MsgRemoveMinter, MsgMint, MsgBurn, MsgBlacklist, MsgUnblacklist, MsgPause, MsgUnpause, MsgConfigureMinterController, MsgRemoveMinterController } from "./tx";
export const AminoConverter = {
  "/noble.tokenfactory.MsgUpdateMasterMinter": {
    aminoType: "/noble.tokenfactory.MsgUpdateMasterMinter",
    toAmino: MsgUpdateMasterMinter.toAmino,
    fromAmino: MsgUpdateMasterMinter.fromAmino
  },
  "/noble.tokenfactory.MsgUpdatePauser": {
    aminoType: "/noble.tokenfactory.MsgUpdatePauser",
    toAmino: MsgUpdatePauser.toAmino,
    fromAmino: MsgUpdatePauser.fromAmino
  },
  "/noble.tokenfactory.MsgUpdateBlacklister": {
    aminoType: "/noble.tokenfactory.MsgUpdateBlacklister",
    toAmino: MsgUpdateBlacklister.toAmino,
    fromAmino: MsgUpdateBlacklister.fromAmino
  },
  "/noble.tokenfactory.MsgUpdateOwner": {
    aminoType: "/noble.tokenfactory.MsgUpdateOwner",
    toAmino: MsgUpdateOwner.toAmino,
    fromAmino: MsgUpdateOwner.fromAmino
  },
  "/noble.tokenfactory.MsgAcceptOwner": {
    aminoType: "/noble.tokenfactory.MsgAcceptOwner",
    toAmino: MsgAcceptOwner.toAmino,
    fromAmino: MsgAcceptOwner.fromAmino
  },
  "/noble.tokenfactory.MsgConfigureMinter": {
    aminoType: "/noble.tokenfactory.MsgConfigureMinter",
    toAmino: MsgConfigureMinter.toAmino,
    fromAmino: MsgConfigureMinter.fromAmino
  },
  "/noble.tokenfactory.MsgRemoveMinter": {
    aminoType: "/noble.tokenfactory.MsgRemoveMinter",
    toAmino: MsgRemoveMinter.toAmino,
    fromAmino: MsgRemoveMinter.fromAmino
  },
  "/noble.tokenfactory.MsgMint": {
    aminoType: "/noble.tokenfactory.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/noble.tokenfactory.MsgBurn": {
    aminoType: "/noble.tokenfactory.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/noble.tokenfactory.MsgBlacklist": {
    aminoType: "/noble.tokenfactory.MsgBlacklist",
    toAmino: MsgBlacklist.toAmino,
    fromAmino: MsgBlacklist.fromAmino
  },
  "/noble.tokenfactory.MsgUnblacklist": {
    aminoType: "/noble.tokenfactory.MsgUnblacklist",
    toAmino: MsgUnblacklist.toAmino,
    fromAmino: MsgUnblacklist.fromAmino
  },
  "/noble.tokenfactory.MsgPause": {
    aminoType: "/noble.tokenfactory.MsgPause",
    toAmino: MsgPause.toAmino,
    fromAmino: MsgPause.fromAmino
  },
  "/noble.tokenfactory.MsgUnpause": {
    aminoType: "/noble.tokenfactory.MsgUnpause",
    toAmino: MsgUnpause.toAmino,
    fromAmino: MsgUnpause.fromAmino
  },
  "/noble.tokenfactory.MsgConfigureMinterController": {
    aminoType: "/noble.tokenfactory.MsgConfigureMinterController",
    toAmino: MsgConfigureMinterController.toAmino,
    fromAmino: MsgConfigureMinterController.fromAmino
  },
  "/noble.tokenfactory.MsgRemoveMinterController": {
    aminoType: "/noble.tokenfactory.MsgRemoveMinterController",
    toAmino: MsgRemoveMinterController.toAmino,
    fromAmino: MsgRemoveMinterController.fromAmino
  }
};