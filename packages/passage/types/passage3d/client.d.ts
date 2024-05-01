import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const passage3dAminoConverters: {
    "/passage3d.claim.v1beta1.MsgClaim": {
        aminoType: string;
        toAmino: (message: import("./claim/v1beta1/tx").MsgClaim) => import("./claim/v1beta1/tx").MsgClaimAmino;
        fromAmino: (object: import("./claim/v1beta1/tx").MsgClaimAmino) => import("./claim/v1beta1/tx").MsgClaim;
    };
};
export declare const passage3dProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningPassage3dClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningPassage3dClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
