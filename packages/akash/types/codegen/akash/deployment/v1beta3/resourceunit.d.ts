import { Resources, ResourcesAmino, ResourcesSDKType } from "../../base/v1beta3/resources";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnit {
    resource: Resources;
    count: number;
    price: DecCoin;
}
export interface ResourceUnitProtoMsg {
    typeUrl: "/akash.deployment.v1beta3.ResourceUnit";
    value: Uint8Array;
}
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnitAmino {
    resource?: ResourcesAmino;
    count?: number;
    price?: DecCoinAmino;
}
export interface ResourceUnitAminoMsg {
    type: "/akash.deployment.v1beta3.ResourceUnit";
    value: ResourceUnitAmino;
}
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnitSDKType {
    resource: ResourcesSDKType;
    count: number;
    price: DecCoinSDKType;
}
export declare const ResourceUnit: {
    typeUrl: string;
    encode(message: ResourceUnit, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ResourceUnit;
    fromPartial(object: Partial<ResourceUnit>): ResourceUnit;
    fromAmino(object: ResourceUnitAmino): ResourceUnit;
    toAmino(message: ResourceUnit): ResourceUnitAmino;
    fromAminoMsg(object: ResourceUnitAminoMsg): ResourceUnit;
    fromProtoMsg(message: ResourceUnitProtoMsg): ResourceUnit;
    toProto(message: ResourceUnit): Uint8Array;
    toProtoMsg(message: ResourceUnit): ResourceUnitProtoMsg;
};
