import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export const AminoConverter = {
  "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
    aminoType: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
    toAmino: MsgAggregateExchangeRatePrevote.toAmino,
    fromAmino: MsgAggregateExchangeRatePrevote.fromAmino
  },
  "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
    aminoType: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
    toAmino: MsgAggregateExchangeRateVote.toAmino,
    fromAmino: MsgAggregateExchangeRateVote.fromAmino
  },
  "/umee.oracle.v1.MsgDelegateFeedConsent": {
    aminoType: "/umee.oracle.v1.MsgDelegateFeedConsent",
    toAmino: MsgDelegateFeedConsent.toAmino,
    fromAmino: MsgDelegateFeedConsent.fromAmino
  }
};