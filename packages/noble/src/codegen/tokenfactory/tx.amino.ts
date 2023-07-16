import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgUpdateMasterMinter, MsgUpdatePauser, MsgUpdateBlacklister, MsgUpdateOwner, MsgAcceptOwner, MsgConfigureMinter, MsgRemoveMinter, MsgMint, MsgBurn, MsgBlacklist, MsgUnblacklist, MsgPause, MsgUnpause, MsgConfigureMinterController, MsgRemoveMinterController } from "./tx";
export interface MsgUpdateMasterMinterAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgUpdateMasterMinter";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgUpdatePauserAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgUpdatePauser";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgUpdateBlacklisterAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgUpdateBlacklister";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgUpdateOwnerAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgUpdateOwner";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgAcceptOwnerAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgAcceptOwner";
  value: {
    from: string;
  };
}
export interface MsgConfigureMinterAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgConfigureMinter";
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
  type: "/noble.tokenfactory.MsgRemoveMinter";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgMintAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgMint";
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
  type: "/noble.tokenfactory.MsgBurn";
  value: {
    from: string;
    amount: {
      denom: string;
      amount: string;
    };
  };
}
export interface MsgBlacklistAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgBlacklist";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgUnblacklistAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgUnblacklist";
  value: {
    from: string;
    address: string;
  };
}
export interface MsgPauseAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgPause";
  value: {
    from: string;
  };
}
export interface MsgUnpauseAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgUnpause";
  value: {
    from: string;
  };
}
export interface MsgConfigureMinterControllerAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgConfigureMinterController";
  value: {
    from: string;
    controller: string;
    minter: string;
  };
}
export interface MsgRemoveMinterControllerAminoType extends AminoMsg {
  type: "/noble.tokenfactory.MsgRemoveMinterController";
  value: {
    from: string;
    controller: string;
  };
}
export const AminoConverter = {
  "/noble.tokenfactory.MsgUpdateMasterMinter": {
    aminoType: "/noble.tokenfactory.MsgUpdateMasterMinter",
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
  "/noble.tokenfactory.MsgUpdatePauser": {
    aminoType: "/noble.tokenfactory.MsgUpdatePauser",
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
  "/noble.tokenfactory.MsgUpdateBlacklister": {
    aminoType: "/noble.tokenfactory.MsgUpdateBlacklister",
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
  "/noble.tokenfactory.MsgUpdateOwner": {
    aminoType: "/noble.tokenfactory.MsgUpdateOwner",
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
  "/noble.tokenfactory.MsgAcceptOwner": {
    aminoType: "/noble.tokenfactory.MsgAcceptOwner",
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
  "/noble.tokenfactory.MsgConfigureMinter": {
    aminoType: "/noble.tokenfactory.MsgConfigureMinter",
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
  "/noble.tokenfactory.MsgRemoveMinter": {
    aminoType: "/noble.tokenfactory.MsgRemoveMinter",
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
  "/noble.tokenfactory.MsgMint": {
    aminoType: "/noble.tokenfactory.MsgMint",
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
  "/noble.tokenfactory.MsgBurn": {
    aminoType: "/noble.tokenfactory.MsgBurn",
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
  "/noble.tokenfactory.MsgBlacklist": {
    aminoType: "/noble.tokenfactory.MsgBlacklist",
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
  "/noble.tokenfactory.MsgUnblacklist": {
    aminoType: "/noble.tokenfactory.MsgUnblacklist",
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
  "/noble.tokenfactory.MsgPause": {
    aminoType: "/noble.tokenfactory.MsgPause",
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
  "/noble.tokenfactory.MsgUnpause": {
    aminoType: "/noble.tokenfactory.MsgUnpause",
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
  "/noble.tokenfactory.MsgConfigureMinterController": {
    aminoType: "/noble.tokenfactory.MsgConfigureMinterController",
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
  "/noble.tokenfactory.MsgRemoveMinterController": {
    aminoType: "/noble.tokenfactory.MsgRemoveMinterController",
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