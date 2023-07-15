import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const axelarAminoConverters: {
    "/axelar.permission.v1beta1.RegisterControllerRequest": {
        aminoType: string;
        toAmino: ({ sender, controller }: import("./permission/v1beta1/tx").RegisterControllerRequest) => {
            sender: Uint8Array;
            controller: Uint8Array;
        };
        fromAmino: ({ sender, controller }: {
            sender: Uint8Array;
            controller: Uint8Array;
        }) => import("./permission/v1beta1/tx").RegisterControllerRequest;
    };
    "/axelar.permission.v1beta1.DeregisterControllerRequest": {
        aminoType: string;
        toAmino: ({ sender, controller }: import("./permission/v1beta1/tx").DeregisterControllerRequest) => {
            sender: Uint8Array;
            controller: Uint8Array;
        };
        fromAmino: ({ sender, controller }: {
            sender: Uint8Array;
            controller: Uint8Array;
        }) => import("./permission/v1beta1/tx").DeregisterControllerRequest;
    };
    "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
        aminoType: string;
        toAmino: ({ sender, governanceKey }: import("./permission/v1beta1/tx").UpdateGovernanceKeyRequest) => {
            sender: Uint8Array;
            governance_key: {
                threshold: number;
                public_keys: {
                    type_url: string;
                    value: Uint8Array;
                }[];
            };
        };
        fromAmino: ({ sender, governance_key }: {
            sender: Uint8Array;
            governance_key: {
                threshold: number;
                public_keys: {
                    type_url: string;
                    value: Uint8Array;
                }[];
            };
        }) => import("./permission/v1beta1/tx").UpdateGovernanceKeyRequest;
    };
};
export declare const axelarProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningAxelarClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningAxelarClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
