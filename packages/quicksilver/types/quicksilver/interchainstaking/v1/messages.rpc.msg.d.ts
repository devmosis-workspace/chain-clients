import { Rpc } from "../../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    requestRedemption(request: MsgRequestRedemption): Promise<MsgRequestRedemptionResponse>;
    signalIntent(request: MsgSignalIntent): Promise<MsgSignalIntentResponse>;
    cancelRedemption(request: MsgCancelQueuedRedemption): Promise<MsgCancelQueuedRedemptionResponse>;
    govCloseChannel(request: MsgGovCloseChannel): Promise<MsgGovCloseChannelResponse>;
    govReopenChannel(request: MsgGovReopenChannel): Promise<MsgGovReopenChannelResponse>;
    govSetLsmCaps(request: MsgGovSetLsmCaps): Promise<MsgGovSetLsmCapsResponse>;
    govAddValidatorDenyList(request: MsgGovAddValidatorDenyList): Promise<MsgGovAddValidatorDenyListResponse>;
    govRemoveValidatorDenyList(request: MsgGovRemoveValidatorDenyList): Promise<MsgGovRemoveValidatorDenyListResponse>;
}
