import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgUpdateMasterMinter, MsgUpdatePauser, MsgUpdateBlacklister, MsgUpdateOwner, MsgAcceptOwner, MsgConfigureMinter, MsgRemoveMinter, MsgMint, MsgBurn, MsgBlacklist, MsgUnblacklist, MsgPause, MsgUnpause, MsgConfigureMinterController, MsgRemoveMinterController } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        updateMasterMinter(value: MsgUpdateMasterMinter): {
            typeUrl: string;
            value: Uint8Array;
        };
        updatePauser(value: MsgUpdatePauser): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateBlacklister(value: MsgUpdateBlacklister): {
            typeUrl: string;
            value: Uint8Array;
        };
        updateOwner(value: MsgUpdateOwner): {
            typeUrl: string;
            value: Uint8Array;
        };
        acceptOwner(value: MsgAcceptOwner): {
            typeUrl: string;
            value: Uint8Array;
        };
        configureMinter(value: MsgConfigureMinter): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeMinter(value: MsgRemoveMinter): {
            typeUrl: string;
            value: Uint8Array;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: Uint8Array;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: Uint8Array;
        };
        blacklist(value: MsgBlacklist): {
            typeUrl: string;
            value: Uint8Array;
        };
        unblacklist(value: MsgUnblacklist): {
            typeUrl: string;
            value: Uint8Array;
        };
        pause(value: MsgPause): {
            typeUrl: string;
            value: Uint8Array;
        };
        unpause(value: MsgUnpause): {
            typeUrl: string;
            value: Uint8Array;
        };
        configureMinterController(value: MsgConfigureMinterController): {
            typeUrl: string;
            value: Uint8Array;
        };
        removeMinterController(value: MsgRemoveMinterController): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        updateMasterMinter(value: MsgUpdateMasterMinter): {
            typeUrl: string;
            value: MsgUpdateMasterMinter;
        };
        updatePauser(value: MsgUpdatePauser): {
            typeUrl: string;
            value: MsgUpdatePauser;
        };
        updateBlacklister(value: MsgUpdateBlacklister): {
            typeUrl: string;
            value: MsgUpdateBlacklister;
        };
        updateOwner(value: MsgUpdateOwner): {
            typeUrl: string;
            value: MsgUpdateOwner;
        };
        acceptOwner(value: MsgAcceptOwner): {
            typeUrl: string;
            value: MsgAcceptOwner;
        };
        configureMinter(value: MsgConfigureMinter): {
            typeUrl: string;
            value: MsgConfigureMinter;
        };
        removeMinter(value: MsgRemoveMinter): {
            typeUrl: string;
            value: MsgRemoveMinter;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        blacklist(value: MsgBlacklist): {
            typeUrl: string;
            value: MsgBlacklist;
        };
        unblacklist(value: MsgUnblacklist): {
            typeUrl: string;
            value: MsgUnblacklist;
        };
        pause(value: MsgPause): {
            typeUrl: string;
            value: MsgPause;
        };
        unpause(value: MsgUnpause): {
            typeUrl: string;
            value: MsgUnpause;
        };
        configureMinterController(value: MsgConfigureMinterController): {
            typeUrl: string;
            value: MsgConfigureMinterController;
        };
        removeMinterController(value: MsgRemoveMinterController): {
            typeUrl: string;
            value: MsgRemoveMinterController;
        };
    };
    fromJSON: {
        updateMasterMinter(value: any): {
            typeUrl: string;
            value: MsgUpdateMasterMinter;
        };
        updatePauser(value: any): {
            typeUrl: string;
            value: MsgUpdatePauser;
        };
        updateBlacklister(value: any): {
            typeUrl: string;
            value: MsgUpdateBlacklister;
        };
        updateOwner(value: any): {
            typeUrl: string;
            value: MsgUpdateOwner;
        };
        acceptOwner(value: any): {
            typeUrl: string;
            value: MsgAcceptOwner;
        };
        configureMinter(value: any): {
            typeUrl: string;
            value: MsgConfigureMinter;
        };
        removeMinter(value: any): {
            typeUrl: string;
            value: MsgRemoveMinter;
        };
        mint(value: any): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: any): {
            typeUrl: string;
            value: MsgBurn;
        };
        blacklist(value: any): {
            typeUrl: string;
            value: MsgBlacklist;
        };
        unblacklist(value: any): {
            typeUrl: string;
            value: MsgUnblacklist;
        };
        pause(value: any): {
            typeUrl: string;
            value: MsgPause;
        };
        unpause(value: any): {
            typeUrl: string;
            value: MsgUnpause;
        };
        configureMinterController(value: any): {
            typeUrl: string;
            value: MsgConfigureMinterController;
        };
        removeMinterController(value: any): {
            typeUrl: string;
            value: MsgRemoveMinterController;
        };
    };
    fromPartial: {
        updateMasterMinter(value: MsgUpdateMasterMinter): {
            typeUrl: string;
            value: MsgUpdateMasterMinter;
        };
        updatePauser(value: MsgUpdatePauser): {
            typeUrl: string;
            value: MsgUpdatePauser;
        };
        updateBlacklister(value: MsgUpdateBlacklister): {
            typeUrl: string;
            value: MsgUpdateBlacklister;
        };
        updateOwner(value: MsgUpdateOwner): {
            typeUrl: string;
            value: MsgUpdateOwner;
        };
        acceptOwner(value: MsgAcceptOwner): {
            typeUrl: string;
            value: MsgAcceptOwner;
        };
        configureMinter(value: MsgConfigureMinter): {
            typeUrl: string;
            value: MsgConfigureMinter;
        };
        removeMinter(value: MsgRemoveMinter): {
            typeUrl: string;
            value: MsgRemoveMinter;
        };
        mint(value: MsgMint): {
            typeUrl: string;
            value: MsgMint;
        };
        burn(value: MsgBurn): {
            typeUrl: string;
            value: MsgBurn;
        };
        blacklist(value: MsgBlacklist): {
            typeUrl: string;
            value: MsgBlacklist;
        };
        unblacklist(value: MsgUnblacklist): {
            typeUrl: string;
            value: MsgUnblacklist;
        };
        pause(value: MsgPause): {
            typeUrl: string;
            value: MsgPause;
        };
        unpause(value: MsgUnpause): {
            typeUrl: string;
            value: MsgUnpause;
        };
        configureMinterController(value: MsgConfigureMinterController): {
            typeUrl: string;
            value: MsgConfigureMinterController;
        };
        removeMinterController(value: MsgRemoveMinterController): {
            typeUrl: string;
            value: MsgRemoveMinterController;
        };
    };
};
