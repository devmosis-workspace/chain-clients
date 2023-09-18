import { MsgIssueDenom, MsgMintNFT, MsgEditNFT, MsgTransferNFT, MsgBurnNFT } from "./tx";
export declare const AminoConverter: {
    "/chainmain.nft.v1.MsgIssueDenom": {
        aminoType: string;
        toAmino: (message: MsgIssueDenom) => import("./tx").MsgIssueDenomAmino;
        fromAmino: (object: import("./tx").MsgIssueDenomAmino) => MsgIssueDenom;
    };
    "/chainmain.nft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: (message: MsgMintNFT) => import("./tx").MsgMintNFTAmino;
        fromAmino: (object: import("./tx").MsgMintNFTAmino) => MsgMintNFT;
    };
    "/chainmain.nft.v1.MsgEditNFT": {
        aminoType: string;
        toAmino: (message: MsgEditNFT) => import("./tx").MsgEditNFTAmino;
        fromAmino: (object: import("./tx").MsgEditNFTAmino) => MsgEditNFT;
    };
    "/chainmain.nft.v1.MsgTransferNFT": {
        aminoType: string;
        toAmino: (message: MsgTransferNFT) => import("./tx").MsgTransferNFTAmino;
        fromAmino: (object: import("./tx").MsgTransferNFTAmino) => MsgTransferNFT;
    };
    "/chainmain.nft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: (message: MsgBurnNFT) => import("./tx").MsgBurnNFTAmino;
        fromAmino: (object: import("./tx").MsgBurnNFTAmino) => MsgBurnNFT;
    };
};
