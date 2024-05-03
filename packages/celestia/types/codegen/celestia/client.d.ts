import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const celestiaAminoConverters: {
    "/celestia.qgb.v1.MsgRegisterEVMAddress": {
        aminoType: string;
        toAmino: (message: import("./qgb/v1/tx").MsgRegisterEVMAddress) => import("./qgb/v1/tx").MsgRegisterEVMAddressAmino;
        fromAmino: (object: import("./qgb/v1/tx").MsgRegisterEVMAddressAmino) => import("./qgb/v1/tx").MsgRegisterEVMAddress;
    };
    "/celestia.blob.v1.MsgPayForBlobs": {
        aminoType: string;
        toAmino: (message: import("./blob/v1/tx").MsgPayForBlobs) => import("./blob/v1/tx").MsgPayForBlobsAmino;
        fromAmino: (object: import("./blob/v1/tx").MsgPayForBlobsAmino) => import("./blob/v1/tx").MsgPayForBlobs;
    };
};
export declare const celestiaProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningCelestiaClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningCelestiaClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<any>;
