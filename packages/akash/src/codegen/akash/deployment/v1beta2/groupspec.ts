import { PlacementRequirements, PlacementRequirementsAmino, PlacementRequirementsSDKType } from "../../base/v1beta2/attribute";
import { Resource, ResourceAmino, ResourceSDKType } from "./resource";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
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
  name: string;
  requirements?: PlacementRequirementsAmino;
  resources: ResourceAmino[];
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
function createBaseGroupSpec(): GroupSpec {
  return {
    name: "",
    requirements: PlacementRequirements.fromPartial({}),
    resources: []
  };
}
export const GroupSpec = {
  typeUrl: "/akash.deployment.v1beta2.GroupSpec",
  encode(message: GroupSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.requirements !== undefined) {
      PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.resources) {
      Resource.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GroupSpec {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      requirements: isSet(object.requirements) ? PlacementRequirements.fromJSON(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GroupSpec>): GroupSpec {
    const message = createBaseGroupSpec();
    message.name = object.name ?? "";
    message.requirements = object.requirements !== undefined && object.requirements !== null ? PlacementRequirements.fromPartial(object.requirements) : undefined;
    message.resources = object.resources?.map(e => Resource.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GroupSpecAmino): GroupSpec {
    return {
      name: object.name,
      requirements: object?.requirements ? PlacementRequirements.fromAmino(object.requirements) : undefined,
      resources: Array.isArray(object?.resources) ? object.resources.map((e: any) => Resource.fromAmino(e)) : []
    };
  },
  toAmino(message: GroupSpec): GroupSpecAmino {
    const obj: any = {};
    obj.name = message.name;
    obj.requirements = message.requirements ? PlacementRequirements.toAmino(message.requirements) : undefined;
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? Resource.toAmino(e) : undefined);
    } else {
      obj.resources = [];
    }
    return obj;
  },
  fromAminoMsg(object: GroupSpecAminoMsg): GroupSpec {
    return GroupSpec.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupSpecProtoMsg): GroupSpec {
    return GroupSpec.decode(message.value);
  },
  toProto(message: GroupSpec): Uint8Array {
    return GroupSpec.encode(message).finish();
  },
  toProtoMsg(message: GroupSpec): GroupSpecProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.GroupSpec",
      value: GroupSpec.encode(message).finish()
    };
  }
};