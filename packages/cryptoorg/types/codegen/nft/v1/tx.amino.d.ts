import { AminoMsg } from "@cosmjs/amino";
import { MsgIssueDenom, MsgMintNFT, MsgEditNFT, MsgTransferNFT, MsgBurnNFT } from "./tx";
export interface MsgIssueDenomAminoType extends AminoMsg {
    type: "/chainmain.nft.v1.MsgIssueDenom";
    value: {
        id: string;
        name: string;
        schema: string;
        sender: string;
        uri: string;
    };
}
export interface MsgMintNFTAminoType extends AminoMsg {
    type: "/chainmain.nft.v1.MsgMintNFT";
    value: {
        id: string;
        denom_id: string;
        name: string;
        uri: string;
        data: string;
        sender: string;
        recipient: string;
    };
}
export interface MsgEditNFTAminoType extends AminoMsg {
    type: "/chainmain.nft.v1.MsgEditNFT";
    value: {
        id: string;
        denom_id: string;
        name: string;
        uri: string;
        data: string;
        sender: string;
    };
}
export interface MsgTransferNFTAminoType extends AminoMsg {
    type: "/chainmain.nft.v1.MsgTransferNFT";
    value: {
        id: string;
        denom_id: string;
        sender: string;
        recipient: string;
    };
}
export interface MsgBurnNFTAminoType extends AminoMsg {
    type: "/chainmain.nft.v1.MsgBurnNFT";
    value: {
        id: string;
        denom_id: string;
        sender: string;
    };
}
export declare const AminoConverter: {
    "/chainmain.nft.v1.MsgIssueDenom": {
        aminoType: string;
        toAmino: ({ id, name, schema, sender, uri }: MsgIssueDenom) => MsgIssueDenomAminoType["value"];
        fromAmino: ({ id, name, schema, sender, uri }: MsgIssueDenomAminoType["value"]) => MsgIssueDenom;
    };
    "/chainmain.nft.v1.MsgMintNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender, recipient }: MsgMintNFT) => MsgMintNFTAminoType["value"];
        fromAmino: ({ id, denom_id, name, uri, data, sender, recipient }: MsgMintNFTAminoType["value"]) => MsgMintNFT;
    };
    "/chainmain.nft.v1.MsgEditNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, name, uri, data, sender }: MsgEditNFT) => MsgEditNFTAminoType["value"];
        fromAmino: ({ id, denom_id, name, uri, data, sender }: MsgEditNFTAminoType["value"]) => MsgEditNFT;
    };
    "/chainmain.nft.v1.MsgTransferNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, sender, recipient }: MsgTransferNFT) => MsgTransferNFTAminoType["value"];
        fromAmino: ({ id, denom_id, sender, recipient }: MsgTransferNFTAminoType["value"]) => MsgTransferNFT;
    };
    "/chainmain.nft.v1.MsgBurnNFT": {
        aminoType: string;
        toAmino: ({ id, denomId, sender }: MsgBurnNFT) => MsgBurnNFTAminoType["value"];
        fromAmino: ({ id, denom_id, sender }: MsgBurnNFTAminoType["value"]) => MsgBurnNFT;
    };
};
