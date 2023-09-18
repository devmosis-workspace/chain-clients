import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const persistenceAminoConverters: {
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
