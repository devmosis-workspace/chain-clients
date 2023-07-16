import { AminoMsg } from "@cosmjs/amino";
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
export declare const AminoConverter: {
    "/noble.tokenfactory.MsgUpdateMasterMinter": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUpdateMasterMinter) => MsgUpdateMasterMinterAminoType["value"];
        fromAmino: ({ from, address }: MsgUpdateMasterMinterAminoType["value"]) => MsgUpdateMasterMinter;
    };
    "/noble.tokenfactory.MsgUpdatePauser": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUpdatePauser) => MsgUpdatePauserAminoType["value"];
        fromAmino: ({ from, address }: MsgUpdatePauserAminoType["value"]) => MsgUpdatePauser;
    };
    "/noble.tokenfactory.MsgUpdateBlacklister": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUpdateBlacklister) => MsgUpdateBlacklisterAminoType["value"];
        fromAmino: ({ from, address }: MsgUpdateBlacklisterAminoType["value"]) => MsgUpdateBlacklister;
    };
    "/noble.tokenfactory.MsgUpdateOwner": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUpdateOwner) => MsgUpdateOwnerAminoType["value"];
        fromAmino: ({ from, address }: MsgUpdateOwnerAminoType["value"]) => MsgUpdateOwner;
    };
    "/noble.tokenfactory.MsgAcceptOwner": {
        aminoType: string;
        toAmino: ({ from }: MsgAcceptOwner) => MsgAcceptOwnerAminoType["value"];
        fromAmino: ({ from }: MsgAcceptOwnerAminoType["value"]) => MsgAcceptOwner;
    };
    "/noble.tokenfactory.MsgConfigureMinter": {
        aminoType: string;
        toAmino: ({ from, address, allowance }: MsgConfigureMinter) => MsgConfigureMinterAminoType["value"];
        fromAmino: ({ from, address, allowance }: MsgConfigureMinterAminoType["value"]) => MsgConfigureMinter;
    };
    "/noble.tokenfactory.MsgRemoveMinter": {
        aminoType: string;
        toAmino: ({ from, address }: MsgRemoveMinter) => MsgRemoveMinterAminoType["value"];
        fromAmino: ({ from, address }: MsgRemoveMinterAminoType["value"]) => MsgRemoveMinter;
    };
    "/noble.tokenfactory.MsgMint": {
        aminoType: string;
        toAmino: ({ from, address, amount }: MsgMint) => MsgMintAminoType["value"];
        fromAmino: ({ from, address, amount }: MsgMintAminoType["value"]) => MsgMint;
    };
    "/noble.tokenfactory.MsgBurn": {
        aminoType: string;
        toAmino: ({ from, amount }: MsgBurn) => MsgBurnAminoType["value"];
        fromAmino: ({ from, amount }: MsgBurnAminoType["value"]) => MsgBurn;
    };
    "/noble.tokenfactory.MsgBlacklist": {
        aminoType: string;
        toAmino: ({ from, address }: MsgBlacklist) => MsgBlacklistAminoType["value"];
        fromAmino: ({ from, address }: MsgBlacklistAminoType["value"]) => MsgBlacklist;
    };
    "/noble.tokenfactory.MsgUnblacklist": {
        aminoType: string;
        toAmino: ({ from, address }: MsgUnblacklist) => MsgUnblacklistAminoType["value"];
        fromAmino: ({ from, address }: MsgUnblacklistAminoType["value"]) => MsgUnblacklist;
    };
    "/noble.tokenfactory.MsgPause": {
        aminoType: string;
        toAmino: ({ from }: MsgPause) => MsgPauseAminoType["value"];
        fromAmino: ({ from }: MsgPauseAminoType["value"]) => MsgPause;
    };
    "/noble.tokenfactory.MsgUnpause": {
        aminoType: string;
        toAmino: ({ from }: MsgUnpause) => MsgUnpauseAminoType["value"];
        fromAmino: ({ from }: MsgUnpauseAminoType["value"]) => MsgUnpause;
    };
    "/noble.tokenfactory.MsgConfigureMinterController": {
        aminoType: string;
        toAmino: ({ from, controller, minter }: MsgConfigureMinterController) => MsgConfigureMinterControllerAminoType["value"];
        fromAmino: ({ from, controller, minter }: MsgConfigureMinterControllerAminoType["value"]) => MsgConfigureMinterController;
    };
    "/noble.tokenfactory.MsgRemoveMinterController": {
        aminoType: string;
        toAmino: ({ from, controller }: MsgRemoveMinterController) => MsgRemoveMinterControllerAminoType["value"];
        fromAmino: ({ from, controller }: MsgRemoveMinterControllerAminoType["value"]) => MsgRemoveMinterController;
    };
};
