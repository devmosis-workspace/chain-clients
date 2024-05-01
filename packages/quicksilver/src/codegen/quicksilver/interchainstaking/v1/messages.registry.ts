import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgRequestRedemption, MsgSignalIntent, MsgCancelQueuedRedemption } from "./messages";
import { MsgGovCloseChannel, MsgGovReopenChannel, MsgGovSetLsmCaps, MsgGovAddValidatorDenyList, MsgGovRemoveValidatorDenyList } from "./proposals";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/quicksilver.interchainstaking.v1.MsgRequestRedemption", MsgRequestRedemption], ["/quicksilver.interchainstaking.v1.MsgSignalIntent", MsgSignalIntent], ["/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption", MsgCancelQueuedRedemption], ["/quicksilver.interchainstaking.v1.MsgGovCloseChannel", MsgGovCloseChannel], ["/quicksilver.interchainstaking.v1.MsgGovReopenChannel", MsgGovReopenChannel], ["/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps", MsgGovSetLsmCaps], ["/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList", MsgGovAddValidatorDenyList], ["/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList", MsgGovRemoveValidatorDenyList]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    requestRedemption(value: MsgRequestRedemption) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
        value: MsgRequestRedemption.encode(value).finish()
      };
    },
    signalIntent(value: MsgSignalIntent) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
        value: MsgSignalIntent.encode(value).finish()
      };
    },
    cancelRedemption(value: MsgCancelQueuedRedemption) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption",
        value: MsgCancelQueuedRedemption.encode(value).finish()
      };
    },
    govCloseChannel(value: MsgGovCloseChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
        value: MsgGovCloseChannel.encode(value).finish()
      };
    },
    govReopenChannel(value: MsgGovReopenChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
        value: MsgGovReopenChannel.encode(value).finish()
      };
    },
    govSetLsmCaps(value: MsgGovSetLsmCaps) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
        value: MsgGovSetLsmCaps.encode(value).finish()
      };
    },
    govAddValidatorDenyList(value: MsgGovAddValidatorDenyList) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList",
        value: MsgGovAddValidatorDenyList.encode(value).finish()
      };
    },
    govRemoveValidatorDenyList(value: MsgGovRemoveValidatorDenyList) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList",
        value: MsgGovRemoveValidatorDenyList.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    requestRedemption(value: MsgRequestRedemption) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
        value
      };
    },
    signalIntent(value: MsgSignalIntent) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
        value
      };
    },
    cancelRedemption(value: MsgCancelQueuedRedemption) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption",
        value
      };
    },
    govCloseChannel(value: MsgGovCloseChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
        value
      };
    },
    govReopenChannel(value: MsgGovReopenChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
        value
      };
    },
    govSetLsmCaps(value: MsgGovSetLsmCaps) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
        value
      };
    },
    govAddValidatorDenyList(value: MsgGovAddValidatorDenyList) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList",
        value
      };
    },
    govRemoveValidatorDenyList(value: MsgGovRemoveValidatorDenyList) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList",
        value
      };
    }
  },
  fromJSON: {
    requestRedemption(value: any) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
        value: MsgRequestRedemption.fromJSON(value)
      };
    },
    signalIntent(value: any) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
        value: MsgSignalIntent.fromJSON(value)
      };
    },
    cancelRedemption(value: any) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption",
        value: MsgCancelQueuedRedemption.fromJSON(value)
      };
    },
    govCloseChannel(value: any) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
        value: MsgGovCloseChannel.fromJSON(value)
      };
    },
    govReopenChannel(value: any) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
        value: MsgGovReopenChannel.fromJSON(value)
      };
    },
    govSetLsmCaps(value: any) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
        value: MsgGovSetLsmCaps.fromJSON(value)
      };
    },
    govAddValidatorDenyList(value: any) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList",
        value: MsgGovAddValidatorDenyList.fromJSON(value)
      };
    },
    govRemoveValidatorDenyList(value: any) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList",
        value: MsgGovRemoveValidatorDenyList.fromJSON(value)
      };
    }
  },
  fromPartial: {
    requestRedemption(value: MsgRequestRedemption) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
        value: MsgRequestRedemption.fromPartial(value)
      };
    },
    signalIntent(value: MsgSignalIntent) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
        value: MsgSignalIntent.fromPartial(value)
      };
    },
    cancelRedemption(value: MsgCancelQueuedRedemption) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgCancelQueuedRedemption",
        value: MsgCancelQueuedRedemption.fromPartial(value)
      };
    },
    govCloseChannel(value: MsgGovCloseChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovCloseChannel",
        value: MsgGovCloseChannel.fromPartial(value)
      };
    },
    govReopenChannel(value: MsgGovReopenChannel) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovReopenChannel",
        value: MsgGovReopenChannel.fromPartial(value)
      };
    },
    govSetLsmCaps(value: MsgGovSetLsmCaps) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovSetLsmCaps",
        value: MsgGovSetLsmCaps.fromPartial(value)
      };
    },
    govAddValidatorDenyList(value: MsgGovAddValidatorDenyList) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovAddValidatorDenyList",
        value: MsgGovAddValidatorDenyList.fromPartial(value)
      };
    },
    govRemoveValidatorDenyList(value: MsgGovRemoveValidatorDenyList) {
      return {
        typeUrl: "/quicksilver.interchainstaking.v1.MsgGovRemoveValidatorDenyList",
        value: MsgGovRemoveValidatorDenyList.fromPartial(value)
      };
    }
  }
};