import { MsgRequestRedemption, MsgSignalIntent, MsgCancelQueuedRedemption } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps, MsgGovAddValidatorDenyList, MsgGovRemoveValidatorDenyList } from "./proposals";
export declare const AminoConverter: {
    "/quicksilver.interchainstaking.v1.MsgRequestRedemption": {
        aminoType: string;
        toAmino: (message: MsgRequestRedemption) => import("./messages").MsgRequestRedemptionAmino;
        fromAmino: (object: import("./messages").MsgRequestRedemptionAmino) => MsgRequestRedemption;
    };
    "/quicksilver.interchainstaking.v1.MsgSignalIntent": {
        aminoType: string;
        toAmino: (message: MsgSignalIntent) => import("./messages").MsgSignalIntentAmino;
        fromAmino: (object: import("./messages").MsgSignalIntentAmino) => MsgSignalIntent;
    };
    "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption": {
        aminoType: string;
        toAmino: (message: MsgCancelQueuedRedemption) => import("./messages").MsgCancelQueuedRedemptionAmino;
        fromAmino: (object: import("./messages").MsgCancelQueuedRedemptionAmino) => MsgCancelQueuedRedemption;
    };
    "/quicksilver.interchainstaking.v1.MsgGovCloseChannel": {
        aminoType: string;
        toAmino: (message: MsgGovCloseChannel) => import("./proposals").MsgGovCloseChannelAmino;
        fromAmino: (object: import("./proposals").MsgGovCloseChannelAmino) => MsgGovCloseChannel;
    };
    "/quicksilver.interchainstaking.v1.MsgGovReopenChannel": {
        aminoType: string;
        toAmino: (message: MsgGovReopenChannel) => import("./proposals").MsgGovReopenChannelAmino;
        fromAmino: (object: import("./proposals").MsgGovReopenChannelAmino) => MsgGovReopenChannel;
    };
    "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps": {
        aminoType: string;
        toAmino: (message: MsgGovSetLsmCaps) => import("./proposals").MsgGovSetLsmCapsAmino;
        fromAmino: (object: import("./proposals").MsgGovSetLsmCapsAmino) => MsgGovSetLsmCaps;
    };
    "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList": {
        aminoType: string;
        toAmino: (message: MsgGovAddValidatorDenyList) => import("./proposals").MsgGovAddValidatorDenyListAmino;
        fromAmino: (object: import("./proposals").MsgGovAddValidatorDenyListAmino) => MsgGovAddValidatorDenyList;
    };
    "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList": {
        aminoType: string;
        toAmino: (message: MsgGovRemoveValidatorDenyList) => import("./proposals").MsgGovRemoveValidatorDenyListAmino;
        fromAmino: (object: import("./proposals").MsgGovRemoveValidatorDenyListAmino) => MsgGovRemoveValidatorDenyList;
    };
};
