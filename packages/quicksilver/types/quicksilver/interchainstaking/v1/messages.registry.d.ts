import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRequestRedemption, MsgSignalIntent, MsgCancelQueuedRedemption } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps, MsgGovAddValidatorDenyList, MsgGovRemoveValidatorDenyList } from "./proposals";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: Uint8Array;
        };
        signalIntent(value: MsgSignalIntent): {
            typeUrl: string;
            value: Uint8Array;
        };
        cancelRedemption(value: MsgCancelQueuedRedemption): {
            typeUrl: string;
            value: Uint8Array;
        };
        govCloseChannel(value: MsgGovCloseChannel): {
            typeUrl: string;
            value: Uint8Array;
        };
        govReopenChannel(value: MsgGovReopenChannel): {
            typeUrl: string;
            value: Uint8Array;
        };
        govSetLsmCaps(value: MsgGovSetLsmCaps): {
            typeUrl: string;
            value: Uint8Array;
        };
        govAddValidatorDenyList(value: MsgGovAddValidatorDenyList): {
            typeUrl: string;
            value: Uint8Array;
        };
        govRemoveValidatorDenyList(value: MsgGovRemoveValidatorDenyList): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
        signalIntent(value: MsgSignalIntent): {
            typeUrl: string;
            value: MsgSignalIntent;
        };
        cancelRedemption(value: MsgCancelQueuedRedemption): {
            typeUrl: string;
            value: MsgCancelQueuedRedemption;
        };
        govCloseChannel(value: MsgGovCloseChannel): {
            typeUrl: string;
            value: MsgGovCloseChannel;
        };
        govReopenChannel(value: MsgGovReopenChannel): {
            typeUrl: string;
            value: MsgGovReopenChannel;
        };
        govSetLsmCaps(value: MsgGovSetLsmCaps): {
            typeUrl: string;
            value: MsgGovSetLsmCaps;
        };
        govAddValidatorDenyList(value: MsgGovAddValidatorDenyList): {
            typeUrl: string;
            value: MsgGovAddValidatorDenyList;
        };
        govRemoveValidatorDenyList(value: MsgGovRemoveValidatorDenyList): {
            typeUrl: string;
            value: MsgGovRemoveValidatorDenyList;
        };
    };
    fromJSON: {
        requestRedemption(value: any): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
        signalIntent(value: any): {
            typeUrl: string;
            value: MsgSignalIntent;
        };
        cancelRedemption(value: any): {
            typeUrl: string;
            value: MsgCancelQueuedRedemption;
        };
        govCloseChannel(value: any): {
            typeUrl: string;
            value: MsgGovCloseChannel;
        };
        govReopenChannel(value: any): {
            typeUrl: string;
            value: MsgGovReopenChannel;
        };
        govSetLsmCaps(value: any): {
            typeUrl: string;
            value: MsgGovSetLsmCaps;
        };
        govAddValidatorDenyList(value: any): {
            typeUrl: string;
            value: MsgGovAddValidatorDenyList;
        };
        govRemoveValidatorDenyList(value: any): {
            typeUrl: string;
            value: MsgGovRemoveValidatorDenyList;
        };
    };
    fromPartial: {
        requestRedemption(value: MsgRequestRedemption): {
            typeUrl: string;
            value: MsgRequestRedemption;
        };
        signalIntent(value: MsgSignalIntent): {
            typeUrl: string;
            value: MsgSignalIntent;
        };
        cancelRedemption(value: MsgCancelQueuedRedemption): {
            typeUrl: string;
            value: MsgCancelQueuedRedemption;
        };
        govCloseChannel(value: MsgGovCloseChannel): {
            typeUrl: string;
            value: MsgGovCloseChannel;
        };
        govReopenChannel(value: MsgGovReopenChannel): {
            typeUrl: string;
            value: MsgGovReopenChannel;
        };
        govSetLsmCaps(value: MsgGovSetLsmCaps): {
            typeUrl: string;
            value: MsgGovSetLsmCaps;
        };
        govAddValidatorDenyList(value: MsgGovAddValidatorDenyList): {
            typeUrl: string;
            value: MsgGovAddValidatorDenyList;
        };
        govRemoveValidatorDenyList(value: MsgGovRemoveValidatorDenyList): {
            typeUrl: string;
            value: MsgGovRemoveValidatorDenyList;
        };
    };
};
