import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const corkAminoConverters: {
    "/cork.v1.MsgSubmitCorkRequest": {
        aminoType: string;
        toAmino: ({ cork, signer }: import("./v1/tx").MsgSubmitCorkRequest) => {
            cork: {
                encoded_contract_call: Uint8Array;
                target_contract_address: string;
            };
            signer: string;
        };
        fromAmino: ({ cork, signer }: {
            cork: {
                encoded_contract_call: Uint8Array;
                target_contract_address: string;
            };
            signer: string;
        }) => import("./v1/tx").MsgSubmitCorkRequest;
    };
    "/cork.v1.MsgScheduleCorkRequest": {
        aminoType: string;
        toAmino: ({ cork, blockHeight, signer }: import("./v1/tx").MsgScheduleCorkRequest) => {
            cork: {
                encoded_contract_call: Uint8Array;
                target_contract_address: string;
            };
            block_height: string;
            signer: string;
        };
        fromAmino: ({ cork, block_height, signer }: {
            cork: {
                encoded_contract_call: Uint8Array;
                target_contract_address: string;
            };
            block_height: string;
            signer: string;
        }) => import("./v1/tx").MsgScheduleCorkRequest;
    };
};
export declare const corkProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCorkClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCorkClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
