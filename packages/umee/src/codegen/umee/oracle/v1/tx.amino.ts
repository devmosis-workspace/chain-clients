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
export const AminoConverter = {
  "/umee.oracle.v1.MsgAggregateExchangeRatePrevote": {
    aminoType: "/umee.oracle.v1.MsgAggregateExchangeRatePrevote",
    toAmino: ({
      hash,
      feeder,
      validator
    }: MsgAggregateExchangeRatePrevote): MsgAggregateExchangeRatePrevoteAminoType["value"] => {
      return {
        hash,
        feeder,
        validator
      };
    },
    fromAmino: ({
      hash,
      feeder,
      validator
    }: MsgAggregateExchangeRatePrevoteAminoType["value"]): MsgAggregateExchangeRatePrevote => {
      return {
        hash,
        feeder,
        validator
      };
    }
  },
  "/umee.oracle.v1.MsgAggregateExchangeRateVote": {
    aminoType: "/umee.oracle.v1.MsgAggregateExchangeRateVote",
    toAmino: ({
      salt,
      exchangeRates,
      feeder,
      validator
    }: MsgAggregateExchangeRateVote): MsgAggregateExchangeRateVoteAminoType["value"] => {
      return {
        salt,
        exchange_rates: exchangeRates,
        feeder,
        validator
      };
    },
    fromAmino: ({
      salt,
      exchange_rates,
      feeder,
      validator
    }: MsgAggregateExchangeRateVoteAminoType["value"]): MsgAggregateExchangeRateVote => {
      return {
        salt,
        exchangeRates: exchange_rates,
        feeder,
        validator
      };
    }
  },
  "/umee.oracle.v1.MsgDelegateFeedConsent": {
    aminoType: "/umee.oracle.v1.MsgDelegateFeedConsent",
    toAmino: ({
      operator,
      delegate
    }: MsgDelegateFeedConsent): MsgDelegateFeedConsentAminoType["value"] => {
      return {
        operator,
        delegate
      };
    },
    fromAmino: ({
      operator,
      delegate
    }: MsgDelegateFeedConsentAminoType["value"]): MsgDelegateFeedConsent => {
      return {
        operator,
        delegate
      };
    }
  }
};