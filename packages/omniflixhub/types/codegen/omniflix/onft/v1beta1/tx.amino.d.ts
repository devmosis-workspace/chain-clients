import { MsgCreateDenom, MsgUpdateDenom, MsgTransferDenom, MsgPurgeDenom, MsgMintONFT, MsgTransferONFT, MsgBurnONFT, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/OmniFlix.onft.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: MsgCreateDenom) => import("./tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./tx").MsgCreateDenomAmino) => MsgCreateDenom;
    };
    "/OmniFlix.onft.v1beta1.MsgUpdateDenom": {
        aminoType: string;
        toAmino: (message: MsgUpdateDenom) => import("./tx").MsgUpdateDenomAmino;
        fromAmino: (object: import("./tx").MsgUpdateDenomAmino) => MsgUpdateDenom;
    };
    "/OmniFlix.onft.v1beta1.MsgTransferDenom": {
        aminoType: string;
        toAmino: (message: MsgTransferDenom) => import("./tx").MsgTransferDenomAmino;
        fromAmino: (object: import("./tx").MsgTransferDenomAmino) => MsgTransferDenom;
    };
    "/OmniFlix.onft.v1beta1.MsgPurgeDenom": {
        aminoType: string;
        toAmino: (message: MsgPurgeDenom) => import("./tx").MsgPurgeDenomAmino;
        fromAmino: (object: import("./tx").MsgPurgeDenomAmino) => MsgPurgeDenom;
    };
    "/OmniFlix.onft.v1beta1.MsgMintONFT": {
        aminoType: string;
        toAmino: (message: MsgMintONFT) => import("./tx").MsgMintONFTAmino;
        fromAmino: (object: import("./tx").MsgMintONFTAmino) => MsgMintONFT;
    };
    "/OmniFlix.onft.v1beta1.MsgTransferONFT": {
        aminoType: string;
        toAmino: (message: MsgTransferONFT) => import("./tx").MsgTransferONFTAmino;
        fromAmino: (object: import("./tx").MsgTransferONFTAmino) => MsgTransferONFT;
    };
    "/OmniFlix.onft.v1beta1.MsgBurnONFT": {
        aminoType: string;
        toAmino: (message: MsgBurnONFT) => import("./tx").MsgBurnONFTAmino;
        fromAmino: (object: import("./tx").MsgBurnONFTAmino) => MsgBurnONFT;
    };
    "/OmniFlix.onft.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
