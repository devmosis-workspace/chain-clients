import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
export declare const chainmainAminoConverters: {
    "/chainmain.nft.v1.MsgIssueDenom": {
        aminoType: string;
        toAmino: (message: import("../nft/v1/tx").MsgIssueDenom) => import("../nft/v1/tx").MsgIssueDenomAmino;
        fromAmino: (object: import("../nft/v1/tx").MsgIssueDenomAmino) => import("../nft/v1/tx").MsgIssueDenom;
    };
    "/chainmain.nft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: (message: import("../nft/v1/tx").MsgMintNFT) => import("../nft/v1/tx").MsgMintNFTAmino;
        fromAmino: (object: import("../nft/v1/tx").MsgMintNFTAmino) => import("../nft/v1/tx").MsgMintNFT;
    };
    "/chainmain.nft.v1.MsgEditNFT": {
        aminoType: string;
        toAmino: (message: import("../nft/v1/tx").MsgEditNFT) => import("../nft/v1/tx").MsgEditNFTAmino;
        fromAmino: (object: import("../nft/v1/tx").MsgEditNFTAmino) => import("../nft/v1/tx").MsgEditNFT;
    };
    "/chainmain.nft.v1.MsgTransferNFT": {
        aminoType: string;
        toAmino: (message: import("../nft/v1/tx").MsgTransferNFT) => import("../nft/v1/tx").MsgTransferNFTAmino;
        fromAmino: (object: import("../nft/v1/tx").MsgTransferNFTAmino) => import("../nft/v1/tx").MsgTransferNFT;
    };
    "/chainmain.nft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: (message: import("../nft/v1/tx").MsgBurnNFT) => import("../nft/v1/tx").MsgBurnNFTAmino;
        fromAmino: (object: import("../nft/v1/tx").MsgBurnNFTAmino) => import("../nft/v1/tx").MsgBurnNFT;
    };
    "/chainmain.nft_transfer.v1.MsgTransfer": {
        aminoType: string;
        toAmino: (message: import("../nft_transfer/v1/tx").MsgTransfer) => import("../nft_transfer/v1/tx").MsgTransferAmino;
        fromAmino: (object: import("../nft_transfer/v1/tx").MsgTransferAmino) => import("../nft_transfer/v1/tx").MsgTransfer;
    };
    "/chainmain.icaauth.v1.MsgRegisterAccount": {
        aminoType: string;
        toAmino: (message: import("../icaauth/v1/tx").MsgRegisterAccount) => import("../icaauth/v1/tx").MsgRegisterAccountAmino;
        fromAmino: (object: import("../icaauth/v1/tx").MsgRegisterAccountAmino) => import("../icaauth/v1/tx").MsgRegisterAccount;
    };
    "/chainmain.icaauth.v1.MsgSubmitTx": {
        aminoType: string;
        toAmino: (message: import("../icaauth/v1/tx").MsgSubmitTx) => import("../icaauth/v1/tx").MsgSubmitTxAmino;
        fromAmino: (object: import("../icaauth/v1/tx").MsgSubmitTxAmino) => import("../icaauth/v1/tx").MsgSubmitTx;
    };
};
export declare const chainmainProtoRegistry: ReadonlyArray<[string, GeneratedType]>;
export declare const getSigningChainmainClientOptions: ({ defaultTypes }?: {
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
    registry: Registry;
    aminoTypes: AminoTypes;
};
export declare const getSigningChainmainClient: ({ rpcEndpoint, signer, defaultTypes }: {
    rpcEndpoint: string | HttpEndpoint;
    signer: OfflineSigner;
    defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => Promise<SigningStargateClient>;
