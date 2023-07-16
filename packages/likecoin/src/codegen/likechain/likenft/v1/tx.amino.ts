import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { classParentTypeFromJSON } from "./class_data";
import { MsgNewClass, MsgUpdateClass, MsgMintNFT, MsgBurnNFT, MsgCreateBlindBoxContent, MsgUpdateBlindBoxContent, MsgDeleteBlindBoxContent, MsgCreateOffer, MsgUpdateOffer, MsgDeleteOffer, MsgCreateListing, MsgUpdateListing, MsgDeleteListing, MsgSellNFT, MsgBuyNFT, MsgCreateRoyaltyConfig, MsgUpdateRoyaltyConfig, MsgDeleteRoyaltyConfig } from "./tx";
export interface MsgNewClassAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgNewClass";
  value: {
    creator: string;
    parent: {
      type: number;
      iscn_id_prefix: string;
    };
    input: {
      name: string;
      symbol: string;
      description: string;
      uri: string;
      uri_hash: string;
      metadata: Uint8Array;
      config: {
        burnable: boolean;
        max_supply: string;
        blind_box_config: {
          mint_periods: {
            start_time: {
              seconds: string;
              nanos: number;
            };
            allowed_addresses: string[];
            mint_price: string;
          }[];
          reveal_time: {
            seconds: string;
            nanos: number;
          };
        };
      };
    };
  };
}
export interface MsgUpdateClassAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgUpdateClass";
  value: {
    creator: string;
    class_id: string;
    input: {
      name: string;
      symbol: string;
      description: string;
      uri: string;
      uri_hash: string;
      metadata: Uint8Array;
      config: {
        burnable: boolean;
        max_supply: string;
        blind_box_config: {
          mint_periods: {
            start_time: {
              seconds: string;
              nanos: number;
            };
            allowed_addresses: string[];
            mint_price: string;
          }[];
          reveal_time: {
            seconds: string;
            nanos: number;
          };
        };
      };
    };
  };
}
export interface MsgMintNFTAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgMintNFT";
  value: {
    creator: string;
    class_id: string;
    id: string;
    input: {
      uri: string;
      uri_hash: string;
      metadata: Uint8Array;
    };
  };
}
export interface MsgBurnNFTAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgBurnNFT";
  value: {
    creator: string;
    class_id: string;
    nft_id: string;
  };
}
export interface MsgCreateBlindBoxContentAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgCreateBlindBoxContent";
  value: {
    creator: string;
    class_id: string;
    id: string;
    input: {
      uri: string;
      uri_hash: string;
      metadata: Uint8Array;
    };
  };
}
export interface MsgUpdateBlindBoxContentAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgUpdateBlindBoxContent";
  value: {
    creator: string;
    class_id: string;
    id: string;
    input: {
      uri: string;
      uri_hash: string;
      metadata: Uint8Array;
    };
  };
}
export interface MsgDeleteBlindBoxContentAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgDeleteBlindBoxContent";
  value: {
    creator: string;
    class_id: string;
    id: string;
  };
}
export interface MsgCreateOfferAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgCreateOffer";
  value: {
    creator: string;
    class_id: string;
    nft_id: string;
    price: string;
    expiration: {
      seconds: string;
      nanos: number;
    };
  };
}
export interface MsgUpdateOfferAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgUpdateOffer";
  value: {
    creator: string;
    class_id: string;
    nft_id: string;
    price: string;
    expiration: {
      seconds: string;
      nanos: number;
    };
  };
}
export interface MsgDeleteOfferAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgDeleteOffer";
  value: {
    creator: string;
    class_id: string;
    nft_id: string;
  };
}
export interface MsgCreateListingAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgCreateListing";
  value: {
    creator: string;
    class_id: string;
    nft_id: string;
    price: string;
    expiration: {
      seconds: string;
      nanos: number;
    };
    full_pay_to_royalty: boolean;
  };
}
export interface MsgUpdateListingAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgUpdateListing";
  value: {
    creator: string;
    class_id: string;
    nft_id: string;
    price: string;
    expiration: {
      seconds: string;
      nanos: number;
    };
    full_pay_to_royalty: boolean;
  };
}
export interface MsgDeleteListingAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgDeleteListing";
  value: {
    creator: string;
    class_id: string;
    nft_id: string;
  };
}
export interface MsgSellNFTAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgSellNFT";
  value: {
    creator: string;
    class_id: string;
    nft_id: string;
    buyer: string;
    price: string;
    full_pay_to_royalty: boolean;
  };
}
export interface MsgBuyNFTAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgBuyNFT";
  value: {
    creator: string;
    class_id: string;
    nft_id: string;
    seller: string;
    price: string;
  };
}
export interface MsgCreateRoyaltyConfigAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgCreateRoyaltyConfig";
  value: {
    creator: string;
    class_id: string;
    royalty_config: {
      rate_basis_points: string;
      stakeholders: {
        account: string;
        weight: string;
      }[];
    };
  };
}
export interface MsgUpdateRoyaltyConfigAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig";
  value: {
    creator: string;
    class_id: string;
    royalty_config: {
      rate_basis_points: string;
      stakeholders: {
        account: string;
        weight: string;
      }[];
    };
  };
}
export interface MsgDeleteRoyaltyConfigAminoType extends AminoMsg {
  type: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig";
  value: {
    creator: string;
    class_id: string;
  };
}
export const AminoConverter = {
  "/likechain.likenft.v1.MsgNewClass": {
    aminoType: "/likechain.likenft.v1.MsgNewClass",
    toAmino: ({
      creator,
      parent,
      input
    }: MsgNewClass): MsgNewClassAminoType["value"] => {
      return {
        creator,
        parent: {
          type: parent.type,
          iscn_id_prefix: parent.iscnIdPrefix
        },
        input: {
          name: input.name,
          symbol: input.symbol,
          description: input.description,
          uri: input.uri,
          uri_hash: input.uriHash,
          metadata: input.metadata,
          config: {
            burnable: input.config.burnable,
            max_supply: input.config.maxSupply.toString(),
            blind_box_config: {
              mint_periods: input.config.blindBoxConfig.mintPeriods.map(el0 => ({
                start_time: el0.startTime,
                allowed_addresses: el0.allowedAddresses,
                mint_price: el0.mintPrice.toString()
              })),
              reveal_time: input.config.blindBoxConfig.revealTime
            }
          }
        }
      };
    },
    fromAmino: ({
      creator,
      parent,
      input
    }: MsgNewClassAminoType["value"]): MsgNewClass => {
      return {
        creator,
        parent: {
          type: classParentTypeFromJSON(parent.type),
          iscnIdPrefix: parent.iscn_id_prefix
        },
        input: {
          name: input.name,
          symbol: input.symbol,
          description: input.description,
          uri: input.uri,
          uriHash: input.uri_hash,
          metadata: input.metadata,
          config: {
            burnable: input.config.burnable,
            maxSupply: Long.fromString(input.config.max_supply),
            blindBoxConfig: {
              mintPeriods: input.config.blind_box_config.mint_periods.map(el3 => ({
                startTime: el3.start_time,
                allowedAddresses: el3.allowed_addresses,
                mintPrice: Long.fromString(el3.mint_price)
              })),
              revealTime: input.config.blind_box_config.reveal_time
            }
          }
        }
      };
    }
  },
  "/likechain.likenft.v1.MsgUpdateClass": {
    aminoType: "/likechain.likenft.v1.MsgUpdateClass",
    toAmino: ({
      creator,
      classId,
      input
    }: MsgUpdateClass): MsgUpdateClassAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        input: {
          name: input.name,
          symbol: input.symbol,
          description: input.description,
          uri: input.uri,
          uri_hash: input.uriHash,
          metadata: input.metadata,
          config: {
            burnable: input.config.burnable,
            max_supply: input.config.maxSupply.toString(),
            blind_box_config: {
              mint_periods: input.config.blindBoxConfig.mintPeriods.map(el0 => ({
                start_time: el0.startTime,
                allowed_addresses: el0.allowedAddresses,
                mint_price: el0.mintPrice.toString()
              })),
              reveal_time: input.config.blindBoxConfig.revealTime
            }
          }
        }
      };
    },
    fromAmino: ({
      creator,
      class_id,
      input
    }: MsgUpdateClassAminoType["value"]): MsgUpdateClass => {
      return {
        creator,
        classId: class_id,
        input: {
          name: input.name,
          symbol: input.symbol,
          description: input.description,
          uri: input.uri,
          uriHash: input.uri_hash,
          metadata: input.metadata,
          config: {
            burnable: input.config.burnable,
            maxSupply: Long.fromString(input.config.max_supply),
            blindBoxConfig: {
              mintPeriods: input.config.blind_box_config.mint_periods.map(el3 => ({
                startTime: el3.start_time,
                allowedAddresses: el3.allowed_addresses,
                mintPrice: Long.fromString(el3.mint_price)
              })),
              revealTime: input.config.blind_box_config.reveal_time
            }
          }
        }
      };
    }
  },
  "/likechain.likenft.v1.MsgMintNFT": {
    aminoType: "/likechain.likenft.v1.MsgMintNFT",
    toAmino: ({
      creator,
      classId,
      id,
      input
    }: MsgMintNFT): MsgMintNFTAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        id,
        input: {
          uri: input.uri,
          uri_hash: input.uriHash,
          metadata: input.metadata
        }
      };
    },
    fromAmino: ({
      creator,
      class_id,
      id,
      input
    }: MsgMintNFTAminoType["value"]): MsgMintNFT => {
      return {
        creator,
        classId: class_id,
        id,
        input: {
          uri: input.uri,
          uriHash: input.uri_hash,
          metadata: input.metadata
        }
      };
    }
  },
  "/likechain.likenft.v1.MsgBurnNFT": {
    aminoType: "/likechain.likenft.v1.MsgBurnNFT",
    toAmino: ({
      creator,
      classId,
      nftId
    }: MsgBurnNFT): MsgBurnNFTAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        nft_id: nftId
      };
    },
    fromAmino: ({
      creator,
      class_id,
      nft_id
    }: MsgBurnNFTAminoType["value"]): MsgBurnNFT => {
      return {
        creator,
        classId: class_id,
        nftId: nft_id
      };
    }
  },
  "/likechain.likenft.v1.MsgCreateBlindBoxContent": {
    aminoType: "/likechain.likenft.v1.MsgCreateBlindBoxContent",
    toAmino: ({
      creator,
      classId,
      id,
      input
    }: MsgCreateBlindBoxContent): MsgCreateBlindBoxContentAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        id,
        input: {
          uri: input.uri,
          uri_hash: input.uriHash,
          metadata: input.metadata
        }
      };
    },
    fromAmino: ({
      creator,
      class_id,
      id,
      input
    }: MsgCreateBlindBoxContentAminoType["value"]): MsgCreateBlindBoxContent => {
      return {
        creator,
        classId: class_id,
        id,
        input: {
          uri: input.uri,
          uriHash: input.uri_hash,
          metadata: input.metadata
        }
      };
    }
  },
  "/likechain.likenft.v1.MsgUpdateBlindBoxContent": {
    aminoType: "/likechain.likenft.v1.MsgUpdateBlindBoxContent",
    toAmino: ({
      creator,
      classId,
      id,
      input
    }: MsgUpdateBlindBoxContent): MsgUpdateBlindBoxContentAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        id,
        input: {
          uri: input.uri,
          uri_hash: input.uriHash,
          metadata: input.metadata
        }
      };
    },
    fromAmino: ({
      creator,
      class_id,
      id,
      input
    }: MsgUpdateBlindBoxContentAminoType["value"]): MsgUpdateBlindBoxContent => {
      return {
        creator,
        classId: class_id,
        id,
        input: {
          uri: input.uri,
          uriHash: input.uri_hash,
          metadata: input.metadata
        }
      };
    }
  },
  "/likechain.likenft.v1.MsgDeleteBlindBoxContent": {
    aminoType: "/likechain.likenft.v1.MsgDeleteBlindBoxContent",
    toAmino: ({
      creator,
      classId,
      id
    }: MsgDeleteBlindBoxContent): MsgDeleteBlindBoxContentAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        id
      };
    },
    fromAmino: ({
      creator,
      class_id,
      id
    }: MsgDeleteBlindBoxContentAminoType["value"]): MsgDeleteBlindBoxContent => {
      return {
        creator,
        classId: class_id,
        id
      };
    }
  },
  "/likechain.likenft.v1.MsgCreateOffer": {
    aminoType: "/likechain.likenft.v1.MsgCreateOffer",
    toAmino: ({
      creator,
      classId,
      nftId,
      price,
      expiration
    }: MsgCreateOffer): MsgCreateOfferAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        nft_id: nftId,
        price: price.toString(),
        expiration
      };
    },
    fromAmino: ({
      creator,
      class_id,
      nft_id,
      price,
      expiration
    }: MsgCreateOfferAminoType["value"]): MsgCreateOffer => {
      return {
        creator,
        classId: class_id,
        nftId: nft_id,
        price: Long.fromString(price),
        expiration
      };
    }
  },
  "/likechain.likenft.v1.MsgUpdateOffer": {
    aminoType: "/likechain.likenft.v1.MsgUpdateOffer",
    toAmino: ({
      creator,
      classId,
      nftId,
      price,
      expiration
    }: MsgUpdateOffer): MsgUpdateOfferAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        nft_id: nftId,
        price: price.toString(),
        expiration
      };
    },
    fromAmino: ({
      creator,
      class_id,
      nft_id,
      price,
      expiration
    }: MsgUpdateOfferAminoType["value"]): MsgUpdateOffer => {
      return {
        creator,
        classId: class_id,
        nftId: nft_id,
        price: Long.fromString(price),
        expiration
      };
    }
  },
  "/likechain.likenft.v1.MsgDeleteOffer": {
    aminoType: "/likechain.likenft.v1.MsgDeleteOffer",
    toAmino: ({
      creator,
      classId,
      nftId
    }: MsgDeleteOffer): MsgDeleteOfferAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        nft_id: nftId
      };
    },
    fromAmino: ({
      creator,
      class_id,
      nft_id
    }: MsgDeleteOfferAminoType["value"]): MsgDeleteOffer => {
      return {
        creator,
        classId: class_id,
        nftId: nft_id
      };
    }
  },
  "/likechain.likenft.v1.MsgCreateListing": {
    aminoType: "/likechain.likenft.v1.MsgCreateListing",
    toAmino: ({
      creator,
      classId,
      nftId,
      price,
      expiration,
      fullPayToRoyalty
    }: MsgCreateListing): MsgCreateListingAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        nft_id: nftId,
        price: price.toString(),
        expiration,
        full_pay_to_royalty: fullPayToRoyalty
      };
    },
    fromAmino: ({
      creator,
      class_id,
      nft_id,
      price,
      expiration,
      full_pay_to_royalty
    }: MsgCreateListingAminoType["value"]): MsgCreateListing => {
      return {
        creator,
        classId: class_id,
        nftId: nft_id,
        price: Long.fromString(price),
        expiration,
        fullPayToRoyalty: full_pay_to_royalty
      };
    }
  },
  "/likechain.likenft.v1.MsgUpdateListing": {
    aminoType: "/likechain.likenft.v1.MsgUpdateListing",
    toAmino: ({
      creator,
      classId,
      nftId,
      price,
      expiration,
      fullPayToRoyalty
    }: MsgUpdateListing): MsgUpdateListingAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        nft_id: nftId,
        price: price.toString(),
        expiration,
        full_pay_to_royalty: fullPayToRoyalty
      };
    },
    fromAmino: ({
      creator,
      class_id,
      nft_id,
      price,
      expiration,
      full_pay_to_royalty
    }: MsgUpdateListingAminoType["value"]): MsgUpdateListing => {
      return {
        creator,
        classId: class_id,
        nftId: nft_id,
        price: Long.fromString(price),
        expiration,
        fullPayToRoyalty: full_pay_to_royalty
      };
    }
  },
  "/likechain.likenft.v1.MsgDeleteListing": {
    aminoType: "/likechain.likenft.v1.MsgDeleteListing",
    toAmino: ({
      creator,
      classId,
      nftId
    }: MsgDeleteListing): MsgDeleteListingAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        nft_id: nftId
      };
    },
    fromAmino: ({
      creator,
      class_id,
      nft_id
    }: MsgDeleteListingAminoType["value"]): MsgDeleteListing => {
      return {
        creator,
        classId: class_id,
        nftId: nft_id
      };
    }
  },
  "/likechain.likenft.v1.MsgSellNFT": {
    aminoType: "/likechain.likenft.v1.MsgSellNFT",
    toAmino: ({
      creator,
      classId,
      nftId,
      buyer,
      price,
      fullPayToRoyalty
    }: MsgSellNFT): MsgSellNFTAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        nft_id: nftId,
        buyer,
        price: price.toString(),
        full_pay_to_royalty: fullPayToRoyalty
      };
    },
    fromAmino: ({
      creator,
      class_id,
      nft_id,
      buyer,
      price,
      full_pay_to_royalty
    }: MsgSellNFTAminoType["value"]): MsgSellNFT => {
      return {
        creator,
        classId: class_id,
        nftId: nft_id,
        buyer,
        price: Long.fromString(price),
        fullPayToRoyalty: full_pay_to_royalty
      };
    }
  },
  "/likechain.likenft.v1.MsgBuyNFT": {
    aminoType: "/likechain.likenft.v1.MsgBuyNFT",
    toAmino: ({
      creator,
      classId,
      nftId,
      seller,
      price
    }: MsgBuyNFT): MsgBuyNFTAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        nft_id: nftId,
        seller,
        price: price.toString()
      };
    },
    fromAmino: ({
      creator,
      class_id,
      nft_id,
      seller,
      price
    }: MsgBuyNFTAminoType["value"]): MsgBuyNFT => {
      return {
        creator,
        classId: class_id,
        nftId: nft_id,
        seller,
        price: Long.fromString(price)
      };
    }
  },
  "/likechain.likenft.v1.MsgCreateRoyaltyConfig": {
    aminoType: "/likechain.likenft.v1.MsgCreateRoyaltyConfig",
    toAmino: ({
      creator,
      classId,
      royaltyConfig
    }: MsgCreateRoyaltyConfig): MsgCreateRoyaltyConfigAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        royalty_config: {
          rate_basis_points: royaltyConfig.rateBasisPoints.toString(),
          stakeholders: royaltyConfig.stakeholders.map(el0 => ({
            account: el0.account,
            weight: el0.weight.toString()
          }))
        }
      };
    },
    fromAmino: ({
      creator,
      class_id,
      royalty_config
    }: MsgCreateRoyaltyConfigAminoType["value"]): MsgCreateRoyaltyConfig => {
      return {
        creator,
        classId: class_id,
        royaltyConfig: {
          rateBasisPoints: Long.fromString(royalty_config.rate_basis_points),
          stakeholders: royalty_config.stakeholders.map(el1 => ({
            account: el1.account,
            weight: Long.fromString(el1.weight)
          }))
        }
      };
    }
  },
  "/likechain.likenft.v1.MsgUpdateRoyaltyConfig": {
    aminoType: "/likechain.likenft.v1.MsgUpdateRoyaltyConfig",
    toAmino: ({
      creator,
      classId,
      royaltyConfig
    }: MsgUpdateRoyaltyConfig): MsgUpdateRoyaltyConfigAminoType["value"] => {
      return {
        creator,
        class_id: classId,
        royalty_config: {
          rate_basis_points: royaltyConfig.rateBasisPoints.toString(),
          stakeholders: royaltyConfig.stakeholders.map(el0 => ({
            account: el0.account,
            weight: el0.weight.toString()
          }))
        }
      };
    },
    fromAmino: ({
      creator,
      class_id,
      royalty_config
    }: MsgUpdateRoyaltyConfigAminoType["value"]): MsgUpdateRoyaltyConfig => {
      return {
        creator,
        classId: class_id,
        royaltyConfig: {
          rateBasisPoints: Long.fromString(royalty_config.rate_basis_points),
          stakeholders: royalty_config.stakeholders.map(el1 => ({
            account: el1.account,
            weight: Long.fromString(el1.weight)
          }))
        }
      };
    }
  },
  "/likechain.likenft.v1.MsgDeleteRoyaltyConfig": {
    aminoType: "/likechain.likenft.v1.MsgDeleteRoyaltyConfig",
    toAmino: ({
      creator,
      classId
    }: MsgDeleteRoyaltyConfig): MsgDeleteRoyaltyConfigAminoType["value"] => {
      return {
        creator,
        class_id: classId
      };
    },
    fromAmino: ({
      creator,
      class_id
    }: MsgDeleteRoyaltyConfigAminoType["value"]): MsgDeleteRoyaltyConfig => {
      return {
        creator,
        classId: class_id
      };
    }
  }
};