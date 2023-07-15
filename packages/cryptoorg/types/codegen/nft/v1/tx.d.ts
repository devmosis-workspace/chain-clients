import * as _m0 from "protobufjs/minimal";
/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenom {
    id: string;
    name: string;
    schema: string;
    sender: string;
    uri: string;
}
/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenomSDKType {
    id: string;
    name: string;
    schema: string;
    sender: string;
    uri: string;
}
/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponse {
}
/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponseSDKType {
}
/** MsgTransferNFT defines an SDK message for transferring an NFT to recipient. */
export interface MsgTransferNFT {
    id: string;
    denomId: string;
    sender: string;
    recipient: string;
}
/** MsgTransferNFT defines an SDK message for transferring an NFT to recipient. */
export interface MsgTransferNFTSDKType {
    id: string;
    denom_id: string;
    sender: string;
    recipient: string;
}
/** MsgTransferNFTResponse defines the Msg/TransferNFT response type. */
export interface MsgTransferNFTResponse {
}
/** MsgTransferNFTResponse defines the Msg/TransferNFT response type. */
export interface MsgTransferNFTResponseSDKType {
}
/** MsgEditNFT defines an SDK message for editing a nft. */
export interface MsgEditNFT {
    id: string;
    denomId: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
}
/** MsgEditNFT defines an SDK message for editing a nft. */
export interface MsgEditNFTSDKType {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
}
/** MsgEditNFTResponse defines the Msg/EditNFT response type. */
export interface MsgEditNFTResponse {
}
/** MsgEditNFTResponse defines the Msg/EditNFT response type. */
export interface MsgEditNFTResponseSDKType {
}
/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFT {
    id: string;
    denomId: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
}
/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFTSDKType {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
}
/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponse {
}
/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponseSDKType {
}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFT {
    id: string;
    denomId: string;
    sender: string;
}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFTSDKType {
    id: string;
    denom_id: string;
    sender: string;
}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponse {
}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponseSDKType {
}
export declare const MsgIssueDenom: {
    encode(message: MsgIssueDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgIssueDenom;
    fromPartial(object: Partial<MsgIssueDenom>): MsgIssueDenom;
};
export declare const MsgIssueDenomResponse: {
    encode(_: MsgIssueDenomResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgIssueDenomResponse;
    fromPartial(_: Partial<MsgIssueDenomResponse>): MsgIssueDenomResponse;
};
export declare const MsgTransferNFT: {
    encode(message: MsgTransferNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgTransferNFT;
    fromPartial(object: Partial<MsgTransferNFT>): MsgTransferNFT;
};
export declare const MsgTransferNFTResponse: {
    encode(_: MsgTransferNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgTransferNFTResponse;
    fromPartial(_: Partial<MsgTransferNFTResponse>): MsgTransferNFTResponse;
};
export declare const MsgEditNFT: {
    encode(message: MsgEditNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgEditNFT;
    fromPartial(object: Partial<MsgEditNFT>): MsgEditNFT;
};
export declare const MsgEditNFTResponse: {
    encode(_: MsgEditNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgEditNFTResponse;
    fromPartial(_: Partial<MsgEditNFTResponse>): MsgEditNFTResponse;
};
export declare const MsgMintNFT: {
    encode(message: MsgMintNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgMintNFT;
    fromPartial(object: Partial<MsgMintNFT>): MsgMintNFT;
};
export declare const MsgMintNFTResponse: {
    encode(_: MsgMintNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgMintNFTResponse;
    fromPartial(_: Partial<MsgMintNFTResponse>): MsgMintNFTResponse;
};
export declare const MsgBurnNFT: {
    encode(message: MsgBurnNFT, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgBurnNFT;
    fromPartial(object: Partial<MsgBurnNFT>): MsgBurnNFT;
};
export declare const MsgBurnNFTResponse: {
    encode(_: MsgBurnNFTResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgBurnNFTResponse;
    fromPartial(_: Partial<MsgBurnNFTResponse>): MsgBurnNFTResponse;
};
