import { Rpc } from "../helpers";
import { MsgUpdateMasterMinter, MsgUpdateMasterMinterResponse, MsgUpdatePauser, MsgUpdatePauserResponse, MsgUpdateBlacklister, MsgUpdateBlacklisterResponse, MsgUpdateOwner, MsgUpdateOwnerResponse, MsgAcceptOwner, MsgAcceptOwnerResponse, MsgConfigureMinter, MsgConfigureMinterResponse, MsgRemoveMinter, MsgRemoveMinterResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgBlacklist, MsgBlacklistResponse, MsgUnblacklist, MsgUnblacklistResponse, MsgPause, MsgPauseResponse, MsgUnpause, MsgUnpauseResponse, MsgConfigureMinterController, MsgConfigureMinterControllerResponse, MsgRemoveMinterController, MsgRemoveMinterControllerResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    updateMasterMinter(request: MsgUpdateMasterMinter): Promise<MsgUpdateMasterMinterResponse>;
    updatePauser(request: MsgUpdatePauser): Promise<MsgUpdatePauserResponse>;
    updateBlacklister(request: MsgUpdateBlacklister): Promise<MsgUpdateBlacklisterResponse>;
    updateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>;
    acceptOwner(request: MsgAcceptOwner): Promise<MsgAcceptOwnerResponse>;
    configureMinter(request: MsgConfigureMinter): Promise<MsgConfigureMinterResponse>;
    removeMinter(request: MsgRemoveMinter): Promise<MsgRemoveMinterResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    blacklist(request: MsgBlacklist): Promise<MsgBlacklistResponse>;
    unblacklist(request: MsgUnblacklist): Promise<MsgUnblacklistResponse>;
    pause(request: MsgPause): Promise<MsgPauseResponse>;
    unpause(request: MsgUnpause): Promise<MsgUnpauseResponse>;
    configureMinterController(request: MsgConfigureMinterController): Promise<MsgConfigureMinterControllerResponse>;
    removeMinterController(request: MsgRemoveMinterController): Promise<MsgRemoveMinterControllerResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    updateMasterMinter(request: MsgUpdateMasterMinter): Promise<MsgUpdateMasterMinterResponse>;
    updatePauser(request: MsgUpdatePauser): Promise<MsgUpdatePauserResponse>;
    updateBlacklister(request: MsgUpdateBlacklister): Promise<MsgUpdateBlacklisterResponse>;
    updateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse>;
    acceptOwner(request: MsgAcceptOwner): Promise<MsgAcceptOwnerResponse>;
    configureMinter(request: MsgConfigureMinter): Promise<MsgConfigureMinterResponse>;
    removeMinter(request: MsgRemoveMinter): Promise<MsgRemoveMinterResponse>;
    mint(request: MsgMint): Promise<MsgMintResponse>;
    burn(request: MsgBurn): Promise<MsgBurnResponse>;
    blacklist(request: MsgBlacklist): Promise<MsgBlacklistResponse>;
    unblacklist(request: MsgUnblacklist): Promise<MsgUnblacklistResponse>;
    pause(request: MsgPause): Promise<MsgPauseResponse>;
    unpause(request: MsgUnpause): Promise<MsgUnpauseResponse>;
    configureMinterController(request: MsgConfigureMinterController): Promise<MsgConfigureMinterControllerResponse>;
    removeMinterController(request: MsgRemoveMinterController): Promise<MsgRemoveMinterControllerResponse>;
}
