import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/noble.fiattokenfactory.MsgUpdateMasterMinter": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUpdateMasterMinter) => MsgUpdateMasterMinterAminoType["value"];
        fromAmino: ({ from, address }: MsgUpdateMasterMinterAminoType["value"]) => MsgUpdateMasterMinter;
    };
    "/noble.fiattokenfactory.MsgUpdatePauser": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUpdatePauser) => MsgUpdatePauserAminoType["value"];
        fromAmino: ({ from, address }: MsgUpdatePauserAminoType["value"]) => MsgUpdatePauser;
    };
    "/noble.fiattokenfactory.MsgUpdateBlacklister": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUpdateBlacklister) => MsgUpdateBlacklisterAminoType["value"];
        fromAmino: ({ from, address }: MsgUpdateBlacklisterAminoType["value"]) => MsgUpdateBlacklister;
    };
    "/noble.fiattokenfactory.MsgUpdateOwner": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUpdateOwner) => MsgUpdateOwnerAminoType["value"];
        fromAmino: ({ from, address }: MsgUpdateOwnerAminoType["value"]) => MsgUpdateOwner;
    };
    "/noble.fiattokenfactory.MsgAcceptOwner": {
        aminoType: string;
        toAmino: ({ from }: MsgAcceptOwner) => MsgAcceptOwnerAminoType["value"];
        fromAmino: ({ from }: MsgAcceptOwnerAminoType["value"]) => MsgAcceptOwner;
    };
    "/noble.fiattokenfactory.MsgConfigureMinter": {
        aminoType: string;
        toAmino: ({ from, address, allowance }: MsgConfigureMinter) => MsgConfigureMinterAminoType["value"];
        fromAmino: ({ from, address, allowance }: MsgConfigureMinterAminoType["value"]) => MsgConfigureMinter;
    };
    "/noble.fiattokenfactory.MsgRemoveMinter": {
        aminoType: string;
        toAmino: ({ from, address }: MsgRemoveMinter) => MsgRemoveMinterAminoType["value"];
        fromAmino: ({ from, address }: MsgRemoveMinterAminoType["value"]) => MsgRemoveMinter;
    };
    "/noble.fiattokenfactory.MsgMint": {
        aminoType: string;
        toAmino: ({ from, address, amount }: MsgMint) => MsgMintAminoType["value"];
        fromAmino: ({ from, address, amount }: MsgMintAminoType["value"]) => MsgMint;
    };
    "/noble.fiattokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: ({ from, amount }: MsgBurn) => MsgBurnAminoType["value"];
        fromAmino: ({ from, amount }: MsgBurnAminoType["value"]) => MsgBurn;
    };
    "/noble.fiattokenfactory.MsgBlacklist": {
        aminoType: string;
        toAmino: ({ from, address }: MsgBlacklist) => MsgBlacklistAminoType["value"];
        fromAmino: ({ from, address }: MsgBlacklistAminoType["value"]) => MsgBlacklist;
    };
    "/noble.fiattokenfactory.MsgUnblacklist": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUnblacklist) => MsgUnblacklistAminoType["value"];
        fromAmino: ({ from, address }: MsgUnblacklistAminoType["value"]) => MsgUnblacklist;
    };
    "/noble.fiattokenfactory.MsgPause": {
        aminoType: string;
        toAmino: ({ from }: MsgPause) => MsgPauseAminoType["value"];
        fromAmino: ({ from }: MsgPauseAminoType["value"]) => MsgPause;
    };
    "/noble.fiattokenfactory.MsgUnpause": {
        aminoType: string;
        toAmino: ({ from }: MsgUnpause) => MsgUnpauseAminoType["value"];
        fromAmino: ({ from }: MsgUnpauseAminoType["value"]) => MsgUnpause;
    };
    "/noble.fiattokenfactory.MsgConfigureMinterController": {
        aminoType: string;
        toAmino: ({ from, controller, minter }: MsgConfigureMinterController) => MsgConfigureMinterControllerAminoType["value"];
        fromAmino: ({ from, controller, minter }: MsgConfigureMinterControllerAminoType["value"]) => MsgConfigureMinterController;
    };
    "/noble.fiattokenfactory.MsgRemoveMinterController": {
        aminoType: string;
        toAmino: ({ from, controller }: MsgRemoveMinterController) => MsgRemoveMinterControllerAminoType["value"];
        fromAmino: ({ from, controller }: MsgRemoveMinterControllerAminoType["value"]) => MsgRemoveMinterController;
    };
};
