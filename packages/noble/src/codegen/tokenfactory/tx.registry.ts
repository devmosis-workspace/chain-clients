import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateMasterMinter, MsgUpdatePauser, MsgUpdateBlacklister, MsgUpdateOwner, MsgAcceptOwner, MsgConfigureMinter, MsgRemoveMinter, MsgMint, MsgBurn, MsgBlacklist, MsgUnblacklist, MsgPause, MsgUnpause, MsgConfigureMinterController, MsgRemoveMinterController } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/noble.tokenfactory.MsgUpdateMasterMinter", MsgUpdateMasterMinter], ["/noble.tokenfactory.MsgUpdatePauser", MsgUpdatePauser], ["/noble.tokenfactory.MsgUpdateBlacklister", MsgUpdateBlacklister], ["/noble.tokenfactory.MsgUpdateOwner", MsgUpdateOwner], ["/noble.tokenfactory.MsgAcceptOwner", MsgAcceptOwner], ["/noble.tokenfactory.MsgConfigureMinter", MsgConfigureMinter], ["/noble.tokenfactory.MsgRemoveMinter", MsgRemoveMinter], ["/noble.tokenfactory.MsgMint", MsgMint], ["/noble.tokenfactory.MsgBurn", MsgBurn], ["/noble.tokenfactory.MsgBlacklist", MsgBlacklist], ["/noble.tokenfactory.MsgUnblacklist", MsgUnblacklist], ["/noble.tokenfactory.MsgPause", MsgPause], ["/noble.tokenfactory.MsgUnpause", MsgUnpause], ["/noble.tokenfactory.MsgConfigureMinterController", MsgConfigureMinterController], ["/noble.tokenfactory.MsgRemoveMinterController", MsgRemoveMinterController]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateMasterMinter(value: MsgUpdateMasterMinter) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinter",
        value: MsgUpdateMasterMinter.encode(value).finish()
      };
    },
    updatePauser(value: MsgUpdatePauser) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdatePauser",
        value: MsgUpdatePauser.encode(value).finish()
      };
    },
    updateBlacklister(value: MsgUpdateBlacklister) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateBlacklister",
        value: MsgUpdateBlacklister.encode(value).finish()
      };
    },
    updateOwner(value: MsgUpdateOwner) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateOwner",
        value: MsgUpdateOwner.encode(value).finish()
      };
    },
    acceptOwner(value: MsgAcceptOwner) {
      return {
        typeUrl: "/noble.tokenfactory.MsgAcceptOwner",
        value: MsgAcceptOwner.encode(value).finish()
      };
    },
    configureMinter(value: MsgConfigureMinter) {
      return {
        typeUrl: "/noble.tokenfactory.MsgConfigureMinter",
        value: MsgConfigureMinter.encode(value).finish()
      };
    },
    removeMinter(value: MsgRemoveMinter) {
      return {
        typeUrl: "/noble.tokenfactory.MsgRemoveMinter",
        value: MsgRemoveMinter.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/noble.tokenfactory.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/noble.tokenfactory.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    blacklist(value: MsgBlacklist) {
      return {
        typeUrl: "/noble.tokenfactory.MsgBlacklist",
        value: MsgBlacklist.encode(value).finish()
      };
    },
    unblacklist(value: MsgUnblacklist) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUnblacklist",
        value: MsgUnblacklist.encode(value).finish()
      };
    },
    pause(value: MsgPause) {
      return {
        typeUrl: "/noble.tokenfactory.MsgPause",
        value: MsgPause.encode(value).finish()
      };
    },
    unpause(value: MsgUnpause) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUnpause",
        value: MsgUnpause.encode(value).finish()
      };
    },
    configureMinterController(value: MsgConfigureMinterController) {
      return {
        typeUrl: "/noble.tokenfactory.MsgConfigureMinterController",
        value: MsgConfigureMinterController.encode(value).finish()
      };
    },
    removeMinterController(value: MsgRemoveMinterController) {
      return {
        typeUrl: "/noble.tokenfactory.MsgRemoveMinterController",
        value: MsgRemoveMinterController.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateMasterMinter(value: MsgUpdateMasterMinter) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinter",
        value
      };
    },
    updatePauser(value: MsgUpdatePauser) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdatePauser",
        value
      };
    },
    updateBlacklister(value: MsgUpdateBlacklister) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateBlacklister",
        value
      };
    },
    updateOwner(value: MsgUpdateOwner) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateOwner",
        value
      };
    },
    acceptOwner(value: MsgAcceptOwner) {
      return {
        typeUrl: "/noble.tokenfactory.MsgAcceptOwner",
        value
      };
    },
    configureMinter(value: MsgConfigureMinter) {
      return {
        typeUrl: "/noble.tokenfactory.MsgConfigureMinter",
        value
      };
    },
    removeMinter(value: MsgRemoveMinter) {
      return {
        typeUrl: "/noble.tokenfactory.MsgRemoveMinter",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/noble.tokenfactory.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/noble.tokenfactory.MsgBurn",
        value
      };
    },
    blacklist(value: MsgBlacklist) {
      return {
        typeUrl: "/noble.tokenfactory.MsgBlacklist",
        value
      };
    },
    unblacklist(value: MsgUnblacklist) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUnblacklist",
        value
      };
    },
    pause(value: MsgPause) {
      return {
        typeUrl: "/noble.tokenfactory.MsgPause",
        value
      };
    },
    unpause(value: MsgUnpause) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUnpause",
        value
      };
    },
    configureMinterController(value: MsgConfigureMinterController) {
      return {
        typeUrl: "/noble.tokenfactory.MsgConfigureMinterController",
        value
      };
    },
    removeMinterController(value: MsgRemoveMinterController) {
      return {
        typeUrl: "/noble.tokenfactory.MsgRemoveMinterController",
        value
      };
    }
  },
  fromJSON: {
    updateMasterMinter(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinter",
        value: MsgUpdateMasterMinter.fromJSON(value)
      };
    },
    updatePauser(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdatePauser",
        value: MsgUpdatePauser.fromJSON(value)
      };
    },
    updateBlacklister(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateBlacklister",
        value: MsgUpdateBlacklister.fromJSON(value)
      };
    },
    updateOwner(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateOwner",
        value: MsgUpdateOwner.fromJSON(value)
      };
    },
    acceptOwner(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgAcceptOwner",
        value: MsgAcceptOwner.fromJSON(value)
      };
    },
    configureMinter(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgConfigureMinter",
        value: MsgConfigureMinter.fromJSON(value)
      };
    },
    removeMinter(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgRemoveMinter",
        value: MsgRemoveMinter.fromJSON(value)
      };
    },
    mint(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgMint",
        value: MsgMint.fromJSON(value)
      };
    },
    burn(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgBurn",
        value: MsgBurn.fromJSON(value)
      };
    },
    blacklist(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgBlacklist",
        value: MsgBlacklist.fromJSON(value)
      };
    },
    unblacklist(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUnblacklist",
        value: MsgUnblacklist.fromJSON(value)
      };
    },
    pause(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgPause",
        value: MsgPause.fromJSON(value)
      };
    },
    unpause(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUnpause",
        value: MsgUnpause.fromJSON(value)
      };
    },
    configureMinterController(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgConfigureMinterController",
        value: MsgConfigureMinterController.fromJSON(value)
      };
    },
    removeMinterController(value: any) {
      return {
        typeUrl: "/noble.tokenfactory.MsgRemoveMinterController",
        value: MsgRemoveMinterController.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateMasterMinter(value: MsgUpdateMasterMinter) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateMasterMinter",
        value: MsgUpdateMasterMinter.fromPartial(value)
      };
    },
    updatePauser(value: MsgUpdatePauser) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdatePauser",
        value: MsgUpdatePauser.fromPartial(value)
      };
    },
    updateBlacklister(value: MsgUpdateBlacklister) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateBlacklister",
        value: MsgUpdateBlacklister.fromPartial(value)
      };
    },
    updateOwner(value: MsgUpdateOwner) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUpdateOwner",
        value: MsgUpdateOwner.fromPartial(value)
      };
    },
    acceptOwner(value: MsgAcceptOwner) {
      return {
        typeUrl: "/noble.tokenfactory.MsgAcceptOwner",
        value: MsgAcceptOwner.fromPartial(value)
      };
    },
    configureMinter(value: MsgConfigureMinter) {
      return {
        typeUrl: "/noble.tokenfactory.MsgConfigureMinter",
        value: MsgConfigureMinter.fromPartial(value)
      };
    },
    removeMinter(value: MsgRemoveMinter) {
      return {
        typeUrl: "/noble.tokenfactory.MsgRemoveMinter",
        value: MsgRemoveMinter.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/noble.tokenfactory.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/noble.tokenfactory.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    blacklist(value: MsgBlacklist) {
      return {
        typeUrl: "/noble.tokenfactory.MsgBlacklist",
        value: MsgBlacklist.fromPartial(value)
      };
    },
    unblacklist(value: MsgUnblacklist) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUnblacklist",
        value: MsgUnblacklist.fromPartial(value)
      };
    },
    pause(value: MsgPause) {
      return {
        typeUrl: "/noble.tokenfactory.MsgPause",
        value: MsgPause.fromPartial(value)
      };
    },
    unpause(value: MsgUnpause) {
      return {
        typeUrl: "/noble.tokenfactory.MsgUnpause",
        value: MsgUnpause.fromPartial(value)
      };
    },
    configureMinterController(value: MsgConfigureMinterController) {
      return {
        typeUrl: "/noble.tokenfactory.MsgConfigureMinterController",
        value: MsgConfigureMinterController.fromPartial(value)
      };
    },
    removeMinterController(value: MsgRemoveMinterController) {
      return {
        typeUrl: "/noble.tokenfactory.MsgRemoveMinterController",
        value: MsgRemoveMinterController.fromPartial(value)
      };
    }
  }
};