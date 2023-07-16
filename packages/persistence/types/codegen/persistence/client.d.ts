import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const persistenceAminoConverters: {
    "/persistence.interchainquery.v1beta1.MsgSubmitQueryResponse": {
        aminoType: string;
        toAmino: ({ chainId, queryId, result, proofOps, height, fromAddress }: import("./interchainquery/v1beta1/messages").MsgSubmitQueryResponse) => {
            chain_id: string;
            query_id: string;
            result: Uint8Array;
            proof_ops: {
                ops: {
                    type: string;
                    key: Uint8Array;
                    data: Uint8Array;
                }[];
            };
            height: string;
            from_address: string;
        };
        fromAmino: ({ chain_id, query_id, result, proof_ops, height, from_address }: {
            chain_id: string;
            query_id: string;
            result: Uint8Array;
            proof_ops: {
                ops: {
                    type: string;
                    key: Uint8Array;
                    data: Uint8Array;
                }[];
            };
            height: string;
            from_address: string;
        }) => import("./interchainquery/v1beta1/messages").MsgSubmitQueryResponse;
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
