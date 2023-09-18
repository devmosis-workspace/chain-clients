import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const neutronAminoConverters: {
    "/neutron.transfer.MsgTransfer": {
        aminoType: string;
        toAmino: (message: import("../transfer/v1/tx").MsgTransfer) => import("../transfer/v1/tx").MsgTransferAmino;
        fromAmino: (object: import("../transfer/v1/tx").MsgTransferAmino) => import("../transfer/v1/tx").MsgTransfer;
    };
    "/neutron.interchaintxs.v1.MsgRegisterInterchainAccount": {
        aminoType: string;
        toAmino: (message: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount) => import("../interchaintxs/v1/tx").MsgRegisterInterchainAccountAmino;
        fromAmino: (object: import("../interchaintxs/v1/tx").MsgRegisterInterchainAccountAmino) => import("../interchaintxs/v1/tx").MsgRegisterInterchainAccount;
    };
    "/neutron.interchaintxs.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: (message: import("../interchaintxs/v1/tx").MsgSubmitTx) => import("../interchaintxs/v1/tx").MsgSubmitTxAmino;
        fromAmino: (object: import("../interchaintxs/v1/tx").MsgSubmitTxAmino) => import("../interchaintxs/v1/tx").MsgSubmitTx;
    };
    "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
        aminoType: string;
        toAmino: (message: import("../interchainqueries/tx").MsgRegisterInterchainQuery) => import("../interchainqueries/tx").MsgRegisterInterchainQueryAmino;
        fromAmino: (object: import("../interchainqueries/tx").MsgRegisterInterchainQueryAmino) => import("../interchainqueries/tx").MsgRegisterInterchainQuery;
    };
    "/neutron.interchainqueries.MsgSubmitQueryResult": {
        aminoType: string;
        toAmino: (message: import("../interchainqueries/tx").MsgSubmitQueryResult) => import("../interchainqueries/tx").MsgSubmitQueryResultAmino;
        fromAmino: (object: import("../interchainqueries/tx").MsgSubmitQueryResultAmino) => import("../interchainqueries/tx").MsgSubmitQueryResult;
    };
    "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
        aminoType: string;
        toAmino: (message: import("../interchainqueries/tx").MsgRemoveInterchainQueryRequest) => import("../interchainqueries/tx").MsgRemoveInterchainQueryRequestAmino;
        fromAmino: (object: import("../interchainqueries/tx").MsgRemoveInterchainQueryRequestAmino) => import("../interchainqueries/tx").MsgRemoveInterchainQueryRequest;
    };
    "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
        aminoType: string;
        toAmino: (message: import("../interchainqueries/tx").MsgUpdateInterchainQueryRequest) => import("../interchainqueries/tx").MsgUpdateInterchainQueryRequestAmino;
        fromAmino: (object: import("../interchainqueries/tx").MsgUpdateInterchainQueryRequestAmino) => import("../interchainqueries/tx").MsgUpdateInterchainQueryRequest;
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
