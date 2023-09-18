import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const junoAminoConverters: {
    "/juno.feeshare.v1.MsgRegisterFeeShare": {
        aminoType: string;
        toAmino: (message: import("./feeshare/v1/tx").MsgRegisterFeeShare) => import("./feeshare/v1/tx").MsgRegisterFeeShareAmino;
        fromAmino: (object: import("./feeshare/v1/tx").MsgRegisterFeeShareAmino) => import("./feeshare/v1/tx").MsgRegisterFeeShare;
    };
    "/juno.feeshare.v1.MsgUpdateFeeShare": {
        aminoType: string;
        toAmino: (message: import("./feeshare/v1/tx").MsgUpdateFeeShare) => import("./feeshare/v1/tx").MsgUpdateFeeShareAmino;
        fromAmino: (object: import("./feeshare/v1/tx").MsgUpdateFeeShareAmino) => import("./feeshare/v1/tx").MsgUpdateFeeShare;
    };
    "/juno.feeshare.v1.MsgCancelFeeShare": {
        aminoType: string;
        toAmino: (message: import("./feeshare/v1/tx").MsgCancelFeeShare) => import("./feeshare/v1/tx").MsgCancelFeeShareAmino;
        fromAmino: (object: import("./feeshare/v1/tx").MsgCancelFeeShareAmino) => import("./feeshare/v1/tx").MsgCancelFeeShare;
    };
};
export declare const junoProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningJunoClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningJunoClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
