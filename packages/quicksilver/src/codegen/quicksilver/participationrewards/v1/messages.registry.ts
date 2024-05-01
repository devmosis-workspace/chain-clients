import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgSubmitClaim } from "./messages";
import { MsgGovRemoveProtocolData } from "./proposals";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/quicksilver.participationrewards.v1.MsgSubmitClaim", MsgSubmitClaim], ["/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData", MsgGovRemoveProtocolData]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    submitClaim(value: MsgSubmitClaim) {
      return {
        typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
        value: MsgSubmitClaim.encode(value).finish()
      };
    },
    govRemoveProtocolData(value: MsgGovRemoveProtocolData) {
      return {
        typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
        value: MsgGovRemoveProtocolData.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    submitClaim(value: MsgSubmitClaim) {
      return {
        typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
        value
      };
    },
    govRemoveProtocolData(value: MsgGovRemoveProtocolData) {
      return {
        typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
        value
      };
    }
  },
  fromJSON: {
    submitClaim(value: any) {
      return {
        typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
        value: MsgSubmitClaim.fromJSON(value)
      };
    },
    govRemoveProtocolData(value: any) {
      return {
        typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
        value: MsgGovRemoveProtocolData.fromJSON(value)
      };
    }
  },
  fromPartial: {
    submitClaim(value: MsgSubmitClaim) {
      return {
        typeUrl: "/quicksilver.participationrewards.v1.MsgSubmitClaim",
        value: MsgSubmitClaim.fromPartial(value)
      };
    },
    govRemoveProtocolData(value: MsgGovRemoveProtocolData) {
      return {
        typeUrl: "/quicksilver.participationrewards.v1.MsgGovRemoveProtocolData",
        value: MsgGovRemoveProtocolData.fromPartial(value)
      };
    }
  }
};