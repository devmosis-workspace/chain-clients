import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const axelarAminoConverters: {
    "/axelar.permission.v1beta1.RegisterControllerRequest": {
        aminoType: string;
        toAmino: (message: import("./permission/v1beta1/tx").RegisterControllerRequest) => import("./permission/v1beta1/tx").RegisterControllerRequestAmino;
        fromAmino: (object: import("./permission/v1beta1/tx").RegisterControllerRequestAmino) => import("./permission/v1beta1/tx").RegisterControllerRequest;
    };
    "/axelar.permission.v1beta1.DeregisterControllerRequest": {
        aminoType: string;
        toAmino: (message: import("./permission/v1beta1/tx").DeregisterControllerRequest) => import("./permission/v1beta1/tx").DeregisterControllerRequestAmino;
        fromAmino: (object: import("./permission/v1beta1/tx").DeregisterControllerRequestAmino) => import("./permission/v1beta1/tx").DeregisterControllerRequest;
    };
    "/axelar.permission.v1beta1.UpdateGovernanceKeyRequest": {
        aminoType: string;
        toAmino: (message: import("./permission/v1beta1/tx").UpdateGovernanceKeyRequest) => import("./permission/v1beta1/tx").UpdateGovernanceKeyRequestAmino;
        fromAmino: (object: import("./permission/v1beta1/tx").UpdateGovernanceKeyRequestAmino) => import("./permission/v1beta1/tx").UpdateGovernanceKeyRequest;
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
