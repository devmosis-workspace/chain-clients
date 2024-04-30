import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRatePrevoteResponse, MsgAggregateExchangeRateVote, MsgAggregateExchangeRateVoteResponse, MsgDelegateFeedConsent, MsgDelegateFeedConsentResponse, MsgAddFundsToRewardPool, MsgAddFundsToRewardPoolResponse } from "./tx";
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
  /** AddFundsToRewardPool */
  addFundsToRewardPool(request: MsgAddFundsToRewardPool): Promise<MsgAddFundsToRewardPoolResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.aggregateExchangeRatePrevote = this.aggregateExchangeRatePrevote.bind(this);
    this.aggregateExchangeRateVote = this.aggregateExchangeRateVote.bind(this);
    this.delegateFeedConsent = this.delegateFeedConsent.bind(this);
    this.addFundsToRewardPool = this.addFundsToRewardPool.bind(this);
  }
  aggregateExchangeRatePrevote(request: MsgAggregateExchangeRatePrevote): Promise<MsgAggregateExchangeRatePrevoteResponse> {
    const data = MsgAggregateExchangeRatePrevote.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Msg", "AggregateExchangeRatePrevote", data);
    return promise.then(data => MsgAggregateExchangeRatePrevoteResponse.decode(new BinaryReader(data)));
  }
  aggregateExchangeRateVote(request: MsgAggregateExchangeRateVote): Promise<MsgAggregateExchangeRateVoteResponse> {
    const data = MsgAggregateExchangeRateVote.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Msg", "AggregateExchangeRateVote", data);
    return promise.then(data => MsgAggregateExchangeRateVoteResponse.decode(new BinaryReader(data)));
  }
  delegateFeedConsent(request: MsgDelegateFeedConsent): Promise<MsgDelegateFeedConsentResponse> {
    const data = MsgDelegateFeedConsent.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Msg", "DelegateFeedConsent", data);
    return promise.then(data => MsgDelegateFeedConsentResponse.decode(new BinaryReader(data)));
  }
  addFundsToRewardPool(request: MsgAddFundsToRewardPool): Promise<MsgAddFundsToRewardPoolResponse> {
    const data = MsgAddFundsToRewardPool.encode(request).finish();
    const promise = this.rpc.request("persistence.oracle.v1beta1.Msg", "AddFundsToRewardPool", data);
    return promise.then(data => MsgAddFundsToRewardPoolResponse.decode(new BinaryReader(data)));
  }
}