import { BinaryWriter } from "../../binary";
/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenom {
    id: string;
    name: string;
    schema: string;
    sender: string;
    uri: string;
}
export interface MsgIssueDenomProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgIssueDenom";
    value: Uint8Array;
}
/** MsgIssueDenom defines an SDK message for creating a new denom. */
export interface MsgIssueDenomAmino {
    id: string;
    name: string;
    schema: string;
    sender: string;
    uri: string;
}
export interface MsgIssueDenomAminoMsg {
    type: "/chainmain.nft.v1.MsgIssueDenom";
    value: MsgIssueDenomAmino;
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
export interface MsgIssueDenomResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgIssueDenomResponse";
    value: Uint8Array;
}
/** MsgIssueDenomResponse defines the Msg/IssueDenom response type. */
export interface MsgIssueDenomResponseAmino {
}
export interface MsgIssueDenomResponseAminoMsg {
    type: "/chainmain.nft.v1.MsgIssueDenomResponse";
    value: MsgIssueDenomResponseAmino;
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
export interface MsgTransferNFTProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgTransferNFT";
    value: Uint8Array;
}
/** MsgTransferNFT defines an SDK message for transferring an NFT to recipient. */
export interface MsgTransferNFTAmino {
    id: string;
    denom_id: string;
    sender: string;
    recipient: string;
}
export interface MsgTransferNFTAminoMsg {
    type: "/chainmain.nft.v1.MsgTransferNFT";
    value: MsgTransferNFTAmino;
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
export interface MsgTransferNFTResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgTransferNFTResponse";
    value: Uint8Array;
}
/** MsgTransferNFTResponse defines the Msg/TransferNFT response type. */
export interface MsgTransferNFTResponseAmino {
}
export interface MsgTransferNFTResponseAminoMsg {
    type: "/chainmain.nft.v1.MsgTransferNFTResponse";
    value: MsgTransferNFTResponseAmino;
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
export interface MsgEditNFTProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgEditNFT";
    value: Uint8Array;
}
/** MsgEditNFT defines an SDK message for editing a nft. */
export interface MsgEditNFTAmino {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
}
export interface MsgEditNFTAminoMsg {
    type: "/chainmain.nft.v1.MsgEditNFT";
    value: MsgEditNFTAmino;
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
export interface MsgEditNFTResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgEditNFTResponse";
    value: Uint8Array;
}
/** MsgEditNFTResponse defines the Msg/EditNFT response type. */
export interface MsgEditNFTResponseAmino {
}
export interface MsgEditNFTResponseAminoMsg {
    type: "/chainmain.nft.v1.MsgEditNFTResponse";
    value: MsgEditNFTResponseAmino;
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
export interface MsgMintNFTProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgMintNFT";
    value: Uint8Array;
}
/** MsgMintNFT defines an SDK message for creating a new NFT. */
export interface MsgMintNFTAmino {
    id: string;
    denom_id: string;
    name: string;
    uri: string;
    data: string;
    sender: string;
    recipient: string;
}
export interface MsgMintNFTAminoMsg {
    type: "/chainmain.nft.v1.MsgMintNFT";
    value: MsgMintNFTAmino;
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
export interface MsgMintNFTResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgMintNFTResponse";
    value: Uint8Array;
}
/** MsgMintNFTResponse defines the Msg/MintNFT response type. */
export interface MsgMintNFTResponseAmino {
}
export interface MsgMintNFTResponseAminoMsg {
    type: "/chainmain.nft.v1.MsgMintNFTResponse";
    value: MsgMintNFTResponseAmino;
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
export interface MsgBurnNFTProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgBurnNFT";
    value: Uint8Array;
}
/** MsgBurnNFT defines an SDK message for burning a NFT. */
export interface MsgBurnNFTAmino {
    id: string;
    denom_id: string;
    sender: string;
}
export interface MsgBurnNFTAminoMsg {
    type: "/chainmain.nft.v1.MsgBurnNFT";
    value: MsgBurnNFTAmino;
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
export interface MsgBurnNFTResponseProtoMsg {
    typeUrl: "/chainmain.nft.v1.MsgBurnNFTResponse";
    value: Uint8Array;
}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponseAmino {
}
export interface MsgBurnNFTResponseAminoMsg {
    type: "/chainmain.nft.v1.MsgBurnNFTResponse";
    value: MsgBurnNFTResponseAmino;
}
/** MsgBurnNFTResponse defines the Msg/BurnNFT response type. */
export interface MsgBurnNFTResponseSDKType {
}
export declare const MsgIssueDenom: {
    typeUrl: string;
    encode(message: MsgIssueDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgIssueDenom;
    fromPartial(object: Partial<MsgIssueDenom>): MsgIssueDenom;
    fromAmino(object: MsgIssueDenomAmino): MsgIssueDenom;
    toAmino(message: MsgIssueDenom): MsgIssueDenomAmino;
    fromAminoMsg(object: MsgIssueDenomAminoMsg): MsgIssueDenom;
    fromProtoMsg(message: MsgIssueDenomProtoMsg): MsgIssueDenom;
    toProto(message: MsgIssueDenom): Uint8Array;
    toProtoMsg(message: MsgIssueDenom): MsgIssueDenomProtoMsg;
};
export declare const MsgIssueDenomResponse: {
    typeUrl: string;
    encode(_: MsgIssueDenomResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgIssueDenomResponse;
    fromPartial(_: Partial<MsgIssueDenomResponse>): MsgIssueDenomResponse;
    fromAmino(_: MsgIssueDenomResponseAmino): MsgIssueDenomResponse;
    toAmino(_: MsgIssueDenomResponse): MsgIssueDenomResponseAmino;
    fromAminoMsg(object: MsgIssueDenomResponseAminoMsg): MsgIssueDenomResponse;
    fromProtoMsg(message: MsgIssueDenomResponseProtoMsg): MsgIssueDenomResponse;
    toProto(message: MsgIssueDenomResponse): Uint8Array;
    toProtoMsg(message: MsgIssueDenomResponse): MsgIssueDenomResponseProtoMsg;
};
export declare const MsgTransferNFT: {
    typeUrl: string;
    encode(message: MsgTransferNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgTransferNFT;
    fromPartial(object: Partial<MsgTransferNFT>): MsgTransferNFT;
    fromAmino(object: MsgTransferNFTAmino): MsgTransferNFT;
    toAmino(message: MsgTransferNFT): MsgTransferNFTAmino;
    fromAminoMsg(object: MsgTransferNFTAminoMsg): MsgTransferNFT;
    fromProtoMsg(message: MsgTransferNFTProtoMsg): MsgTransferNFT;
    toProto(message: MsgTransferNFT): Uint8Array;
    toProtoMsg(message: MsgTransferNFT): MsgTransferNFTProtoMsg;
};
export declare const MsgTransferNFTResponse: {
    typeUrl: string;
    encode(_: MsgTransferNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgTransferNFTResponse;
    fromPartial(_: Partial<MsgTransferNFTResponse>): MsgTransferNFTResponse;
    fromAmino(_: MsgTransferNFTResponseAmino): MsgTransferNFTResponse;
    toAmino(_: MsgTransferNFTResponse): MsgTransferNFTResponseAmino;
    fromAminoMsg(object: MsgTransferNFTResponseAminoMsg): MsgTransferNFTResponse;
    fromProtoMsg(message: MsgTransferNFTResponseProtoMsg): MsgTransferNFTResponse;
    toProto(message: MsgTransferNFTResponse): Uint8Array;
    toProtoMsg(message: MsgTransferNFTResponse): MsgTransferNFTResponseProtoMsg;
};
export declare const MsgEditNFT: {
    typeUrl: string;
    encode(message: MsgEditNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgEditNFT;
    fromPartial(object: Partial<MsgEditNFT>): MsgEditNFT;
    fromAmino(object: MsgEditNFTAmino): MsgEditNFT;
    toAmino(message: MsgEditNFT): MsgEditNFTAmino;
    fromAminoMsg(object: MsgEditNFTAminoMsg): MsgEditNFT;
    fromProtoMsg(message: MsgEditNFTProtoMsg): MsgEditNFT;
    toProto(message: MsgEditNFT): Uint8Array;
    toProtoMsg(message: MsgEditNFT): MsgEditNFTProtoMsg;
};
export declare const MsgEditNFTResponse: {
    typeUrl: string;
    encode(_: MsgEditNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgEditNFTResponse;
    fromPartial(_: Partial<MsgEditNFTResponse>): MsgEditNFTResponse;
    fromAmino(_: MsgEditNFTResponseAmino): MsgEditNFTResponse;
    toAmino(_: MsgEditNFTResponse): MsgEditNFTResponseAmino;
    fromAminoMsg(object: MsgEditNFTResponseAminoMsg): MsgEditNFTResponse;
    fromProtoMsg(message: MsgEditNFTResponseProtoMsg): MsgEditNFTResponse;
    toProto(message: MsgEditNFTResponse): Uint8Array;
    toProtoMsg(message: MsgEditNFTResponse): MsgEditNFTResponseProtoMsg;
};
export declare const MsgMintNFT: {
    typeUrl: string;
    encode(message: MsgMintNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgMintNFT;
    fromPartial(object: Partial<MsgMintNFT>): MsgMintNFT;
    fromAmino(object: MsgMintNFTAmino): MsgMintNFT;
    toAmino(message: MsgMintNFT): MsgMintNFTAmino;
    fromAminoMsg(object: MsgMintNFTAminoMsg): MsgMintNFT;
    fromProtoMsg(message: MsgMintNFTProtoMsg): MsgMintNFT;
    toProto(message: MsgMintNFT): Uint8Array;
    toProtoMsg(message: MsgMintNFT): MsgMintNFTProtoMsg;
};
export declare const MsgMintNFTResponse: {
    typeUrl: string;
    encode(_: MsgMintNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgMintNFTResponse;
    fromPartial(_: Partial<MsgMintNFTResponse>): MsgMintNFTResponse;
    fromAmino(_: MsgMintNFTResponseAmino): MsgMintNFTResponse;
    toAmino(_: MsgMintNFTResponse): MsgMintNFTResponseAmino;
    fromAminoMsg(object: MsgMintNFTResponseAminoMsg): MsgMintNFTResponse;
    fromProtoMsg(message: MsgMintNFTResponseProtoMsg): MsgMintNFTResponse;
    toProto(message: MsgMintNFTResponse): Uint8Array;
    toProtoMsg(message: MsgMintNFTResponse): MsgMintNFTResponseProtoMsg;
};
export declare const MsgBurnNFT: {
    typeUrl: string;
    encode(message: MsgBurnNFT, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgBurnNFT;
    fromPartial(object: Partial<MsgBurnNFT>): MsgBurnNFT;
    fromAmino(object: MsgBurnNFTAmino): MsgBurnNFT;
    toAmino(message: MsgBurnNFT): MsgBurnNFTAmino;
    fromAminoMsg(object: MsgBurnNFTAminoMsg): MsgBurnNFT;
    fromProtoMsg(message: MsgBurnNFTProtoMsg): MsgBurnNFT;
    toProto(message: MsgBurnNFT): Uint8Array;
    toProtoMsg(message: MsgBurnNFT): MsgBurnNFTProtoMsg;
};
export declare const MsgBurnNFTResponse: {
    typeUrl: string;
    encode(_: MsgBurnNFTResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgBurnNFTResponse;
    fromPartial(_: Partial<MsgBurnNFTResponse>): MsgBurnNFTResponse;
    fromAmino(_: MsgBurnNFTResponseAmino): MsgBurnNFTResponse;
    toAmino(_: MsgBurnNFTResponse): MsgBurnNFTResponseAmino;
    fromAminoMsg(object: MsgBurnNFTResponseAminoMsg): MsgBurnNFTResponse;
    fromProtoMsg(message: MsgBurnNFTResponseProtoMsg): MsgBurnNFTResponse;
    toProto(message: MsgBurnNFTResponse): Uint8Array;
    toProtoMsg(message: MsgBurnNFTResponse): MsgBurnNFTResponseProtoMsg;
};
