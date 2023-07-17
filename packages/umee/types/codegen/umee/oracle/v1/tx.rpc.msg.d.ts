import { Rpc } from "../../../helpers";
import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRatePrevoteResponse, MsgAggregateExchangeRateVote, MsgAggregateExchangeRateVoteResponse, MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse } from "./tx";
/** Msg defines the oracle Msg service. */
export interface Msg {
    /**
     * AggregateExchangeRatePrevote defines a method for submitting an aggregate
     * exchange rate prevote.
     */
    aggregateExchangeRatePrevote(request: MsgAggregateExchangeRatePrevote): Promise<MsgAggregateExchangeRatePrevoteResponse>;
    /**
     * AggregateExchangeRateVote defines a method for submitting an aggregate
     * exchange rate vote.
     */
    aggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse>;
    /** DelegateFeedConsent defines a method for setting the feeder delegation. */
    delegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    aggregateExchangeRatePrevote(request: MsgAggregateExchangeRatePrevote): Promise<MsgAggregateExchangeRatePrevoteResponse>;
    aggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse>;
    delegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse>;
}
