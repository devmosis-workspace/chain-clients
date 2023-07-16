import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateMasterMinter, MsgUpdatePauser, MsgUpdateBlacklister, MsgUpdateOwner, MsgAcceptOwner, MsgConfigureMinter, MsgRemoveMinter, MsgMint, MsgBurn, MsgBlacklist, MsgUnblacklist, MsgPause, MsgUnpause, MsgConfigureMinterController, MsgRemoveMinterController } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/noble.fiattokenfactory.MsgUpdateMasterMinter", MsgUpdateMasterMinter], ["/noble.fiattokenfactory.MsgUpdatePauser", MsgUpdatePauser], ["/noble.fiattokenfactory.MsgUpdateBlacklister", MsgUpdateBlacklister], ["/noble.fiattokenfactory.MsgUpdateOwner", MsgUpdateOwner], ["/noble.fiattokenfactory.MsgAcceptOwner", MsgAcceptOwner], ["/noble.fiattokenfactory.MsgConfigureMinter", MsgConfigureMinter], ["/noble.fiattokenfactory.MsgRemoveMinter", MsgRemoveMinter], ["/noble.fiattokenfactory.MsgMint", MsgMint], ["/noble.fiattokenfactory.MsgBurn", MsgBurn], ["/noble.fiattokenfactory.MsgBlacklist", MsgBlacklist], ["/noble.fiattokenfactory.MsgUnblacklist", MsgUnblacklist], ["/noble.fiattokenfactory.MsgPause", MsgPause], ["/noble.fiattokenfactory.MsgUnpause", MsgUnpause], ["/noble.fiattokenfactory.MsgConfigureMinterController", MsgConfigureMinterController], ["/noble.fiattokenfactory.MsgRemoveMinterController", MsgRemoveMinterController]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    updateMasterMinter(value: MsgUpdateMasterMinter) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateMasterMinter",
        value: MsgUpdateMasterMinter.encode(value).finish()
      };
    },
    updatePauser(value: MsgUpdatePauser) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdatePauser",
        value: MsgUpdatePauser.encode(value).finish()
      };
    },
    updateBlacklister(value: MsgUpdateBlacklister) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateBlacklister",
        value: MsgUpdateBlacklister.encode(value).finish()
      };
    },
    updateOwner(value: MsgUpdateOwner) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateOwner",
        value: MsgUpdateOwner.encode(value).finish()
      };
    },
    acceptOwner(value: MsgAcceptOwner) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgAcceptOwner",
        value: MsgAcceptOwner.encode(value).finish()
      };
    },
    configureMinter(value: MsgConfigureMinter) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgConfigureMinter",
        value: MsgConfigureMinter.encode(value).finish()
      };
    },
    removeMinter(value: MsgRemoveMinter) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgRemoveMinter",
        value: MsgRemoveMinter.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    blacklist(value: MsgBlacklist) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgBlacklist",
        value: MsgBlacklist.encode(value).finish()
      };
    },
    unblacklist(value: MsgUnblacklist) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUnblacklist",
        value: MsgUnblacklist.encode(value).finish()
      };
    },
    pause(value: MsgPause) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgPause",
        value: MsgPause.encode(value).finish()
      };
    },
    unpause(value: MsgUnpause) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUnpause",
        value: MsgUnpause.encode(value).finish()
      };
    },
    configureMinterController(value: MsgConfigureMinterController) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgConfigureMinterController",
        value: MsgConfigureMinterController.encode(value).finish()
      };
    },
    removeMinterController(value: MsgRemoveMinterController) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgRemoveMinterController",
        value: MsgRemoveMinterController.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    updateMasterMinter(value: MsgUpdateMasterMinter) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateMasterMinter",
        value
      };
    },
    updatePauser(value: MsgUpdatePauser) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdatePauser",
        value
      };
    },
    updateBlacklister(value: MsgUpdateBlacklister) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateBlacklister",
        value
      };
    },
    updateOwner(value: MsgUpdateOwner) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateOwner",
        value
      };
    },
    acceptOwner(value: MsgAcceptOwner) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgAcceptOwner",
        value
      };
    },
    configureMinter(value: MsgConfigureMinter) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgConfigureMinter",
        value
      };
    },
    removeMinter(value: MsgRemoveMinter) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgRemoveMinter",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgBurn",
        value
      };
    },
    blacklist(value: MsgBlacklist) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgBlacklist",
        value
      };
    },
    unblacklist(value: MsgUnblacklist) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUnblacklist",
        value
      };
    },
    pause(value: MsgPause) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgPause",
        value
      };
    },
    unpause(value: MsgUnpause) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUnpause",
        value
      };
    },
    configureMinterController(value: MsgConfigureMinterController) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgConfigureMinterController",
        value
      };
    },
    removeMinterController(value: MsgRemoveMinterController) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgRemoveMinterController",
        value
      };
    }
  },
  fromJSON: {
    updateMasterMinter(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateMasterMinter",
        value: MsgUpdateMasterMinter.fromJSON(value)
      };
    },
    updatePauser(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdatePauser",
        value: MsgUpdatePauser.fromJSON(value)
      };
    },
    updateBlacklister(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateBlacklister",
        value: MsgUpdateBlacklister.fromJSON(value)
      };
    },
    updateOwner(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateOwner",
        value: MsgUpdateOwner.fromJSON(value)
      };
    },
    acceptOwner(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgAcceptOwner",
        value: MsgAcceptOwner.fromJSON(value)
      };
    },
    configureMinter(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgConfigureMinter",
        value: MsgConfigureMinter.fromJSON(value)
      };
    },
    removeMinter(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgRemoveMinter",
        value: MsgRemoveMinter.fromJSON(value)
      };
    },
    mint(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgMint",
        value: MsgMint.fromJSON(value)
      };
    },
    burn(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgBurn",
        value: MsgBurn.fromJSON(value)
      };
    },
    blacklist(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgBlacklist",
        value: MsgBlacklist.fromJSON(value)
      };
    },
    unblacklist(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUnblacklist",
        value: MsgUnblacklist.fromJSON(value)
      };
    },
    pause(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgPause",
        value: MsgPause.fromJSON(value)
      };
    },
    unpause(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUnpause",
        value: MsgUnpause.fromJSON(value)
      };
    },
    configureMinterController(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgConfigureMinterController",
        value: MsgConfigureMinterController.fromJSON(value)
      };
    },
    removeMinterController(value: any) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgRemoveMinterController",
        value: MsgRemoveMinterController.fromJSON(value)
      };
    }
  },
  fromPartial: {
    updateMasterMinter(value: MsgUpdateMasterMinter) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateMasterMinter",
        value: MsgUpdateMasterMinter.fromPartial(value)
      };
    },
    updatePauser(value: MsgUpdatePauser) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdatePauser",
        value: MsgUpdatePauser.fromPartial(value)
      };
    },
    updateBlacklister(value: MsgUpdateBlacklister) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateBlacklister",
        value: MsgUpdateBlacklister.fromPartial(value)
      };
    },
    updateOwner(value: MsgUpdateOwner) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUpdateOwner",
        value: MsgUpdateOwner.fromPartial(value)
      };
    },
    acceptOwner(value: MsgAcceptOwner) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgAcceptOwner",
        value: MsgAcceptOwner.fromPartial(value)
      };
    },
    configureMinter(value: MsgConfigureMinter) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgConfigureMinter",
        value: MsgConfigureMinter.fromPartial(value)
      };
    },
    removeMinter(value: MsgRemoveMinter) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgRemoveMinter",
        value: MsgRemoveMinter.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    blacklist(value: MsgBlacklist) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgBlacklist",
        value: MsgBlacklist.fromPartial(value)
      };
    },
    unblacklist(value: MsgUnblacklist) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUnblacklist",
        value: MsgUnblacklist.fromPartial(value)
      };
    },
    pause(value: MsgPause) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgPause",
        value: MsgPause.fromPartial(value)
      };
    },
    unpause(value: MsgUnpause) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgUnpause",
        value: MsgUnpause.fromPartial(value)
      };
    },
    configureMinterController(value: MsgConfigureMinterController) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgConfigureMinterController",
        value: MsgConfigureMinterController.fromPartial(value)
      };
    },
    removeMinterController(value: MsgRemoveMinterController) {
      return {
        typeUrl: "/noble.fiattokenfactory.MsgRemoveMinterController",
        value: MsgRemoveMinterController.fromPartial(value)
      };
    }
  }
};