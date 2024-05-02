import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const terraAminoConverters: {
    "/terra.wasm.v1beta1.MsgStoreCode": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1beta1/tx").MsgStoreCode) => import("./wasm/v1beta1/tx").MsgStoreCodeAmino;
        fromAmino: (object: import("./wasm/v1beta1/tx").MsgStoreCodeAmino) => import("./wasm/v1beta1/tx").MsgStoreCode;
    };
    "/terra.wasm.v1beta1.MsgMigrateCode": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1beta1/tx").MsgMigrateCode) => import("./wasm/v1beta1/tx").MsgMigrateCodeAmino;
        fromAmino: (object: import("./wasm/v1beta1/tx").MsgMigrateCodeAmino) => import("./wasm/v1beta1/tx").MsgMigrateCode;
    };
    "/terra.wasm.v1beta1.MsgInstantiateContract": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1beta1/tx").MsgInstantiateContract) => import("./wasm/v1beta1/tx").MsgInstantiateContractAmino;
        fromAmino: (object: import("./wasm/v1beta1/tx").MsgInstantiateContractAmino) => import("./wasm/v1beta1/tx").MsgInstantiateContract;
    };
    "/terra.wasm.v1beta1.MsgExecuteContract": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1beta1/tx").MsgExecuteContract) => import("./wasm/v1beta1/tx").MsgExecuteContractAmino;
        fromAmino: (object: import("./wasm/v1beta1/tx").MsgExecuteContractAmino) => import("./wasm/v1beta1/tx").MsgExecuteContract;
    };
    "/terra.wasm.v1beta1.MsgMigrateContract": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1beta1/tx").MsgMigrateContract) => import("./wasm/v1beta1/tx").MsgMigrateContractAmino;
        fromAmino: (object: import("./wasm/v1beta1/tx").MsgMigrateContractAmino) => import("./wasm/v1beta1/tx").MsgMigrateContract;
    };
    "/terra.wasm.v1beta1.MsgUpdateContractAdmin": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1beta1/tx").MsgUpdateContractAdmin) => import("./wasm/v1beta1/tx").MsgUpdateContractAdminAmino;
        fromAmino: (object: import("./wasm/v1beta1/tx").MsgUpdateContractAdminAmino) => import("./wasm/v1beta1/tx").MsgUpdateContractAdmin;
    };
    "/terra.wasm.v1beta1.MsgClearContractAdmin": {
        aminoType: string;
        toAmino: (message: import("./wasm/v1beta1/tx").MsgClearContractAdmin) => import("./wasm/v1beta1/tx").MsgClearContractAdminAmino;
        fromAmino: (object: import("./wasm/v1beta1/tx").MsgClearContractAdminAmino) => import("./wasm/v1beta1/tx").MsgClearContractAdmin;
    };
    "/terra.oracle.v1beta1.MsgAggregateExchangeRatePrevote": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgAggregateExchangeRatePrevote) => import("./oracle/v1beta1/tx").MsgAggregateExchangeRatePrevoteAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgAggregateExchangeRatePrevoteAmino) => import("./oracle/v1beta1/tx").MsgAggregateExchangeRatePrevote;
    };
    "/terra.oracle.v1beta1.MsgAggregateExchangeRateVote": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgAggregateExchangeRateVote) => import("./oracle/v1beta1/tx").MsgAggregateExchangeRateVoteAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgAggregateExchangeRateVoteAmino) => import("./oracle/v1beta1/tx").MsgAggregateExchangeRateVote;
    };
    "/terra.oracle.v1beta1.MsgDelegateFeedConsent": {
        aminoType: string;
        toAmino: (message: import("./oracle/v1beta1/tx").MsgDelegateFeedConsent) => import("./oracle/v1beta1/tx").MsgDelegateFeedConsentAmino;
        fromAmino: (object: import("./oracle/v1beta1/tx").MsgDelegateFeedConsentAmino) => import("./oracle/v1beta1/tx").MsgDelegateFeedConsent;
    };
    "/terra.market.v1beta1.MsgSwap": {
        aminoType: string;
        toAmino: (message: import("./market/v1beta1/tx").MsgSwap) => import("./market/v1beta1/tx").MsgSwapAmino;
        fromAmino: (object: import("./market/v1beta1/tx").MsgSwapAmino) => import("./market/v1beta1/tx").MsgSwap;
    };
    "/terra.market.v1beta1.MsgSwapSend": {
        aminoType: string;
        toAmino: (message: import("./market/v1beta1/tx").MsgSwapSend) => import("./market/v1beta1/tx").MsgSwapSendAmino;
        fromAmino: (object: import("./market/v1beta1/tx").MsgSwapSendAmino) => import("./market/v1beta1/tx").MsgSwapSend;
    };
};
export declare const terraProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningTerraClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningTerraClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<any>;
