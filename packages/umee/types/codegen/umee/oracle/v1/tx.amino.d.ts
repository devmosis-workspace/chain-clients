import { AminoMsg } from "@cosmjs/amino";
import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent } from "./tx";
export interface MsgAggregateExchangeRatePrevoteAminoType extends AminoMsg {
    type: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote";
    value: {
        hash: string;
        feeder: string;
        validator: string;
    };
}
export interface MsgAggregateExchangeRateVoteAminoType extends AminoMsg {
    type: "/umee.oracle.v1.MsgAggregateExchangeRateVote";
    value: {
        salt: string;
        exchange_rates: string;
        feeder: string;
        validator: string;
    };
}
export interface MsgDelegateFeedConsentAminoType extends AminoMsg {
    type: "/umee.oracle.v1.MsgDelegateFeedConsent";
    value: {
        operator: string;
        delegate: string;
    };
}
export declare const AminoConverter: {
    "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
        aminoType: string;
        toAmino: ({ hash, feeder, validator }: MsgAggregateExchangeRatePrevote) => MsgAggregateExchangeRatePrevoteAminoType["value"];
        fromAmino: ({ hash, feeder, validator }: MsgAggregateExchangeRatePrevoteAminoType["value"]) => MsgAggregateExchangeRatePrevote;
    };
    "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: ({ salt, exchangeRates, feeder, validator }: MsgAggregateExchangeRateVote) => MsgAggregateExchangeRateVoteAminoType["value"];
        fromAmino: ({ salt, exchange_rates, feeder, validator }: MsgAggregateExchangeRateVoteAminoType["value"]) => MsgAggregateExchangeRateVote;
    };
    "/umee.oracle.v1.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: ({ operator, delegate }: MsgDelegateFeedConsent) => MsgDelegateFeedConsentAminoType["value"];
        fromAmino: ({ operator, delegate }: MsgDelegateFeedConsentAminoType["value"]) => MsgDelegateFeedConsent;
    };
};
