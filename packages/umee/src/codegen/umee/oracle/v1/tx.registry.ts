import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/umee.oracle.v1.MsgAggregateExchangeRatePrevote", MsgAggregateExchangeRatePrevote], ["/umee.oracle.v1.MsgAggregateExchangeRateVote", MsgAggregateExchangeRateVote], ["/umee.oracle.v1.MsgDelegateFeedConsent", MsgDelegateFeedConsent]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    aggregateExchangeRatePrevote(value: MsgAggregateExchangeRatePrevote) {
      return {
        typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
        value: MsgAggregateExchangeRatePrevote.encode(value).finish()
      };
    },
    aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
      return {
        typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
        value: MsgAggregateExchangeRateVote.encode(value).finish()
      };
    },
    delegateFeedConsent(value: MsgDelegateFeedConsent) {
      return {
        typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
        value: MsgDelegateFeedConsent.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    aggregateExchangeRatePrevote(value: MsgAggregateExchangeRatePrevote) {
      return {
        typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
        value
      };
    },
    aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
      return {
        typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
        value
      };
    },
    delegateFeedConsent(value: MsgDelegateFeedConsent) {
      return {
        typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
        value
      };
    }
  },
  fromJSON: {
    aggregateExchangeRatePrevote(value: any) {
      return {
        typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
        value: MsgAggregateExchangeRatePrevote.fromJSON(value)
      };
    },
    aggregateExchangeRateVote(value: any) {
      return {
        typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
        value: MsgAggregateExchangeRateVote.fromJSON(value)
      };
    },
    delegateFeedConsent(value: any) {
      return {
        typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
        value: MsgDelegateFeedConsent.fromJSON(value)
      };
    }
  },
  fromPartial: {
    aggregateExchangeRatePrevote(value: MsgAggregateExchangeRatePrevote) {
      return {
        typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
        value: MsgAggregateExchangeRatePrevote.fromPartial(value)
      };
    },
    aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
      return {
        typeUrl: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
        value: MsgAggregateExchangeRateVote.fromPartial(value)
      };
    },
    delegateFeedConsent(value: MsgDelegateFeedConsent) {
      return {
        typeUrl: "/umee.oracle.v1.MsgDelegateFeedConsent",
        value: MsgDelegateFeedConsent.fromPartial(value)
      };
    }
  }
};