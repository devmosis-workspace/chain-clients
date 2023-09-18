import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
export interface Listing {
    id: string;
    nftId: string;
    denomId: string;
    price: Coin;
    owner: string;
    splitShares: WeightedAddress[];
}
export interface ListingProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.Listing";
    value: Uint8Array;
}
export interface ListingAmino {
    id: string;
    nft_id: string;
    denom_id: string;
    price?: CoinAmino;
    owner: string;
    split_shares: WeightedAddressAmino[];
}
export interface ListingAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.Listing";
    value: ListingAmino;
}
export interface ListingSDKType {
    id: string;
    nft_id: string;
    denom_id: string;
    price: CoinSDKType;
    owner: string;
    split_shares: WeightedAddressSDKType[];
}
export interface WeightedAddress {
    address: string;
    weight: string;
}
export interface WeightedAddressProtoMsg {
    typeUrl: "/OmniFlix.marketplace.v1beta1.WeightedAddress";
    value: Uint8Array;
}
export interface WeightedAddressAmino {
    address: string;
    weight: string;
}
export interface WeightedAddressAminoMsg {
    type: "/OmniFlix.marketplace.v1beta1.WeightedAddress";
    value: WeightedAddressAmino;
}
export interface WeightedAddressSDKType {
    address: string;
    weight: string;
}
export declare const Listing: {
    typeUrl: string;
    encode(message: Listing, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Listing;
    fromPartial(object: Partial<Listing>): Listing;
    fromAmino(object: ListingAmino): Listing;
    toAmino(message: Listing): ListingAmino;
    fromAminoMsg(object: ListingAminoMsg): Listing;
    fromProtoMsg(message: ListingProtoMsg): Listing;
    toProto(message: Listing): Uint8Array;
    toProtoMsg(message: Listing): ListingProtoMsg;
};
export declare const WeightedAddress: {
    typeUrl: string;
    encode(message: WeightedAddress, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): WeightedAddress;
    fromPartial(object: Partial<WeightedAddress>): WeightedAddress;
    fromAmino(object: WeightedAddressAmino): WeightedAddress;
    toAmino(message: WeightedAddress): WeightedAddressAmino;
    fromAminoMsg(object: WeightedAddressAminoMsg): WeightedAddress;
    fromProtoMsg(message: WeightedAddressProtoMsg): WeightedAddress;
    toProto(message: WeightedAddress): Uint8Array;
    toProtoMsg(message: WeightedAddress): WeightedAddressProtoMsg;
};
