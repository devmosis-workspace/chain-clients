import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export declare const AminoConverter: {
    "/terra.oracle.v1beta1.MsgAggregateExchangeRatePrevote": {
        aminoType: string;
        toAmino: (message: MsgAggregateExchangeRatePrevote) => import("./tx").MsgAggregateExchangeRatePrevoteAmino;
        fromAmino: (object: import("./tx").MsgAggregateExchangeRatePrevoteAmino) => MsgAggregateExchangeRatePrevote;
    };
    "/terra.oracle.v1beta1.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: (message: MsgAggregateExchangeRateVote) => import("./tx").MsgAggregateExchangeRateVoteAmino;
        fromAmino: (object: import("./tx").MsgAggregateExchangeRateVoteAmino) => MsgAggregateExchangeRateVote;
    };
    "/terra.oracle.v1beta1.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: (message: MsgDelegateFeedConsent) => import("./tx").MsgDelegateFeedConsentAmino;
        fromAmino: (object: import("./tx").MsgDelegateFeedConsentAmino) => MsgDelegateFeedConsent;
    };
};
