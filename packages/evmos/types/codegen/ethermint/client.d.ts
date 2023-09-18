import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const ethermintAminoConverters: {
    "/ethermint.feemarket.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./feemarket/v1/tx").MsgUpdateParams) => import("./feemarket/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./feemarket/v1/tx").MsgUpdateParamsAmino) => import("./feemarket/v1/tx").MsgUpdateParams;
    };
    "/ethermint.evm.v1.MsgEthereumTx": {
        aminoType: string;
        toAmino: (message: import("./evm/v1/tx").MsgEthereumTx) => import("./evm/v1/tx").MsgEthereumTxAmino;
        fromAmino: (object: import("./evm/v1/tx").MsgEthereumTxAmino) => import("./evm/v1/tx").MsgEthereumTx;
    };
    "/ethermint.evm.v1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: import("./evm/v1/tx").MsgUpdateParams) => import("./evm/v1/tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./evm/v1/tx").MsgUpdateParamsAmino) => import("./evm/v1/tx").MsgUpdateParams;
    };
};
export declare const ethermintProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningEthermintClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningEthermintClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
