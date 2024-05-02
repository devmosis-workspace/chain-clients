import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgLock, MsgLockResponse, MsgBurn, MsgBurnResponse, MsgCreateEthBridgeClaim, MsgCreateEthBridgeClaimResponse, MsgUpdateWhiteListValidator, MsgUpdateWhiteListValidatorResponse, MsgUpdateCethReceiverAccount, MsgUpdateCethReceiverAccountResponse, MsgRescueCeth, MsgRescueCethResponse, MsgSetBlacklist, MsgSetBlacklistResponse, MsgPause, MsgPauseResponse } from "./tx";
/** Msg service for messages */
export interface Msg {
  lock(request: MsgLock): Promise<MsgLockResponse>;
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
  createEthBridgeClaim(request: MsgCreateEthBridgeClaim): Promise<MsgCreateEthBridgeClaimResponse>;
  updateWhiteListValidator(request: MsgUpdateWhiteListValidator): Promise<MsgUpdateWhiteListValidatorResponse>;
  updateCethReceiverAccount(request: MsgUpdateCethReceiverAccount): Promise<MsgUpdateCethReceiverAccountResponse>;
  rescueCeth(request: MsgRescueCeth): Promise<MsgRescueCethResponse>;
  setBlacklist(request: MsgSetBlacklist): Promise<MsgSetBlacklistResponse>;
  setPause(request: MsgPause): Promise<MsgPauseResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.lock = this.lock.bind(this);
    this.burn = this.burn.bind(this);
    this.createEthBridgeClaim = this.createEthBridgeClaim.bind(this);
    this.updateWhiteListValidator = this.updateWhiteListValidator.bind(this);
    this.updateCethReceiverAccount = this.updateCethReceiverAccount.bind(this);
    this.rescueCeth = this.rescueCeth.bind(this);
    this.setBlacklist = this.setBlacklist.bind(this);
    this.setPause = this.setPause.bind(this);
  }
  lock(request: MsgLock): Promise<MsgLockResponse> {
    const data = MsgLock.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Msg", "Lock", data);
    return promise.then(data => MsgLockResponse.decode(new BinaryReader(data)));
  }
  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
  }
  createEthBridgeClaim(request: MsgCreateEthBridgeClaim): Promise<MsgCreateEthBridgeClaimResponse> {
    const data = MsgCreateEthBridgeClaim.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Msg", "CreateEthBridgeClaim", data);
    return promise.then(data => MsgCreateEthBridgeClaimResponse.decode(new BinaryReader(data)));
  }
  updateWhiteListValidator(request: MsgUpdateWhiteListValidator): Promise<MsgUpdateWhiteListValidatorResponse> {
    const data = MsgUpdateWhiteListValidator.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Msg", "UpdateWhiteListValidator", data);
    return promise.then(data => MsgUpdateWhiteListValidatorResponse.decode(new BinaryReader(data)));
  }
  updateCethReceiverAccount(request: MsgUpdateCethReceiverAccount): Promise<MsgUpdateCethReceiverAccountResponse> {
    const data = MsgUpdateCethReceiverAccount.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Msg", "UpdateCethReceiverAccount", data);
    return promise.then(data => MsgUpdateCethReceiverAccountResponse.decode(new BinaryReader(data)));
  }
  rescueCeth(request: MsgRescueCeth): Promise<MsgRescueCethResponse> {
    const data = MsgRescueCeth.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Msg", "RescueCeth", data);
    return promise.then(data => MsgRescueCethResponse.decode(new BinaryReader(data)));
  }
  setBlacklist(request: MsgSetBlacklist): Promise<MsgSetBlacklistResponse> {
    const data = MsgSetBlacklist.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Msg", "SetBlacklist", data);
    return promise.then(data => MsgSetBlacklistResponse.decode(new BinaryReader(data)));
  }
  setPause(request: MsgPause): Promise<MsgPauseResponse> {
    const data = MsgPause.encode(request).finish();
    const promise = this.rpc.request("sifnode.ethbridge.v1.Msg", "SetPause", data);
    return promise.then(data => MsgPauseResponse.decode(new BinaryReader(data)));
  }
}