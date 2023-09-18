import { Rpc } from "../helpers";
import { BinaryReader } from "../binary";
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
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.updateMasterMinter = this.updateMasterMinter.bind(this);
    this.updatePauser = this.updatePauser.bind(this);
    this.updateBlacklister = this.updateBlacklister.bind(this);
    this.updateOwner = this.updateOwner.bind(this);
    this.acceptOwner = this.acceptOwner.bind(this);
    this.configureMinter = this.configureMinter.bind(this);
    this.removeMinter = this.removeMinter.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.blacklist = this.blacklist.bind(this);
    this.unblacklist = this.unblacklist.bind(this);
    this.pause = this.pause.bind(this);
    this.unpause = this.unpause.bind(this);
    this.configureMinterController = this.configureMinterController.bind(this);
    this.removeMinterController = this.removeMinterController.bind(this);
  }
  updateMasterMinter(request: MsgUpdateMasterMinter): Promise<MsgUpdateMasterMinterResponse> {
    const data = MsgUpdateMasterMinter.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "UpdateMasterMinter", data);
    return promise.then(data => MsgUpdateMasterMinterResponse.decode(new BinaryReader(data)));
  }
  updatePauser(request: MsgUpdatePauser): Promise<MsgUpdatePauserResponse> {
    const data = MsgUpdatePauser.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "UpdatePauser", data);
    return promise.then(data => MsgUpdatePauserResponse.decode(new BinaryReader(data)));
  }
  updateBlacklister(request: MsgUpdateBlacklister): Promise<MsgUpdateBlacklisterResponse> {
    const data = MsgUpdateBlacklister.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "UpdateBlacklister", data);
    return promise.then(data => MsgUpdateBlacklisterResponse.decode(new BinaryReader(data)));
  }
  updateOwner(request: MsgUpdateOwner): Promise<MsgUpdateOwnerResponse> {
    const data = MsgUpdateOwner.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "UpdateOwner", data);
    return promise.then(data => MsgUpdateOwnerResponse.decode(new BinaryReader(data)));
  }
  acceptOwner(request: MsgAcceptOwner): Promise<MsgAcceptOwnerResponse> {
    const data = MsgAcceptOwner.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "AcceptOwner", data);
    return promise.then(data => MsgAcceptOwnerResponse.decode(new BinaryReader(data)));
  }
  configureMinter(request: MsgConfigureMinter): Promise<MsgConfigureMinterResponse> {
    const data = MsgConfigureMinter.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "ConfigureMinter", data);
    return promise.then(data => MsgConfigureMinterResponse.decode(new BinaryReader(data)));
  }
  removeMinter(request: MsgRemoveMinter): Promise<MsgRemoveMinterResponse> {
    const data = MsgRemoveMinter.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "RemoveMinter", data);
    return promise.then(data => MsgRemoveMinterResponse.decode(new BinaryReader(data)));
  }
  mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new BinaryReader(data)));
  }
  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
  }
  blacklist(request: MsgBlacklist): Promise<MsgBlacklistResponse> {
    const data = MsgBlacklist.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "Blacklist", data);
    return promise.then(data => MsgBlacklistResponse.decode(new BinaryReader(data)));
  }
  unblacklist(request: MsgUnblacklist): Promise<MsgUnblacklistResponse> {
    const data = MsgUnblacklist.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "Unblacklist", data);
    return promise.then(data => MsgUnblacklistResponse.decode(new BinaryReader(data)));
  }
  pause(request: MsgPause): Promise<MsgPauseResponse> {
    const data = MsgPause.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "Pause", data);
    return promise.then(data => MsgPauseResponse.decode(new BinaryReader(data)));
  }
  unpause(request: MsgUnpause): Promise<MsgUnpauseResponse> {
    const data = MsgUnpause.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "Unpause", data);
    return promise.then(data => MsgUnpauseResponse.decode(new BinaryReader(data)));
  }
  configureMinterController(request: MsgConfigureMinterController): Promise<MsgConfigureMinterControllerResponse> {
    const data = MsgConfigureMinterController.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "ConfigureMinterController", data);
    return promise.then(data => MsgConfigureMinterControllerResponse.decode(new BinaryReader(data)));
  }
  removeMinterController(request: MsgRemoveMinterController): Promise<MsgRemoveMinterControllerResponse> {
    const data = MsgRemoveMinterController.encode(request).finish();
    const promise = this.rpc.request("noble.fiattokenfactory.Msg", "RemoveMinterController", data);
    return promise.then(data => MsgRemoveMinterControllerResponse.decode(new BinaryReader(data)));
  }
}