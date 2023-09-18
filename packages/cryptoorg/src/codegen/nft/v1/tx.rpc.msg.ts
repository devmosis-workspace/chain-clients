import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgIssueDenom, MsgIssueDenomResponse, MsgMintNFT, MsgMintNFTResponse, MsgEditNFT, MsgEditNFTResponse, MsgTransferNFT, MsgTransferNFTResponse, MsgBurnNFT, MsgBurnNFTResponse } from "./tx";
/** Msg defines the NFT Msg service. */
export interface Msg {
  /** IssueDenom defines a method for issue a denom. */
  issueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse>;
  /** MintNFT defines a method for mint a new nft */
  mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  /** EditNFT defines a method for editing a nft. */
  editNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse>;
  /** TransferNFT defines a method for transferring a nft. */
  transferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
  /** BurnNFT defines a method for burning a nft. */
  burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.issueDenom = this.issueDenom.bind(this);
    this.mintNFT = this.mintNFT.bind(this);
    this.editNFT = this.editNFT.bind(this);
    this.transferNFT = this.transferNFT.bind(this);
    this.burnNFT = this.burnNFT.bind(this);
  }
  issueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse> {
    const data = MsgIssueDenom.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Msg", "IssueDenom", data);
    return promise.then(data => MsgIssueDenomResponse.decode(new BinaryReader(data)));
  }
  mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Msg", "MintNFT", data);
    return promise.then(data => MsgMintNFTResponse.decode(new BinaryReader(data)));
  }
  editNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse> {
    const data = MsgEditNFT.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Msg", "EditNFT", data);
    return promise.then(data => MsgEditNFTResponse.decode(new BinaryReader(data)));
  }
  transferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Msg", "TransferNFT", data);
    return promise.then(data => MsgTransferNFTResponse.decode(new BinaryReader(data)));
  }
  burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse> {
    const data = MsgBurnNFT.encode(request).finish();
    const promise = this.rpc.request("chainmain.nft.v1.Msg", "BurnNFT", data);
    return promise.then(data => MsgBurnNFTResponse.decode(new BinaryReader(data)));
  }
}