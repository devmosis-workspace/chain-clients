import { ResourceUnits, ResourceUnitsAmino, ResourceUnitsSDKType } from "../../base/v1beta2/resourceunits";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Resource stores unit, total count and price of resource */
export interface Resource {
    resources: ResourceUnits;
    count: number;
    price: DecCoin;
}
export interface ResourceProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.Resource";
    value: Uint8Array;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceAmino {
    resources?: ResourceUnitsAmino;
    count?: number;
    price?: DecCoinAmino;
}
export interface ResourceAminoMsg {
    type: "/akash.deployment.v1beta2.Resource";
    value: ResourceAmino;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
    resources: ResourceUnitsSDKType;
    count: number;
    price: DecCoinSDKType;
}
export declare const Resource: {
    typeUrl: string;
    encode(message: Resource, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Resource;
    fromPartial(object: Partial<Resource>): Resource;
    fromAmino(object: ResourceAmino): Resource;
    toAmino(message: Resource): ResourceAmino;
    fromAminoMsg(object: ResourceAminoMsg): Resource;
    fromProtoMsg(message: ResourceProtoMsg): Resource;
    toProto(message: Resource): Uint8Array;
    toProtoMsg(message: Resource): ResourceProtoMsg;
};
