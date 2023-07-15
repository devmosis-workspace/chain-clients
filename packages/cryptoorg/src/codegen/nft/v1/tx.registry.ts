import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgIssueDenom, MsgMintNFT, MsgEditNFT, MsgTransferNFT, MsgBurnNFT } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/chainmain.nft.v1.MsgIssueDenom", MsgIssueDenom], ["/chainmain.nft.v1.MsgMintNFT", MsgMintNFT], ["/chainmain.nft.v1.MsgEditNFT", MsgEditNFT], ["/chainmain.nft.v1.MsgTransferNFT", MsgTransferNFT], ["/chainmain.nft.v1.MsgBurnNFT", MsgBurnNFT]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    issueDenom(value: MsgIssueDenom) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgIssueDenom",
        value: MsgIssueDenom.encode(value).finish()
      };
    },
    mintNFT(value: MsgMintNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgMintNFT",
        value: MsgMintNFT.encode(value).finish()
      };
    },
    editNFT(value: MsgEditNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgEditNFT",
        value: MsgEditNFT.encode(value).finish()
      };
    },
    transferNFT(value: MsgTransferNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgTransferNFT",
        value: MsgTransferNFT.encode(value).finish()
      };
    },
    burnNFT(value: MsgBurnNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgBurnNFT",
        value: MsgBurnNFT.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    issueDenom(value: MsgIssueDenom) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgIssueDenom",
        value
      };
    },
    mintNFT(value: MsgMintNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgMintNFT",
        value
      };
    },
    editNFT(value: MsgEditNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgEditNFT",
        value
      };
    },
    transferNFT(value: MsgTransferNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgTransferNFT",
        value
      };
    },
    burnNFT(value: MsgBurnNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgBurnNFT",
        value
      };
    }
  },
  fromJSON: {
    issueDenom(value: any) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgIssueDenom",
        value: MsgIssueDenom.fromJSON(value)
      };
    },
    mintNFT(value: any) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgMintNFT",
        value: MsgMintNFT.fromJSON(value)
      };
    },
    editNFT(value: any) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgEditNFT",
        value: MsgEditNFT.fromJSON(value)
      };
    },
    transferNFT(value: any) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgTransferNFT",
        value: MsgTransferNFT.fromJSON(value)
      };
    },
    burnNFT(value: any) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgBurnNFT",
        value: MsgBurnNFT.fromJSON(value)
      };
    }
  },
  fromPartial: {
    issueDenom(value: MsgIssueDenom) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgIssueDenom",
        value: MsgIssueDenom.fromPartial(value)
      };
    },
    mintNFT(value: MsgMintNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgMintNFT",
        value: MsgMintNFT.fromPartial(value)
      };
    },
    editNFT(value: MsgEditNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgEditNFT",
        value: MsgEditNFT.fromPartial(value)
      };
    },
    transferNFT(value: MsgTransferNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgTransferNFT",
        value: MsgTransferNFT.fromPartial(value)
      };
    },
    burnNFT(value: MsgBurnNFT) {
      return {
        typeUrl: "/chainmain.nft.v1.MsgBurnNFT",
        value: MsgBurnNFT.fromPartial(value)
      };
    }
  }
};