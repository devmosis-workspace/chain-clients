import { PlacementRequirements, PlacementRequirementsSDKType } from "../../base/v1beta2/attribute";
import { Resource, ResourceSDKType } from "./resource";
import * as _m0 from "protobufjs/minimal";
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
export declare const GroupSpec: {
    encode(message: GroupSpec, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GroupSpec;
    fromPartial(object: Partial<GroupSpec>): GroupSpec;
};
