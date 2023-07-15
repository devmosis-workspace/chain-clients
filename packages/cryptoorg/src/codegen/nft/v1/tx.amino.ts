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
export const AminoConverter = {
  "/chainmain.nft.v1.MsgIssueDenom": {
    aminoType: "/chainmain.nft.v1.MsgIssueDenom",
    toAmino: ({
      id,
      name,
      schema,
      sender,
      uri
    }: MsgIssueDenom): MsgIssueDenomAminoType["value"] => {
      return {
        id,
        name,
        schema,
        sender,
        uri
      };
    },
    fromAmino: ({
      id,
      name,
      schema,
      sender,
      uri
    }: MsgIssueDenomAminoType["value"]): MsgIssueDenom => {
      return {
        id,
        name,
        schema,
        sender,
        uri
      };
    }
  },
  "/chainmain.nft.v1.MsgMintNFT": {
    aminoType: "/chainmain.nft.v1.MsgMintNFT",
    toAmino: ({
      id,
      denomId,
      name,
      uri,
      data,
      sender,
      recipient
    }: MsgMintNFT): MsgMintNFTAminoType["value"] => {
      return {
        id,
        denom_id: denomId,
        name,
        uri,
        data,
        sender,
        recipient
      };
    },
    fromAmino: ({
      id,
      denom_id,
      name,
      uri,
      data,
      sender,
      recipient
    }: MsgMintNFTAminoType["value"]): MsgMintNFT => {
      return {
        id,
        denomId: denom_id,
        name,
        uri,
        data,
        sender,
        recipient
      };
    }
  },
  "/chainmain.nft.v1.MsgEditNFT": {
    aminoType: "/chainmain.nft.v1.MsgEditNFT",
    toAmino: ({
      id,
      denomId,
      name,
      uri,
      data,
      sender
    }: MsgEditNFT): MsgEditNFTAminoType["value"] => {
      return {
        id,
        denom_id: denomId,
        name,
        uri,
        data,
        sender
      };
    },
    fromAmino: ({
      id,
      denom_id,
      name,
      uri,
      data,
      sender
    }: MsgEditNFTAminoType["value"]): MsgEditNFT => {
      return {
        id,
        denomId: denom_id,
        name,
        uri,
        data,
        sender
      };
    }
  },
  "/chainmain.nft.v1.MsgTransferNFT": {
    aminoType: "/chainmain.nft.v1.MsgTransferNFT",
    toAmino: ({
      id,
      denomId,
      sender,
      recipient
    }: MsgTransferNFT): MsgTransferNFTAminoType["value"] => {
      return {
        id,
        denom_id: denomId,
        sender,
        recipient
      };
    },
    fromAmino: ({
      id,
      denom_id,
      sender,
      recipient
    }: MsgTransferNFTAminoType["value"]): MsgTransferNFT => {
      return {
        id,
        denomId: denom_id,
        sender,
        recipient
      };
    }
  },
  "/chainmain.nft.v1.MsgBurnNFT": {
    aminoType: "/chainmain.nft.v1.MsgBurnNFT",
    toAmino: ({
      id,
      denomId,
      sender
    }: MsgBurnNFT): MsgBurnNFTAminoType["value"] => {
      return {
        id,
        denom_id: denomId,
        sender
      };
    },
    fromAmino: ({
      id,
      denom_id,
      sender
    }: MsgBurnNFTAminoType["value"]): MsgBurnNFT => {
      return {
        id,
        denomId: denom_id,
        sender
      };
    }
  }
};