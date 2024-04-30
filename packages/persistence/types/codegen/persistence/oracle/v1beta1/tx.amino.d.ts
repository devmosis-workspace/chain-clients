import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent, MsgAddFundsToRewardPool } from "./tx";
export declare const AminoConverter: {
    "/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote": {
        aminoType: string;
        toAmino: (message: MsgAggregateExchangeRatePrevote) => import("./tx").MsgAggregateExchangeRatePrevoteAmino;
        fromAmino: (object: import("./tx").MsgAggregateExchangeRatePrevoteAmino) => MsgAggregateExchangeRatePrevote;
    };
    "/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: (message: MsgAggregateExchangeRateVote) => import("./tx").MsgAggregateExchangeRateVoteAmino;
        fromAmino: (object: import("./tx").MsgAggregateExchangeRateVoteAmino) => MsgAggregateExchangeRateVote;
    };
    "/persistence.oracle.v1beta1.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: (message: MsgDelegateFeedConsent) => import("./tx").MsgDelegateFeedConsentAmino;
        fromAmino: (object: import("./tx").MsgDelegateFeedConsentAmino) => MsgDelegateFeedConsent;
    };
    "/persistence.oracle.v1beta1.MsgAddFundsToRewardPool": {
        aminoType: string;
        toAmino: (message: MsgAddFundsToRewardPool) => import("./tx").MsgAddFundsToRewardPoolAmino;
        fromAmino: (object: import("./tx").MsgAddFundsToRewardPoolAmino) => MsgAddFundsToRewardPool;
    };
};
