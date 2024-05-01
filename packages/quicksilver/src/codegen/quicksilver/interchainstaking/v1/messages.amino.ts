import { MsgRequestRedemption, MsgSignalIntent, MsgCancelQueuedRedemption } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps, MsgGovAddValidatorDenyList, MsgGovRemoveValidatorDenyList } from "./proposals";
export const AminoConverter = {
  "/quicksilver.interchainstaking.v1.MsgRequestRedemption": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
    toAmino: MsgRequestRedemption.toAmino,
    fromAmino: MsgRequestRedemption.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgSignalIntent": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
    toAmino: MsgSignalIntent.toAmino,
    fromAmino: MsgSignalIntent.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption",
    toAmino: MsgCancelQueuedRedemption.toAmino,
    fromAmino: MsgCancelQueuedRedemption.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgGovCloseChannel": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
    toAmino: MsgGovCloseChannel.toAmino,
    fromAmino: MsgGovCloseChannel.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgGovReopenChannel": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
    toAmino: MsgGovReopenChannel.toAmino,
    fromAmino: MsgGovReopenChannel.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
    toAmino: MsgGovSetLsmCaps.toAmino,
    fromAmino: MsgGovSetLsmCaps.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList",
    toAmino: MsgGovAddValidatorDenyList.toAmino,
    fromAmino: MsgGovAddValidatorDenyList.fromAmino
  },
  "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList": {
    aminoType: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList",
    toAmino: MsgGovRemoveValidatorDenyList.toAmino,
    fromAmino: MsgGovRemoveValidatorDenyList.fromAmino
  }
};