import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const quasarlabsAminoConverters: {
    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/v1beta1/tx").MsgCreateDenom) => import("../tokenfactory/v1beta1/tx").MsgCreateDenomAmino;
        fromAmino: (object: import("../tokenfactory/v1beta1/tx").MsgCreateDenomAmino) => import("../tokenfactory/v1beta1/tx").MsgCreateDenom;
    };
    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/v1beta1/tx").MsgMint) => import("../tokenfactory/v1beta1/tx").MsgMintAmino;
        fromAmino: (object: import("../tokenfactory/v1beta1/tx").MsgMintAmino) => import("../tokenfactory/v1beta1/tx").MsgMint;
    };
    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/v1beta1/tx").MsgBurn) => import("../tokenfactory/v1beta1/tx").MsgBurnAmino;
        fromAmino: (object: import("../tokenfactory/v1beta1/tx").MsgBurnAmino) => import("../tokenfactory/v1beta1/tx").MsgBurn;
    };
    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/v1beta1/tx").MsgChangeAdmin) => import("../tokenfactory/v1beta1/tx").MsgChangeAdminAmino;
        fromAmino: (object: import("../tokenfactory/v1beta1/tx").MsgChangeAdminAmino) => import("../tokenfactory/v1beta1/tx").MsgChangeAdmin;
    };
    "/quasarlabs.quasarnode.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: (message: import("../tokenfactory/v1beta1/tx").MsgSetDenomMetadata) => import("../tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino;
        fromAmino: (object: import("../tokenfactory/v1beta1/tx").MsgSetDenomMetadataAmino) => import("../tokenfactory/v1beta1/tx").MsgSetDenomMetadata;
    };
    "/quasarlabs.quasarnode.qvesting.MsgCreateVestingAccount": {
        aminoType: string;
        toAmino: (message: import("../qvesting/tx").MsgCreateVestingAccount) => import("../qvesting/tx").MsgCreateVestingAccountAmino;
        fromAmino: (object: import("../qvesting/tx").MsgCreateVestingAccountAmino) => import("../qvesting/tx").MsgCreateVestingAccount;
    };
};
export declare const quasarlabsProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningQuasarlabsClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningQuasarlabsClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
