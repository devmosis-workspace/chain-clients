import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgRequestRedemption, MsgRequestRedemptionResponse, MsgSignalIntent, MsgSignalIntentResponse, MsgCancelQueuedRedemption, MsgCancelQueuedRedemptionResponse } from "./messages";
import { MsgGovCloseChannel, MsgGovCloseChannelResponse, MsgGovReopenChannel, MsgGovReopenChannelResponse, MsgGovSetLsmCaps, MsgGovSetLsmCapsResponse, MsgGovAddValidatorDenyList, MsgGovAddValidatorDenyListResponse, MsgGovRemoveValidatorDenyList, MsgGovRemoveValidatorDenyListResponse } from "./proposals";
/** Msg defines the interchainstaking Msg service. */
export interface Msg {
  /**
   * RequestRedemption defines a method for requesting burning of qAssets for
   * native assets.
   */
  requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
  /**
   * SignalIntent defines a method for signalling voting intent for one or more
   * validators.
   */
  signalIntent(request: MsgSignalIntent): Promise<MsgSignalIntentResponse>;
  /**
   * CancelRedemption defines a method for cancelling a redemption request in
   * the queued state.
   */
  cancelRedemption(request: MsgCancelQueuedRedemption): Promise<MsgCancelQueuedRedemptionResponse>;
  /**
   * SignalIntent defines a method for signalling voting intent for one or more
   * validators.
   */
  govCloseChannel(request: MsgGovCloseChannel): Promise<MsgGovCloseChannelResponse>;
  govReopenChannel(request: MsgGovReopenChannel): Promise<MsgGovReopenChannelResponse>;
  govSetLsmCaps(request: MsgGovSetLsmCaps): Promise<MsgGovSetLsmCapsResponse>;
  govAddValidatorDenyList(request: MsgGovAddValidatorDenyList): Promise<MsgGovAddValidatorDenyListResponse>;
  govRemoveValidatorDenyList(request: MsgGovRemoveValidatorDenyList): Promise<MsgGovRemoveValidatorDenyListResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.requestRedemption = this.requestRedemption.bind(this);
    this.signalIntent = this.signalIntent.bind(this);
    this.cancelRedemption = this.cancelRedemption.bind(this);
    this.govCloseChannel = this.govCloseChannel.bind(this);
    this.govReopenChannel = this.govReopenChannel.bind(this);
    this.govSetLsmCaps = this.govSetLsmCaps.bind(this);
    this.govAddValidatorDenyList = this.govAddValidatorDenyList.bind(this);
    this.govRemoveValidatorDenyList = this.govRemoveValidatorDenyList.bind(this);
  }
  requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse> {
    const data = MsgRequestRedemption.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "RequestRedemption", data);
    return promise.then(data => MsgRequestRedemptionResponse.decode(new BinaryReader(data)));
  }
  signalIntent(request: MsgSignalIntent): Promise<MsgSignalIntentResponse> {
    const data = MsgSignalIntent.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "SignalIntent", data);
    return promise.then(data => MsgSignalIntentResponse.decode(new BinaryReader(data)));
  }
  cancelRedemption(request: MsgCancelQueuedRedemption): Promise<MsgCancelQueuedRedemptionResponse> {
    const data = MsgCancelQueuedRedemption.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "CancelRedemption", data);
    return promise.then(data => MsgCancelQueuedRedemptionResponse.decode(new BinaryReader(data)));
  }
  govCloseChannel(request: MsgGovCloseChannel): Promise<MsgGovCloseChannelResponse> {
    const data = MsgGovCloseChannel.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "GovCloseChannel", data);
    return promise.then(data => MsgGovCloseChannelResponse.decode(new BinaryReader(data)));
  }
  govReopenChannel(request: MsgGovReopenChannel): Promise<MsgGovReopenChannelResponse> {
    const data = MsgGovReopenChannel.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "GovReopenChannel", data);
    return promise.then(data => MsgGovReopenChannelResponse.decode(new BinaryReader(data)));
  }
  govSetLsmCaps(request: MsgGovSetLsmCaps): Promise<MsgGovSetLsmCapsResponse> {
    const data = MsgGovSetLsmCaps.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "GovSetLsmCaps", data);
    return promise.then(data => MsgGovSetLsmCapsResponse.decode(new BinaryReader(data)));
  }
  govAddValidatorDenyList(request: MsgGovAddValidatorDenyList): Promise<MsgGovAddValidatorDenyListResponse> {
    const data = MsgGovAddValidatorDenyList.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "GovAddValidatorDenyList", data);
    return promise.then(data => MsgGovAddValidatorDenyListResponse.decode(new BinaryReader(data)));
  }
  govRemoveValidatorDenyList(request: MsgGovRemoveValidatorDenyList): Promise<MsgGovRemoveValidatorDenyListResponse> {
    const data = MsgGovRemoveValidatorDenyList.encode(request).finish();
    const promise = this.rpc.request("quicksilver.interchainstaking.v1.Msg", "GovRemoveValidatorDenyList", data);
    return promise.then(data => MsgGovRemoveValidatorDenyListResponse.decode(new BinaryReader(data)));
  }
}