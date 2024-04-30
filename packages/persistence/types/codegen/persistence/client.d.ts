import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const persistenceAminoConverters: {
    "/persistence.oracle.v1beta1.MsgAggregateExchangeRatePrevote": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgAggregateExchangeRatePrevote) => import("./oracle/v1beta1/tx").MsgAggregateExchangeRatePrevoteAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgAggregateExchangeRatePrevoteAmino) => import("./oracle/v1beta1/tx").MsgAggregateExchangeRatePrevote;
    };
    "/persistence.oracle.v1beta1.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgAggregateExchangeRateVote) => import("./oracle/v1beta1/tx").MsgAggregateExchangeRateVoteAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgAggregateExchangeRateVoteAmino) => import("./oracle/v1beta1/tx").MsgAggregateExchangeRateVote;
    };
    "/persistence.oracle.v1beta1.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgDelegateFeedConsent) => import("./oracle/v1beta1/tx").MsgDelegateFeedConsentAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgDelegateFeedConsentAmino) => import("./oracle/v1beta1/tx").MsgDelegateFeedConsent;
    };
    "/persistence.oracle.v1beta1.MsgAddFundsToRewardPool": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgAddFundsToRewardPool) => import("./oracle/v1beta1/tx").MsgAddFundsToRewardPoolAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgAddFundsToRewardPoolAmino) => import("./oracle/v1beta1/tx").MsgAddFundsToRewardPool;
    };
    "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: (message: import("./interchainquery/v1beta1/messages").MsgSubmitQueryResponse) => import("./interchainquery/v1beta1/messages").MsgSubmitQueryResponseAmino;
        fromAmino: (object: import("./interchainquery/v1beta1/messages").MsgSubmitQueryResponseAmino) => import("./interchainquery/v1beta1/messages").MsgSubmitQueryResponse;
    };
};
export declare const persistenceProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPersistenceClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPersistenceClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
