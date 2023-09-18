import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataAmino, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import { BinaryWriter } from "../../../binary";
export interface EventCreateTFDenom {
    account: string;
    denom: string;
}
export interface EventCreateTFDenomProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.EventCreateTFDenom";
    value: Uint8Array;
}
export interface EventCreateTFDenomAmino {
    account: string;
    denom: string;
}
export interface EventCreateTFDenomAminoMsg {
    type: "/injective.tokenfactory.v1beta1.EventCreateTFDenom";
    value: EventCreateTFDenomAmino;
}
export interface EventCreateTFDenomSDKType {
    account: string;
    denom: string;
}
export interface EventMintTFDenom {
    recipientAddress: string;
    amount: Coin;
}
export interface EventMintTFDenomProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.EventMintTFDenom";
    value: Uint8Array;
}
export interface EventMintTFDenomAmino {
    recipient_address: string;
    amount?: CoinAmino;
}
export interface EventMintTFDenomAminoMsg {
    type: "/injective.tokenfactory.v1beta1.EventMintTFDenom";
    value: EventMintTFDenomAmino;
}
export interface EventMintTFDenomSDKType {
    recipient_address: string;
    amount: CoinSDKType;
}
export interface EventBurnTFDenom {
    burnerAddress: string;
    amount: Coin;
}
export interface EventBurnTFDenomProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.EventBurnTFDenom";
    value: Uint8Array;
}
export interface EventBurnTFDenomAmino {
    burner_address: string;
    amount?: CoinAmino;
}
export interface EventBurnTFDenomAminoMsg {
    type: "/injective.tokenfactory.v1beta1.EventBurnTFDenom";
    value: EventBurnTFDenomAmino;
}
export interface EventBurnTFDenomSDKType {
    burner_address: string;
    amount: CoinSDKType;
}
export interface EventChangeTFAdmin {
    denom: string;
    newAdminAddress: string;
}
export interface EventChangeTFAdminProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin";
    value: Uint8Array;
}
export interface EventChangeTFAdminAmino {
    denom: string;
    new_admin_address: string;
}
export interface EventChangeTFAdminAminoMsg {
    type: "/injective.tokenfactory.v1beta1.EventChangeTFAdmin";
    value: EventChangeTFAdminAmino;
}
export interface EventChangeTFAdminSDKType {
    denom: string;
    new_admin_address: string;
}
export interface EventSetTFDenomMetadata {
    denom: string;
    metadata: Metadata;
}
export interface EventSetTFDenomMetadataProtoMsg {
    typeUrl: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata";
    value: Uint8Array;
}
export interface EventSetTFDenomMetadataAmino {
    denom: string;
    metadata?: MetadataAmino;
}
export interface EventSetTFDenomMetadataAminoMsg {
    type: "/injective.tokenfactory.v1beta1.EventSetTFDenomMetadata";
    value: EventSetTFDenomMetadataAmino;
}
export interface EventSetTFDenomMetadataSDKType {
    denom: string;
    metadata: MetadataSDKType;
}
export declare const EventCreateTFDenom: {
    typeUrl: string;
    encode(message: EventCreateTFDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventCreateTFDenom;
    fromPartial(object: Partial<EventCreateTFDenom>): EventCreateTFDenom;
    fromAmino(object: EventCreateTFDenomAmino): EventCreateTFDenom;
    toAmino(message: EventCreateTFDenom): EventCreateTFDenomAmino;
    fromAminoMsg(object: EventCreateTFDenomAminoMsg): EventCreateTFDenom;
    fromProtoMsg(message: EventCreateTFDenomProtoMsg): EventCreateTFDenom;
    toProto(message: EventCreateTFDenom): Uint8Array;
    toProtoMsg(message: EventCreateTFDenom): EventCreateTFDenomProtoMsg;
};
export declare const EventMintTFDenom: {
    typeUrl: string;
    encode(message: EventMintTFDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventMintTFDenom;
    fromPartial(object: Partial<EventMintTFDenom>): EventMintTFDenom;
    fromAmino(object: EventMintTFDenomAmino): EventMintTFDenom;
    toAmino(message: EventMintTFDenom): EventMintTFDenomAmino;
    fromAminoMsg(object: EventMintTFDenomAminoMsg): EventMintTFDenom;
    fromProtoMsg(message: EventMintTFDenomProtoMsg): EventMintTFDenom;
    toProto(message: EventMintTFDenom): Uint8Array;
    toProtoMsg(message: EventMintTFDenom): EventMintTFDenomProtoMsg;
};
export declare const EventBurnTFDenom: {
    typeUrl: string;
    encode(message: EventBurnTFDenom, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBurnTFDenom;
    fromPartial(object: Partial<EventBurnTFDenom>): EventBurnTFDenom;
    fromAmino(object: EventBurnTFDenomAmino): EventBurnTFDenom;
    toAmino(message: EventBurnTFDenom): EventBurnTFDenomAmino;
    fromAminoMsg(object: EventBurnTFDenomAminoMsg): EventBurnTFDenom;
    fromProtoMsg(message: EventBurnTFDenomProtoMsg): EventBurnTFDenom;
    toProto(message: EventBurnTFDenom): Uint8Array;
    toProtoMsg(message: EventBurnTFDenom): EventBurnTFDenomProtoMsg;
};
export declare const EventChangeTFAdmin: {
    typeUrl: string;
    encode(message: EventChangeTFAdmin, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventChangeTFAdmin;
    fromPartial(object: Partial<EventChangeTFAdmin>): EventChangeTFAdmin;
    fromAmino(object: EventChangeTFAdminAmino): EventChangeTFAdmin;
    toAmino(message: EventChangeTFAdmin): EventChangeTFAdminAmino;
    fromAminoMsg(object: EventChangeTFAdminAminoMsg): EventChangeTFAdmin;
    fromProtoMsg(message: EventChangeTFAdminProtoMsg): EventChangeTFAdmin;
    toProto(message: EventChangeTFAdmin): Uint8Array;
    toProtoMsg(message: EventChangeTFAdmin): EventChangeTFAdminProtoMsg;
};
export declare const EventSetTFDenomMetadata: {
    typeUrl: string;
    encode(message: EventSetTFDenomMetadata, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventSetTFDenomMetadata;
    fromPartial(object: Partial<EventSetTFDenomMetadata>): EventSetTFDenomMetadata;
    fromAmino(object: EventSetTFDenomMetadataAmino): EventSetTFDenomMetadata;
    toAmino(message: EventSetTFDenomMetadata): EventSetTFDenomMetadataAmino;
    fromAminoMsg(object: EventSetTFDenomMetadataAminoMsg): EventSetTFDenomMetadata;
    fromProtoMsg(message: EventSetTFDenomMetadataProtoMsg): EventSetTFDenomMetadata;
    toProto(message: EventSetTFDenomMetadata): Uint8Array;
    toProtoMsg(message: EventSetTFDenomMetadata): EventSetTFDenomMetadataProtoMsg;
};
