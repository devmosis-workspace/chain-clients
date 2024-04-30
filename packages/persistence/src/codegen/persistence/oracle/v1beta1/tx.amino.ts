import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent, MsgAddFundsToRewardPool } from "./tx";
export const AminoConverter = {
  "/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote": {
    aminoType: "/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote",
    toAmino: MsgAggregateExchangeRatePrevote.toAmino,
    fromAmino: MsgAggregateExchangeRatePrevote.fromAmino
  },
  "/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote": {
    aminoType: "/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote",
    toAmino: MsgAggregateExchangeRateVote.toAmino,
    fromAmino: MsgAggregateExchangeRateVote.fromAmino
  },
  "/persistence.oracle.v1beta1.MsgDelegateFeedConsent": {
    aminoType: "/persistence.oracle.v1beta1.MsgDelegateFeedConsent",
    toAmino: MsgDelegateFeedConsent.toAmino,
    fromAmino: MsgDelegateFeedConsent.fromAmino
  },
  "/persistence.oracle.v1beta1.MsgAddFundsToRewardPool": {
    aminoType: "/persistence.oracle.v1beta1.MsgAddFundsToRewardPool",
    toAmino: MsgAddFundsToRewardPool.toAmino,
    fromAmino: MsgAddFundsToRewardPool.fromAmino
  }
};