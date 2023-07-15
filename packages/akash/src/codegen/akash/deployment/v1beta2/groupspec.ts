import { PlacementRequirements, PlacementRequirementsSDKType } from "../../base/v1beta2/attribute";
import { Resource, ResourceSDKType } from "./resource";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** GroupSpec stores group specifications */
export interface GroupSpec {
  name: string;
  requirements?: PlacementRequirements;
  resources: Resource[];
}
/** GroupSpec stores group specifications */
export interface GroupSpecSDKType {
  name: string;
  requirements?: PlacementRequirementsSDKType;
  resources: ResourceSDKType[];
}
function createBaseGroupSpec(): GroupSpec {
  return {
    name: "",
    requirements: undefined,
    resources: []
  };
}
export const GroupSpec = {
  encode(message: GroupSpec, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};