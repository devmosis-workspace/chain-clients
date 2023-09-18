import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
export declare const AminoConverter: {
    "/injective.tokenfactory.v1beta1.MsgCreateDenom": {
        aminoType: string;
        toAmino: (message: MsgCreateDenom) => import("./tx").MsgCreateDenomAmino;
        fromAmino: (object: import("./tx").MsgCreateDenomAmino) => MsgCreateDenom;
    };
    "/injective.tokenfactory.v1beta1.MsgMint": {
        aminoType: string;
        toAmino: (message: MsgMint) => import("./tx").MsgMintAmino;
        fromAmino: (object: import("./tx").MsgMintAmino) => MsgMint;
    };
    "/injective.tokenfactory.v1beta1.MsgBurn": {
        aminoType: string;
        toAmino: (message: MsgBurn) => import("./tx").MsgBurnAmino;
        fromAmino: (object: import("./tx").MsgBurnAmino) => MsgBurn;
    };
    "/injective.tokenfactory.v1beta1.MsgChangeAdmin": {
        aminoType: string;
        toAmino: (message: MsgChangeAdmin) => import("./tx").MsgChangeAdminAmino;
        fromAmino: (object: import("./tx").MsgChangeAdminAmino) => MsgChangeAdmin;
    };
    "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata": {
        aminoType: string;
        toAmino: (message: MsgSetDenomMetadata) => import("./tx").MsgSetDenomMetadataAmino;
        fromAmino: (object: import("./tx").MsgSetDenomMetadataAmino) => MsgSetDenomMetadata;
    };
    "/injective.tokenfactory.v1beta1.MsgUpdateParams": {
        aminoType: string;
        toAmino: (message: MsgUpdateParams) => import("./tx").MsgUpdateParamsAmino;
        fromAmino: (object: import("./tx").MsgUpdateParamsAmino) => MsgUpdateParams;
    };
};
