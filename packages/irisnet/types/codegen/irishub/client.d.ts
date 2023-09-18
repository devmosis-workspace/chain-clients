import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const irishubAminoConverters: {
    "/irishub.guardian.MsgAddSuper": {
        aminoType: string;
        toAmino: (message: import("../guardian/tx").MsgAddSuper) => import("../guardian/tx").MsgAddSuperAmino;
        fromAmino: (object: import("../guardian/tx").MsgAddSuperAmino) => import("../guardian/tx").MsgAddSuper;
    };
    "/irishub.guardian.MsgDeleteSuper": {
        aminoType: string;
        toAmino: (message: import("../guardian/tx").MsgDeleteSuper) => import("../guardian/tx").MsgDeleteSuperAmino;
        fromAmino: (object: import("../guardian/tx").MsgDeleteSuperAmino) => import("../guardian/tx").MsgDeleteSuper;
    };
};
export declare const irishubProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningIrishubClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningIrishubClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
