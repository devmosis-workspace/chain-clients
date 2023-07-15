import { Rpc } from "../../helpers";
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
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    issueDenom(request: MsgIssueDenom): Promise<MsgIssueDenomResponse>;
    mintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
    editNFT(request: MsgEditNFT): Promise<MsgEditNFTResponse>;
    transferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
    burnNFT(request: MsgBurnNFT): Promise<MsgBurnNFTResponse>;
}
