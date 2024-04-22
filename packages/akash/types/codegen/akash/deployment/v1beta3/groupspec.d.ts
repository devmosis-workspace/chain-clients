import { PlacementRequirements, PlacementRequirementsAmino, PlacementRequirementsSDKType } from "../../base/v1beta3/attribute";
import { ResourceUnit, ResourceUnitAmino, ResourceUnitSDKType } from "./resourceunit";
import { BinaryWriter } from "../../../binary";
/** GroupSpec stores group specifications */
export interface GroupSpec {
    name: string;
    requirements: PlacementRequirements;
    resources: ResourceUnit[];
}
export interface GroupSpecProtoMsg {
    typeUrl: "/akash.deployment.v1beta3.GroupSpec";
    value: Uint8Array;
}
/** GroupSpec stores group specifications */
export interface GroupSpecAmino {
    name?: string;
    requirements?: PlacementRequirementsAmino;
    resources?: ResourceUnitAmino[];
}
export interface GroupSpecAminoMsg {
    type: "/akash.deployment.v1beta3.GroupSpec";
    value: GroupSpecAmino;
}
/** GroupSpec stores group specifications */
export interface GroupSpecSDKType {
    name: string;
    requirements: PlacementRequirementsSDKType;
    resources: ResourceUnitSDKType[];
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
