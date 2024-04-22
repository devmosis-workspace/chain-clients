import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const corkAminoConverters: {
    "/cork.v2.MsgScheduleCorkRequest": {
        aminoType: string;
        toAmino: (message: import("./v2/tx").MsgScheduleCorkRequest) => import("./v2/tx").MsgScheduleCorkRequestAmino;
        fromAmino: (object: import("./v2/tx").MsgScheduleCorkRequestAmino) => import("./v2/tx").MsgScheduleCorkRequest;
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
