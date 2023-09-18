import { MsgUpdateMasterMinter, MsgUpdatePauser, MsgUpdateBlacklister, MsgUpdateOwner, MsgAcceptOwner, MsgConfigureMinter, MsgRemoveMinter, MsgMint, MsgBurn, MsgBlacklist, MsgUnblacklist, MsgPause, MsgUnpause, MsgConfigureMinterController, MsgRemoveMinterController } from "./tx";
export const AminoConverter = {
  "/noble.fiattokenfactory.MsgUpdateMasterMinter": {
    aminoType: "/noble.fiattokenfactory.MsgUpdateMasterMinter",
    toAmino: MsgUpdateMasterMinter.toAmino,
    fromAmino: MsgUpdateMasterMinter.fromAmino
  },
  "/noble.fiattokenfactory.MsgUpdatePauser": {
    aminoType: "/noble.fiattokenfactory.MsgUpdatePauser",
    toAmino: MsgUpdatePauser.toAmino,
    fromAmino: MsgUpdatePauser.fromAmino
  },
  "/noble.fiattokenfactory.MsgUpdateBlacklister": {
    aminoType: "/noble.fiattokenfactory.MsgUpdateBlacklister",
    toAmino: MsgUpdateBlacklister.toAmino,
    fromAmino: MsgUpdateBlacklister.fromAmino
  },
  "/noble.fiattokenfactory.MsgUpdateOwner": {
    aminoType: "/noble.fiattokenfactory.MsgUpdateOwner",
    toAmino: MsgUpdateOwner.toAmino,
    fromAmino: MsgUpdateOwner.fromAmino
  },
  "/noble.fiattokenfactory.MsgAcceptOwner": {
    aminoType: "/noble.fiattokenfactory.MsgAcceptOwner",
    toAmino: MsgAcceptOwner.toAmino,
    fromAmino: MsgAcceptOwner.fromAmino
  },
  "/noble.fiattokenfactory.MsgConfigureMinter": {
    aminoType: "/noble.fiattokenfactory.MsgConfigureMinter",
    toAmino: MsgConfigureMinter.toAmino,
    fromAmino: MsgConfigureMinter.fromAmino
  },
  "/noble.fiattokenfactory.MsgRemoveMinter": {
    aminoType: "/noble.fiattokenfactory.MsgRemoveMinter",
    toAmino: MsgRemoveMinter.toAmino,
    fromAmino: MsgRemoveMinter.fromAmino
  },
  "/noble.fiattokenfactory.MsgMint": {
    aminoType: "/noble.fiattokenfactory.MsgMint",
    toAmino: MsgMint.toAmino,
    fromAmino: MsgMint.fromAmino
  },
  "/noble.fiattokenfactory.MsgBurn": {
    aminoType: "/noble.fiattokenfactory.MsgBurn",
    toAmino: MsgBurn.toAmino,
    fromAmino: MsgBurn.fromAmino
  },
  "/noble.fiattokenfactory.MsgBlacklist": {
    aminoType: "/noble.fiattokenfactory.MsgBlacklist",
    toAmino: MsgBlacklist.toAmino,
    fromAmino: MsgBlacklist.fromAmino
  },
  "/noble.fiattokenfactory.MsgUnblacklist": {
    aminoType: "/noble.fiattokenfactory.MsgUnblacklist",
    toAmino: MsgUnblacklist.toAmino,
    fromAmino: MsgUnblacklist.fromAmino
  },
  "/noble.fiattokenfactory.MsgPause": {
    aminoType: "/noble.fiattokenfactory.MsgPause",
    toAmino: MsgPause.toAmino,
    fromAmino: MsgPause.fromAmino
  },
  "/noble.fiattokenfactory.MsgUnpause": {
    aminoType: "/noble.fiattokenfactory.MsgUnpause",
    toAmino: MsgUnpause.toAmino,
    fromAmino: MsgUnpause.fromAmino
  },
  "/noble.fiattokenfactory.MsgConfigureMinterController": {
    aminoType: "/noble.fiattokenfactory.MsgConfigureMinterController",
    toAmino: MsgConfigureMinterController.toAmino,
    fromAmino: MsgConfigureMinterController.fromAmino
  },
  "/noble.fiattokenfactory.MsgRemoveMinterController": {
    aminoType: "/noble.fiattokenfactory.MsgRemoveMinterController",
    toAmino: MsgRemoveMinterController.toAmino,
    fromAmino: MsgRemoveMinterController.fromAmino
  }
};