import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const chihuahuaAminoConverters: {
    "/chihuahua.feeburn.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./feeburn/tx").MsgUpdateParams) => import("./feeburn/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./feeburn/tx").MsgUpdateParamsAmino) => import("./feeburn/tx").MsgUpdateParams;
    };
};
export declare const chihuahuaProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningChihuahuaClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningChihuahuaClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
