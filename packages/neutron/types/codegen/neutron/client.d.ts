import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const neutronAminoConverters: {
    "/neutron.transfer.MsgTransfer": {
        aminoType: string;
        toAmino: (message: import("./transfer/v1/tx").MsgTransfer) => import("./transfer/v1/tx").MsgTransferAmino;
        fromAmino: (object: import("./transfer/v1/tx").MsgTransferAmino) => import("./transfer/v1/tx").MsgTransfer;
    };
    "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: (message: import("./interchaintxs/v1/tx").MsgRegisterInterchainAccount) => import("./interchaintxs/v1/tx").MsgRegisterInterchainAccountAmino;
        fromAmino: (object: import("./interchaintxs/v1/tx").MsgRegisterInterchainAccountAmino) => import("./interchaintxs/v1/tx").MsgRegisterInterchainAccount;
    };
    "/neutron.interchaintxs.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: (message: import("./interchaintxs/v1/tx").MsgSubmitTx) => import("./interchaintxs/v1/tx").MsgSubmitTxAmino;
        fromAmino: (object: import("./interchaintxs/v1/tx").MsgSubmitTxAmino) => import("./interchaintxs/v1/tx").MsgSubmitTx;
    };
    "/neutron.interchaintxs.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./interchaintxs/v1/tx").MsgUpdateParams) => import("./interchaintxs/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./interchaintxs/v1/tx").MsgUpdateParamsAmino) => import("./interchaintxs/v1/tx").MsgUpdateParams;
    };
    "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
        aminoType: string;
        toAmino: (message: import("./interchainqueries/tx").MsgRegisterInterchainQuery) => import("./interchainqueries/tx").MsgRegisterInterchainQueryAmino;
        fromAmino: (object: import("./interchainqueries/tx").MsgRegisterInterchainQueryAmino) => import("./interchainqueries/tx").MsgRegisterInterchainQuery;
    };
    "/neutron.interchainqueries.MsgSubmitQueryResult": {
        aminoType: string;
        toAmino: (message: import("./interchainqueries/tx").MsgSubmitQueryResult) => import("./interchainqueries/tx").MsgSubmitQueryResultAmino;
        fromAmino: (object: import("./interchainqueries/tx").MsgSubmitQueryResultAmino) => import("./interchainqueries/tx").MsgSubmitQueryResult;
    };
    "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
        aminoType: string;
        toAmino: (message: import("./interchainqueries/tx").MsgRemoveInterchainQueryRequest) => import("./interchainqueries/tx").MsgRemoveInterchainQueryRequestAmino;
        fromAmino: (object: import("./interchainqueries/tx").MsgRemoveInterchainQueryRequestAmino) => import("./interchainqueries/tx").MsgRemoveInterchainQueryRequest;
    };
    "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
        aminoType: string;
        toAmino: (message: import("./interchainqueries/tx").MsgUpdateInterchainQueryRequest) => import("./interchainqueries/tx").MsgUpdateInterchainQueryRequestAmino;
        fromAmino: (object: import("./interchainqueries/tx").MsgUpdateInterchainQueryRequestAmino) => import("./interchainqueries/tx").MsgUpdateInterchainQueryRequest;
    };
    "/neutron.interchainqueries.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./interchainqueries/tx").MsgUpdateParams) => import("./interchainqueries/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./interchainqueries/tx").MsgUpdateParamsAmino) => import("./interchainqueries/tx").MsgUpdateParams;
    };
    "/neutron.feerefunder.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./feerefunder/tx").MsgUpdateParams) => import("./feerefunder/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./feerefunder/tx").MsgUpdateParamsAmino) => import("./feerefunder/tx").MsgUpdateParams;
    };
    "/neutron.feeburner.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./feeburner/tx").MsgUpdateParams) => import("./feeburner/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./feeburner/tx").MsgUpdateParamsAmino) => import("./feeburner/tx").MsgUpdateParams;
    };
    "/neutron.dex.MsgDeposit": {
        aminoType: string;
        toAmino: (message: import("./dex/tx").MsgDeposit) => import("./dex/tx").MsgDepositAmino;
        fromAmino: (object: import("./dex/tx").MsgDepositAmino) => import("./dex/tx").MsgDeposit;
    };
    "/neutron.dex.MsgWithdrawal": {
        aminoType: string;
        toAmino: (message: import("./dex/tx").MsgWithdrawal) => import("./dex/tx").MsgWithdrawalAmino;
        fromAmino: (object: import("./dex/tx").MsgWithdrawalAmino) => import("./dex/tx").MsgWithdrawal;
    };
    "/neutron.dex.MsgPlaceLimitOrder": {
        aminoType: string;
        toAmino: (message: import("./dex/tx").MsgPlaceLimitOrder) => import("./dex/tx").MsgPlaceLimitOrderAmino;
        fromAmino: (object: import("./dex/tx").MsgPlaceLimitOrderAmino) => import("./dex/tx").MsgPlaceLimitOrder;
    };
    "/neutron.dex.MsgWithdrawFilledLimitOrder": {
        aminoType: string;
        toAmino: (message: import("./dex/tx").MsgWithdrawFilledLimitOrder) => import("./dex/tx").MsgWithdrawFilledLimitOrderAmino;
        fromAmino: (object: import("./dex/tx").MsgWithdrawFilledLimitOrderAmino) => import("./dex/tx").MsgWithdrawFilledLimitOrder;
    };
    "/neutron.dex.MsgCancelLimitOrder": {
        aminoType: string;
        toAmino: (message: import("./dex/tx").MsgCancelLimitOrder) => import("./dex/tx").MsgCancelLimitOrderAmino;
        fromAmino: (object: import("./dex/tx").MsgCancelLimitOrderAmino) => import("./dex/tx").MsgCancelLimitOrder;
    };
    "/neutron.dex.MsgMultiHopSwap": {
        aminoType: string;
        toAmino: (message: import("./dex/tx").MsgMultiHopSwap) => import("./dex/tx").MsgMultiHopSwapAmino;
        fromAmino: (object: import("./dex/tx").MsgMultiHopSwapAmino) => import("./dex/tx").MsgMultiHopSwap;
    };
    "/neutron.dex.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./dex/tx").MsgUpdateParams) => import("./dex/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./dex/tx").MsgUpdateParamsAmino) => import("./dex/tx").MsgUpdateParams;
    };
    "/neutron.cron.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./cron/tx").MsgUpdateParams) => import("./cron/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./cron/tx").MsgUpdateParamsAmino) => import("./cron/tx").MsgUpdateParams;
    };
    "/neutron.contractmanager.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./contractmanager/tx").MsgUpdateParams) => import("./contractmanager/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./contractmanager/tx").MsgUpdateParamsAmino) => import("./contractmanager/tx").MsgUpdateParams;
    };
};
export declare const neutronProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningNeutronClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningNeutronClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
