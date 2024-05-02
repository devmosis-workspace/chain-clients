import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export const AminoConverter = {
  "/terra.oracle.v1beta1.MsgAggregateExchangeRatePrevote": {
    aminoType: "/terra.oracle.v1beta1.MsgAggregateExchangeRatePrevote",
    toAmino: MsgAggregateExchangeRatePrevote.toAmino,
    fromAmino: MsgAggregateExchangeRatePrevote.fromAmino
  },
  "/terra.oracle.v1beta1.MsgAggregateExchangeRateVote": {
    aminoType: "/terra.oracle.v1beta1.MsgAggregateExchangeRateVote",
    toAmino: MsgAggregateExchangeRateVote.toAmino,
    fromAmino: MsgAggregateExchangeRateVote.fromAmino
  },
  "/terra.oracle.v1beta1.MsgDelegateFeedConsent": {
    aminoType: "/terra.oracle.v1beta1.MsgDelegateFeedConsent",
    toAmino: MsgDelegateFeedConsent.toAmino,
    fromAmino: MsgDelegateFeedConsent.fromAmino
  }
};