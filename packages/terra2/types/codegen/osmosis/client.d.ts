import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const osmosisAminoConverters: {
    "/osmosis.tokenfactory.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgUpdateParams) => import("./tokenfactory/v1beta1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgUpdateParamsAmino) => import("./tokenfactory/v1beta1/tx").MsgUpdateParams;
    };
    "/osmosis.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgCreateDenom) => import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgCreateDenomAmino) => import("./tokenfactory/v1beta1/tx").MsgCreateDenom;
    };
    "/osmosis.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgMint) => import("./tokenfactory/v1beta1/tx").MsgMintAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgMintAmino) => import("./tokenfactory/v1beta1/tx").MsgMint;
    };
    "/osmosis.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgBurn) => import("./tokenfactory/v1beta1/tx").MsgBurnAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgBurnAmino) => import("./tokenfactory/v1beta1/tx").MsgBurn;
    };
    "/osmosis.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgChangeAdmin) => import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgChangeAdminAmino) => import("./tokenfactory/v1beta1/tx").MsgChangeAdmin;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino) => import("./tokenfactory/v1beta1/tx").MsgSetDenomMetadata;
    };
    "/osmosis.tokenfactory.v1beta1.MsgSetBeforeSendHook": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgSetBeforeSendHook) => import("./tokenfactory/v1beta1/tx").MsgSetBeforeSendHookAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgSetBeforeSendHookAmino) => import("./tokenfactory/v1beta1/tx").MsgSetBeforeSendHook;
    };
    "/osmosis.tokenfactory.v1beta1.MsgForceTransfer": {
        aminoType: string;
        toAmino: (message: import("./tokenfactory/v1beta1/tx").MsgForceTransfer) => import("./tokenfactory/v1beta1/tx").MsgForceTransferAmino;
        fromAmino: (object: import("./tokenfactory/v1beta1/tx").MsgForceTransferAmino) => import("./tokenfactory/v1beta1/tx").MsgForceTransfer;
    };
};
export declare const osmosisProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningOsmosisClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningOsmosisClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<any>;
