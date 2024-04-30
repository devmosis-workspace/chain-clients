import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgAggregateExchangeRatePrevote, MsgAggregateExchangeRateVote, MsgDelegateFeedConsent, MsgAddFundsToRewardPool } from "./tx";
export declare const registry: ReadonlyArray<[string, GeneratedType]>;
export declare const load: (protoRegistry: Registry) => void;
export declare const MessageComposer: {
    encoded: {
        aggregateExchangeRatePrevote(value: MsgAggregateExchangeRatePrevote): {
            typeUrl: string;
            value: Uint8Array;
        };
        aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote): {
            typeUrl: string;
            value: Uint8Array;
        };
        delegateFeedConsent(value: MsgDelegateFeedConsent): {
            typeUrl: string;
            value: Uint8Array;
        };
        addFundsToRewardPool(value: MsgAddFundsToRewardPool): {
            typeUrl: string;
            value: Uint8Array;
        };
    };
    withTypeUrl: {
        aggregateExchangeRatePrevote(value: MsgAggregateExchangeRatePrevote): {
            typeUrl: string;
            value: MsgAggregateExchangeRatePrevote;
        };
        aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote): {
            typeUrl: string;
            value: MsgAggregateExchangeRateVote;
        };
        delegateFeedConsent(value: MsgDelegateFeedConsent): {
            typeUrl: string;
            value: MsgDelegateFeedConsent;
        };
        addFundsToRewardPool(value: MsgAddFundsToRewardPool): {
            typeUrl: string;
            value: MsgAddFundsToRewardPool;
        };
    };
    fromJSON: {
        aggregateExchangeRatePrevote(value: any): {
            typeUrl: string;
            value: MsgAggregateExchangeRatePrevote;
        };
        aggregateExchangeRateVote(value: any): {
            typeUrl: string;
            value: MsgAggregateExchangeRateVote;
        };
        delegateFeedConsent(value: any): {
            typeUrl: string;
            value: MsgDelegateFeedConsent;
        };
        addFundsToRewardPool(value: any): {
            typeUrl: string;
            value: MsgAddFundsToRewardPool;
        };
    };
    fromPartial: {
        aggregateExchangeRatePrevote(value: MsgAggregateExchangeRatePrevote): {
            typeUrl: string;
            value: MsgAggregateExchangeRatePrevote;
        };
        aggregateExchangeRateVote(value: MsgAggregateExchangeRateVote): {
            typeUrl: string;
            value: MsgAggregateExchangeRateVote;
        };
        delegateFeedConsent(value: MsgDelegateFeedConsent): {
            typeUrl: string;
            value: MsgDelegateFeedConsent;
        };
        addFundsToRewardPool(value: MsgAddFundsToRewardPool): {
            typeUrl: string;
            value: MsgAddFundsToRewardPool;
        };
    };
};
