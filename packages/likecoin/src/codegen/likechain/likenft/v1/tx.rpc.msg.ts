import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgNewClass, MsgNewClassResponse, MsgUpdateClass, MsgUpdateClassResponse, MsgMintNFT, MsgMintNFTResponse, MsgBurnNFT, MsgBurnNFTResponse, MsgCreateBlindBoxContent, MsgCreateBlindBoxContentResponse, MsgUpdateBlindBoxContent, MsgUpdateBlindBoxContentResponse, MsgDeleteBlindBoxContent, MsgDeleteBlindBoxContentResponse, MsgCreateOffer, MsgCreateOfferResponse, MsgUpdateOffer, MsgUpdateOfferResponse, MsgDeleteOffer, MsgDeleteOfferResponse, MsgCreateListing, MsgCreateListingResponse, MsgUpdateListing, MsgUpdateListingResponse, MsgDeleteListing, MsgDeleteListingResponse, MsgSellNFT, MsgSellNFTResponse, MsgBuyNFT, MsgBuyNFTResponse, MsgCreateRoyaltyConfig, MsgCreateRoyaltyConfigResponse, MsgUpdateRoyaltyConfig, MsgUpdateRoyaltyConfigResponse, MsgDeleteRoyaltyConfig, MsgDeleteRoyaltyConfigResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  newClass(request: MsgNewClass): Promise<MsgNewClassResponse>;
  updateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse>;
  mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
  createBlindBoxContent(request: MsgCreateBlindBoxContent): Promise<MsgCreateBlindBoxContentResponse>;
  updateBlindBoxContent(request: MsgUpdateBlindBoxContent): Promise<MsgUpdateBlindBoxContentResponse>;
  deleteBlindBoxContent(request: MsgDeleteBlindBoxContent): Promise<MsgDeleteBlindBoxContentResponse>;
  createOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse>;
  updateOffer(request: MsgUpdateOffer): Promise<MsgUpdateOfferResponse>;
  deleteOffer(request: MsgDeleteOffer): Promise<MsgDeleteOfferResponse>;
  createListing(request: MsgCreateListing): Promise<MsgCreateListingResponse>;
  updateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse>;
  deleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse>;
  sellNFT(request: MsgSellNFT): Promise<MsgSellNFTResponse>;
  buyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
  createRoyaltyConfig(request: MsgCreateRoyaltyConfig): Promise<MsgCreateRoyaltyConfigResponse>;
  updateRoyaltyConfig(request: MsgUpdateRoyaltyConfig): Promise<MsgUpdateRoyaltyConfigResponse>;
  deleteRoyaltyConfig(request: MsgDeleteRoyaltyConfig): Promise<MsgDeleteRoyaltyConfigResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.newClass = this.newClass.bind(this);
    this.updateClass = this.updateClass.bind(this);
    this.mintNFT = this.mintNFT.bind(this);
    this.burnNFT = this.burnNFT.bind(this);
    this.createBlindBoxContent = this.createBlindBoxContent.bind(this);
    this.updateBlindBoxContent = this.updateBlindBoxContent.bind(this);
    this.deleteBlindBoxContent = this.deleteBlindBoxContent.bind(this);
    this.createOffer = this.createOffer.bind(this);
    this.updateOffer = this.updateOffer.bind(this);
    this.deleteOffer = this.deleteOffer.bind(this);
    this.createListing = this.createListing.bind(this);
    this.updateListing = this.updateListing.bind(this);
    this.deleteListing = this.deleteListing.bind(this);
    this.sellNFT = this.sellNFT.bind(this);
    this.buyNFT = this.buyNFT.bind(this);
    this.createRoyaltyConfig = this.createRoyaltyConfig.bind(this);
    this.updateRoyaltyConfig = this.updateRoyaltyConfig.bind(this);
    this.deleteRoyaltyConfig = this.deleteRoyaltyConfig.bind(this);
  }
  newClass(request: MsgNewClass): Promise<MsgNewClassResponse> {
    const data = MsgNewClass.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "NewClass", data);
    return promise.then(data => MsgNewClassResponse.decode(new BinaryReader(data)));
  }
  updateClass(request: MsgUpdateClass): Promise<MsgUpdateClassResponse> {
    const data = MsgUpdateClass.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "UpdateClass", data);
    return promise.then(data => MsgUpdateClassResponse.decode(new BinaryReader(data)));
  }
  mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "MintNFT", data);
    return promise.then(data => MsgMintNFTResponse.decode(new BinaryReader(data)));
  }
  burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "BurnNFT", data);
    return promise.then(data => MsgBurnNFTResponse.decode(new BinaryReader(data)));
  }
  createBlindBoxContent(request: MsgCreateBlindBoxContent): Promise<MsgCreateBlindBoxContentResponse> {
    const data = MsgCreateBlindBoxContent.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "CreateBlindBoxContent", data);
    return promise.then(data => MsgCreateBlindBoxContentResponse.decode(new BinaryReader(data)));
  }
  updateBlindBoxContent(request: MsgUpdateBlindBoxContent): Promise<MsgUpdateBlindBoxContentResponse> {
    const data = MsgUpdateBlindBoxContent.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "UpdateBlindBoxContent", data);
    return promise.then(data => MsgUpdateBlindBoxContentResponse.decode(new BinaryReader(data)));
  }
  deleteBlindBoxContent(request: MsgDeleteBlindBoxContent): Promise<MsgDeleteBlindBoxContentResponse> {
    const data = MsgDeleteBlindBoxContent.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "DeleteBlindBoxContent", data);
    return promise.then(data => MsgDeleteBlindBoxContentResponse.decode(new BinaryReader(data)));
  }
  createOffer(request: MsgCreateOffer): Promise<MsgCreateOfferResponse> {
    const data = MsgCreateOffer.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "CreateOffer", data);
    return promise.then(data => MsgCreateOfferResponse.decode(new BinaryReader(data)));
  }
  updateOffer(request: MsgUpdateOffer): Promise<MsgUpdateOfferResponse> {
    const data = MsgUpdateOffer.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "UpdateOffer", data);
    return promise.then(data => MsgUpdateOfferResponse.decode(new BinaryReader(data)));
  }
  deleteOffer(request: MsgDeleteOffer): Promise<MsgDeleteOfferResponse> {
    const data = MsgDeleteOffer.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "DeleteOffer", data);
    return promise.then(data => MsgDeleteOfferResponse.decode(new BinaryReader(data)));
  }
  createListing(request: MsgCreateListing): Promise<MsgCreateListingResponse> {
    const data = MsgCreateListing.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "CreateListing", data);
    return promise.then(data => MsgCreateListingResponse.decode(new BinaryReader(data)));
  }
  updateListing(request: MsgUpdateListing): Promise<MsgUpdateListingResponse> {
    const data = MsgUpdateListing.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "UpdateListing", data);
    return promise.then(data => MsgUpdateListingResponse.decode(new BinaryReader(data)));
  }
  deleteListing(request: MsgDeleteListing): Promise<MsgDeleteListingResponse> {
    const data = MsgDeleteListing.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "DeleteListing", data);
    return promise.then(data => MsgDeleteListingResponse.decode(new BinaryReader(data)));
  }
  sellNFT(request: MsgSellNFT): Promise<MsgSellNFTResponse> {
    const data = MsgSellNFT.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "SellNFT", data);
    return promise.then(data => MsgSellNFTResponse.decode(new BinaryReader(data)));
  }
  buyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse> {
    const data = MsgBuyNFT.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "BuyNFT", data);
    return promise.then(data => MsgBuyNFTResponse.decode(new BinaryReader(data)));
  }
  createRoyaltyConfig(request: MsgCreateRoyaltyConfig): Promise<MsgCreateRoyaltyConfigResponse> {
    const data = MsgCreateRoyaltyConfig.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "CreateRoyaltyConfig", data);
    return promise.then(data => MsgCreateRoyaltyConfigResponse.decode(new BinaryReader(data)));
  }
  updateRoyaltyConfig(request: MsgUpdateRoyaltyConfig): Promise<MsgUpdateRoyaltyConfigResponse> {
    const data = MsgUpdateRoyaltyConfig.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "UpdateRoyaltyConfig", data);
    return promise.then(data => MsgUpdateRoyaltyConfigResponse.decode(new BinaryReader(data)));
  }
  deleteRoyaltyConfig(request: MsgDeleteRoyaltyConfig): Promise<MsgDeleteRoyaltyConfigResponse> {
    const data = MsgDeleteRoyaltyConfig.encode(request).finish();
    const promise = this.rpc.request("likechain.likenft.v1.Msg", "DeleteRoyaltyConfig", data);
    return promise.then(data => MsgDeleteRoyaltyConfigResponse.decode(new BinaryReader(data)));
  }
}