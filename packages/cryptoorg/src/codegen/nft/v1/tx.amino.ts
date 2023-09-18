import { MsgIssueDenom, MsgMintNFT, MsgEditNFT, MsgTransferNFT, MsgBurnNFT } from "./tx";
export const AminoConverter = {
  "/chainmain.nft.v1.MsgIssueDenom": {
    aminoType: "/chainmain.nft.v1.MsgIssueDenom",
    toAmino: MsgIssueDenom.toAmino,
    fromAmino: MsgIssueDenom.fromAmino
  },
  "/chainmain.nft.v1.MsgMintNFT": {
    aminoType: "/chainmain.nft.v1.MsgMintNFT",
    toAmino: MsgMintNFT.toAmino,
    fromAmino: MsgMintNFT.fromAmino
  },
  "/chainmain.nft.v1.MsgEditNFT": {
    aminoType: "/chainmain.nft.v1.MsgEditNFT",
    toAmino: MsgEditNFT.toAmino,
    fromAmino: MsgEditNFT.fromAmino
  },
  "/chainmain.nft.v1.MsgTransferNFT": {
    aminoType: "/chainmain.nft.v1.MsgTransferNFT",
    toAmino: MsgTransferNFT.toAmino,
    fromAmino: MsgTransferNFT.fromAmino
  },
  "/chainmain.nft.v1.MsgBurnNFT": {
    aminoType: "/chainmain.nft.v1.MsgBurnNFT",
    toAmino: MsgBurnNFT.toAmino,
    fromAmino: MsgBurnNFT.fromAmino
  }
};