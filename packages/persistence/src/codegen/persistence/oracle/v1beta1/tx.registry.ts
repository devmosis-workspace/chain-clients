import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent, MsgAddFundsToRewardPool } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote", MsgAggregateExchangeRatePrevote], ["/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote", MsgAggregateExchangeRateVote], ["/persistence.oracle.v1beta1.MsgDelegateFeedConsent", MsgDelegateFeedConsent], ["/persistence.oracle.v1beta1.MsgAddFundsToRewardPool", MsgAddFundsToRewardPool]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    aggregateExchangeRatePrevote(value: MsgAggregateExchangeRatePrevote) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote",
        value: MsgAggregateExchangeRatePrevote.encode(value).finish()
      };
    },
    aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote",
        value: MsgAggregateExchangeRateVote.encode(value).finish()
      };
    },
    delegateFeedConsent(value: MsgDelegateFeedConsent) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgDelegateFeedConsent",
        value: MsgDelegateFeedConsent.encode(value).finish()
      };
    },
    addFundsToRewardPool(value: MsgAddFundsToRewardPool) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAddFundsToRewardPool",
        value: MsgAddFundsToRewardPool.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    aggregateExchangeRatePrevote(value: MsgAggregateExchangeRatePrevote) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote",
        value
      };
    },
    aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote",
        value
      };
    },
    delegateFeedConsent(value: MsgDelegateFeedConsent) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgDelegateFeedConsent",
        value
      };
    },
    addFundsToRewardPool(value: MsgAddFundsToRewardPool) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAddFundsToRewardPool",
        value
      };
    }
  },
  fromJSON: {
    aggregateExchangeRatePrevote(value: any) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote",
        value: MsgAggregateExchangeRatePrevote.fromJSON(value)
      };
    },
    aggregateExchangeRateVote(value: any) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote",
        value: MsgAggregateExchangeRateVote.fromJSON(value)
      };
    },
    delegateFeedConsent(value: any) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgDelegateFeedConsent",
        value: MsgDelegateFeedConsent.fromJSON(value)
      };
    },
    addFundsToRewardPool(value: any) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAddFundsToRewardPool",
        value: MsgAddFundsToRewardPool.fromJSON(value)
      };
    }
  },
  fromPartial: {
    aggregateExchangeRatePrevote(value: MsgAggregateExchangeRatePrevote) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote",
        value: MsgAggregateExchangeRatePrevote.fromPartial(value)
      };
    },
    aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote",
        value: MsgAggregateExchangeRateVote.fromPartial(value)
      };
    },
    delegateFeedConsent(value: MsgDelegateFeedConsent) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgDelegateFeedConsent",
        value: MsgDelegateFeedConsent.fromPartial(value)
      };
    },
    addFundsToRewardPool(value: MsgAddFundsToRewardPool) {
      return {
        typeUrl: "/persistence.oracle.v1beta1.MsgAddFundsToRewardPool",
        value: MsgAddFundsToRewardPool.fromPartial(value)
      };
    }
  }
};