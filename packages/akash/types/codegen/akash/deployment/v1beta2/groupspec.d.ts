import { PlacementRequirements, PlacementRequirementsAmino, PlacementRequirementsSDKType } from "../../base/v1beta2/attribute";
import { Resource, ResourceAmino, ResourceSDKType } from "./resource";
import { BinaryWriter } from "../../../binary";
/** GroupSpec stores group specifications */
export interface GroupSpec {
    name: string;
    requirements: PlacementRequirements;
    resources: Resource[];
}
export interface GroupSpecProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.GroupSpec";
    value: Uint8Array;
}
/** GroupSpec stores group specifications */
export interface GroupSpecAmino {
    name?: string;
    requirements?: PlacementRequirementsAmino;
    resources?: ResourceAmino[];
}
export interface GroupSpecAminoMsg {
    type: "/akash.deployment.v1beta2.GroupSpec";
    value: GroupSpecAmino;
}
/** GroupSpec stores group specifications */
export interface GroupSpecSDKType {
    name: string;
    requirements: PlacementRequirementsSDKType;
    resources: ResourceSDKType[];
}
export declare const GroupSpec: {
    typeUrl: string;
    encode(message: GroupSpec, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GroupSpec;
    fromPartial(object: Partial<GroupSpec>): GroupSpec;
    fromAmino(object: GroupSpecAmino): GroupSpec;
    toAmino(message: GroupSpec): GroupSpecAmino;
    fromAminoMsg(object: GroupSpecAminoMsg): GroupSpec;
    fromProtoMsg(message: GroupSpecProtoMsg): GroupSpec;
    toProto(message: GroupSpec): Uint8Array;
    toProtoMsg(message: GroupSpec): GroupSpecProtoMsg;
};
