import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgListNFT, MsgListNFTResponse, MsgEditListing, MsgEditListingResponse, MsgDeListNFT, MsgDeListNFTResponse, MsgBuyNFT, MsgBuyNFTResponse, MsgCreateAuction, MsgCreateAuctionResponse, MsgCancelAuction, MsgCancelAuctionResponse, MsgPlaceBid, MsgPlaceBidResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
export interface Msg {
  listNFT(request: MsgListNFT): Promise<MsgListNFTResponse>;
  editListing(request: MsgEditListing): Promise<MsgEditListingResponse>;
  deListNFT(request: MsgDeListNFT): Promise<MsgDeListNFTResponse>;
  buyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
  createAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse>;
  cancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse>;
  placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse>;
  /**
   * UpdateParams defines a governance operation for updating the x/marketplace module
   * parameters. The authority is hard-coded to the x/marketplace module account.
   * 
   * Since: cosmos-sdk 0.47
   */
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.listNFT = this.listNFT.bind(this);
    this.editListing = this.editListing.bind(this);
    this.deListNFT = this.deListNFT.bind(this);
    this.buyNFT = this.buyNFT.bind(this);
    this.createAuction = this.createAuction.bind(this);
    this.cancelAuction = this.cancelAuction.bind(this);
    this.placeBid = this.placeBid.bind(this);
    this.updateParams = this.updateParams.bind(this);
  }
  listNFT(request: MsgListNFT): Promise<MsgListNFTResponse> {
    const data = MsgListNFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "ListNFT", data);
    return promise.then(data => MsgListNFTResponse.decode(new BinaryReader(data)));
  }
  editListing(request: MsgEditListing): Promise<MsgEditListingResponse> {
    const data = MsgEditListing.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "EditListing", data);
    return promise.then(data => MsgEditListingResponse.decode(new BinaryReader(data)));
  }
  deListNFT(request: MsgDeListNFT): Promise<MsgDeListNFTResponse> {
    const data = MsgDeListNFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "DeListNFT", data);
    return promise.then(data => MsgDeListNFTResponse.decode(new BinaryReader(data)));
  }
  buyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse> {
    const data = MsgBuyNFT.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "BuyNFT", data);
    return promise.then(data => MsgBuyNFTResponse.decode(new BinaryReader(data)));
  }
  createAuction(request: MsgCreateAuction): Promise<MsgCreateAuctionResponse> {
    const data = MsgCreateAuction.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "CreateAuction", data);
    return promise.then(data => MsgCreateAuctionResponse.decode(new BinaryReader(data)));
  }
  cancelAuction(request: MsgCancelAuction): Promise<MsgCancelAuctionResponse> {
    const data = MsgCancelAuction.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "CancelAuction", data);
    return promise.then(data => MsgCancelAuctionResponse.decode(new BinaryReader(data)));
  }
  placeBid(request: MsgPlaceBid): Promise<MsgPlaceBidResponse> {
    const data = MsgPlaceBid.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "PlaceBid", data);
    return promise.then(data => MsgPlaceBidResponse.decode(new BinaryReader(data)));
  }
  updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse> {
    const data = MsgUpdateParams.encode(request).finish();
    const promise = this.rpc.request("OmniFlix.marketplace.v1beta1.Msg", "UpdateParams", data);
    return promise.then(data => MsgUpdateParamsResponse.decode(new BinaryReader(data)));
  }
}