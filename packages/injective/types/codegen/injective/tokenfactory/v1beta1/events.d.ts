import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Metadata, MetadataSDKType } from "../../../cosmos/bank/v1beta1/bank";
import * as _m0 from "protobufjs/minimal";
export interface EventCreateTFDenom {
    account: string;
    denom: string;
}
export interface EventCreateTFDenomSDKType {
    account: string;
    denom: string;
}
export interface EventMintTFDenom {
    recipientAddress: string;
    amount?: Coin;
}
export interface EventMintTFDenomSDKType {
    recipient_address: string;
    amount?: CoinSDKType;
}
export interface EventBurnTFDenom {
    burnerAddress: string;
    amount?: Coin;
}
export interface EventBurnTFDenomSDKType {
    burner_address: string;
    amount?: CoinSDKType;
}
export interface EventChangeTFAdmin {
    denom: string;
    newAdminAddress: string;
}
export interface EventChangeTFAdminSDKType {
    denom: string;
    new_admin_address: string;
}
export interface EventSetTFDenomMetadata {
    denom: string;
    metadata?: Metadata;
}
export interface EventSetTFDenomMetadataSDKType {
    denom: string;
    metadata?: MetadataSDKType;
}
export declare const EventCreateTFDenom: {
    encode(message: EventCreateTFDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventCreateTFDenom;
    fromPartial(object: Partial<EventCreateTFDenom>): EventCreateTFDenom;
};
export declare const EventMintTFDenom: {
    encode(message: EventMintTFDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventMintTFDenom;
    fromPartial(object: Partial<EventMintTFDenom>): EventMintTFDenom;
};
export declare const EventBurnTFDenom: {
    encode(message: EventBurnTFDenom, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventBurnTFDenom;
    fromPartial(object: Partial<EventBurnTFDenom>): EventBurnTFDenom;
};
export declare const EventChangeTFAdmin: {
    encode(message: EventChangeTFAdmin, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventChangeTFAdmin;
    fromPartial(object: Partial<EventChangeTFAdmin>): EventChangeTFAdmin;
};
export declare const EventSetTFDenomMetadata: {
    encode(message: EventSetTFDenomMetadata, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): EventSetTFDenomMetadata;
    fromPartial(object: Partial<EventSetTFDenomMetadata>): EventSetTFDenomMetadata;
};
