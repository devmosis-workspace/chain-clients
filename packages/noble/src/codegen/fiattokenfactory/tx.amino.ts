import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgUpdateMasterMinter, MsgUpdatePauser, MsgUpdateBlacklister, MsgUpdateOwner, MsgAcceptOwner, MsgConfigureMinter, MsgRemoveMinter, MsgMint, MsgBurn, MsgBlacklist, MsgUnblacklist, MsgPause, MsgUnpause, MsgConfigureMinterController, MsgRemoveMinterController } from "./tx";
export interface MsgUpdateMasterMinterAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgUpdateMasterMinter";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgUpdatePauserAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgUpdatePauser";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgUpdateBlacklisterAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgUpdateBlacklister";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgUpdateOwnerAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgUpdateOwner";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgAcceptOwnerAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgAcceptOwner";
  value: {
    from: string;
  };
}
export interface MsgConfigureMinterAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgConfigureMinter";
  value: {
    from: string;
    address: string;
    allowance: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgRemoveMinterAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgRemoveMinter";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgMintAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgMint";
  value: {
    from: string;
    address: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBurnAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgBurn";
  value: {
    from: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBlacklistAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgBlacklist";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgUnblacklistAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgUnblacklist";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgPauseAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgPause";
  value: {
    from: string;
  };
}
export interface MsgUnpauseAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgUnpause";
  value: {
    from: string;
  };
}
export interface MsgConfigureMinterControllerAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgConfigureMinterController";
  value: {
    from: string;
    controller: string;
    minter: string;
  };
}
export interface MsgRemoveMinterControllerAminoType extends AminoMsg {
  type: "/noble.fiattokenfactory.MsgRemoveMinterController";
  value: {
    from: string;
    controller: string;
  };
}
export const AminoConverter = {
  "/noble.fiattokenfactory.MsgUpdateMasterMinter": {
    aminoType: "/noble.fiattokenfactory.MsgUpdateMasterMinter",
    toAmino: ({
      from,
      address
    }: MsgUpdateMasterMinter): MsgUpdateMasterMinterAminoType["value"] => {
      return {
        from,
        address
      };
    },
    fromAmino: ({
      from,
      address
    }: MsgUpdateMasterMinterAminoType["value"]): MsgUpdateMasterMinter => {
      return {
        from,
        address
      };
    }
  },
  "/noble.fiattokenfactory.MsgUpdatePauser": {
    aminoType: "/noble.fiattokenfactory.MsgUpdatePauser",
    toAmino: ({
      from,
      address
    }: MsgUpdatePauser): MsgUpdatePauserAminoType["value"] => {
      return {
        from,
        address
      };
    },
    fromAmino: ({
      from,
      address
    }: MsgUpdatePauserAminoType["value"]): MsgUpdatePauser => {
      return {
        from,
        address
      };
    }
  },
  "/noble.fiattokenfactory.MsgUpdateBlacklister": {
    aminoType: "/noble.fiattokenfactory.MsgUpdateBlacklister",
    toAmino: ({
      from,
      address
    }: MsgUpdateBlacklister): MsgUpdateBlacklisterAminoType["value"] => {
      return {
        from,
        address
      };
    },
    fromAmino: ({
      from,
      address
    }: MsgUpdateBlacklisterAminoType["value"]): MsgUpdateBlacklister => {
      return {
        from,
        address
      };
    }
  },
  "/noble.fiattokenfactory.MsgUpdateOwner": {
    aminoType: "/noble.fiattokenfactory.MsgUpdateOwner",
    toAmino: ({
      from,
      address
    }: MsgUpdateOwner): MsgUpdateOwnerAminoType["value"] => {
      return {
        from,
        address
      };
    },
    fromAmino: ({
      from,
      address
    }: MsgUpdateOwnerAminoType["value"]): MsgUpdateOwner => {
      return {
        from,
        address
      };
    }
  },
  "/noble.fiattokenfactory.MsgAcceptOwner": {
    aminoType: "/noble.fiattokenfactory.MsgAcceptOwner",
    toAmino: ({
      from
    }: MsgAcceptOwner): MsgAcceptOwnerAminoType["value"] => {
      return {
        from
      };
    },
    fromAmino: ({
      from
    }: MsgAcceptOwnerAminoType["value"]): MsgAcceptOwner => {
      return {
        from
      };
    }
  },
  "/noble.fiattokenfactory.MsgConfigureMinter": {
    aminoType: "/noble.fiattokenfactory.MsgConfigureMinter",
    toAmino: ({
      from,
      address,
      allowance
    }: MsgConfigureMinter): MsgConfigureMinterAminoType["value"] => {
      return {
        from,
        address,
        allowance: {
          denom: allowance.denom,
          amount: Long.fromValue(allowance.amount).toString()
        }
      };
    },
    fromAmino: ({
      from,
      address,
      allowance
    }: MsgConfigureMinterAminoType["value"]): MsgConfigureMinter => {
      return {
        from,
        address,
        allowance: {
          denom: allowance.denom,
          amount: allowance.amount
        }
      };
    }
  },
  "/noble.fiattokenfactory.MsgRemoveMinter": {
    aminoType: "/noble.fiattokenfactory.MsgRemoveMinter",
    toAmino: ({
      from,
      address
    }: MsgRemoveMinter): MsgRemoveMinterAminoType["value"] => {
      return {
        from,
        address
      };
    },
    fromAmino: ({
      from,
      address
    }: MsgRemoveMinterAminoType["value"]): MsgRemoveMinter => {
      return {
        from,
        address
      };
    }
  },
  "/noble.fiattokenfactory.MsgMint": {
    aminoType: "/noble.fiattokenfactory.MsgMint",
    toAmino: ({
      from,
      address,
      amount
    }: MsgMint): MsgMintAminoType["value"] => {
      return {
        from,
        address,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      from,
      address,
      amount
    }: MsgMintAminoType["value"]): MsgMint => {
      return {
        from,
        address,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/noble.fiattokenfactory.MsgBurn": {
    aminoType: "/noble.fiattokenfactory.MsgBurn",
    toAmino: ({
      from,
      amount
    }: MsgBurn): MsgBurnAminoType["value"] => {
      return {
        from,
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        }
      };
    },
    fromAmino: ({
      from,
      amount
    }: MsgBurnAminoType["value"]): MsgBurn => {
      return {
        from,
        amount: {
          denom: amount.denom,
          amount: amount.amount
        }
      };
    }
  },
  "/noble.fiattokenfactory.MsgBlacklist": {
    aminoType: "/noble.fiattokenfactory.MsgBlacklist",
    toAmino: ({
      from,
      address
    }: MsgBlacklist): MsgBlacklistAminoType["value"] => {
      return {
        from,
        address
      };
    },
    fromAmino: ({
      from,
      address
    }: MsgBlacklistAminoType["value"]): MsgBlacklist => {
      return {
        from,
        address
      };
    }
  },
  "/noble.fiattokenfactory.MsgUnblacklist": {
    aminoType: "/noble.fiattokenfactory.MsgUnblacklist",
    toAmino: ({
      from,
      address
    }: MsgUnblacklist): MsgUnblacklistAminoType["value"] => {
      return {
        from,
        address
      };
    },
    fromAmino: ({
      from,
      address
    }: MsgUnblacklistAminoType["value"]): MsgUnblacklist => {
      return {
        from,
        address
      };
    }
  },
  "/noble.fiattokenfactory.MsgPause": {
    aminoType: "/noble.fiattokenfactory.MsgPause",
    toAmino: ({
      from
    }: MsgPause): MsgPauseAminoType["value"] => {
      return {
        from
      };
    },
    fromAmino: ({
      from
    }: MsgPauseAminoType["value"]): MsgPause => {
      return {
        from
      };
    }
  },
  "/noble.fiattokenfactory.MsgUnpause": {
    aminoType: "/noble.fiattokenfactory.MsgUnpause",
    toAmino: ({
      from
    }: MsgUnpause): MsgUnpauseAminoType["value"] => {
      return {
        from
      };
    },
    fromAmino: ({
      from
    }: MsgUnpauseAminoType["value"]): MsgUnpause => {
      return {
        from
      };
    }
  },
  "/noble.fiattokenfactory.MsgConfigureMinterController": {
    aminoType: "/noble.fiattokenfactory.MsgConfigureMinterController",
    toAmino: ({
      from,
      controller,
      minter
    }: MsgConfigureMinterController): MsgConfigureMinterControllerAminoType["value"] => {
      return {
        from,
        controller,
        minter
      };
    },
    fromAmino: ({
      from,
      controller,
      minter
    }: MsgConfigureMinterControllerAminoType["value"]): MsgConfigureMinterController => {
      return {
        from,
        controller,
        minter
      };
    }
  },
  "/noble.fiattokenfactory.MsgRemoveMinterController": {
    aminoType: "/noble.fiattokenfactory.MsgRemoveMinterController",
    toAmino: ({
      from,
      controller
    }: MsgRemoveMinterController): MsgRemoveMinterControllerAminoType["value"] => {
      return {
        from,
        controller
      };
    },
    fromAmino: ({
      from,
      controller
    }: MsgRemoveMinterControllerAminoType["value"]): MsgRemoveMinterController => {
      return {
        from,
        controller
      };
    }
  }
};