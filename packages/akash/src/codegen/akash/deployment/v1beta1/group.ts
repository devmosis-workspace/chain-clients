import { PlacementRequirements, PlacementRequirementsSDKType } from "../../base/v1beta1/attribute";
import { ResourceUnits, ResourceUnitsSDKType } from "../../base/v1beta1/resource";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** State is an enum which refers to state of group */
export enum Group_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - GroupOpen denotes state for group open */
  open = 1,
  /** paused - GroupOrdered denotes state for group ordered */
  paused = 2,
  /** insufficient_funds - GroupInsufficientFunds denotes state for group insufficient_funds */
  insufficient_funds = 3,
  /** closed - GroupClosed denotes state for group closed */
  closed = 4,
  UNRECOGNIZED = -1,
}
export const Group_StateSDKType = Group_State;
export function group_StateFromJSON(object: any): Group_State {
  switch (object) {
    case 0:
    case "invalid":
      return Group_State.invalid;
    case 1:
    case "open":
      return Group_State.open;
    case 2:
    case "paused":
      return Group_State.paused;
    case 3:
    case "insufficient_funds":
      return Group_State.insufficient_funds;
    case 4:
    case "closed":
      return Group_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Group_State.UNRECOGNIZED;
  }
}
export function group_StateToJSON(object: Group_State): string {
  switch (object) {
    case Group_State.invalid:
      return "invalid";
    case Group_State.open:
      return "open";
    case Group_State.paused:
      return "paused";
    case Group_State.insufficient_funds:
      return "insufficient_funds";
    case Group_State.closed:
      return "closed";
    case Group_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
  id?: GroupID;
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupSDKType {
  id?: GroupIDSDKType;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseSDKType {}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
  id?: GroupID;
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupSDKType {
  id?: GroupIDSDKType;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseSDKType {}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
  id?: GroupID;
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupSDKType {
  id?: GroupIDSDKType;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseSDKType {}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
  owner: string;
  dseq: Long;
  gseq: number;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDSDKType {
  owner: string;
  dseq: Long;
  gseq: number;
}
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
/** Group stores group id, state and specifications of group */
export interface Group {
  groupId?: GroupID;
  state: Group_State;
  groupSpec?: GroupSpec;
  createdAt: Long;
}
/** Group stores group id, state and specifications of group */
export interface GroupSDKType {
  group_id?: GroupIDSDKType;
  state: Group_State;
  group_spec?: GroupSpecSDKType;
  created_at: Long;
}
/** Resource stores unit, total count and price of resource */
export interface Resource {
  resources?: ResourceUnits;
  count: number;
  price?: Coin;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
  resources?: ResourceUnitsSDKType;
  count: number;
  price?: CoinSDKType;
}
function createBaseMsgCloseGroup(): MsgCloseGroup {
  return {
    id: undefined
  };
}
export const MsgCloseGroup = {
  encode(message: MsgCloseGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCloseGroup {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },
  fromPartial(object: Partial<MsgCloseGroup>): MsgCloseGroup {
    const message = createBaseMsgCloseGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  }
};
function createBaseMsgCloseGroupResponse(): MsgCloseGroupResponse {
  return {};
}
export const MsgCloseGroupResponse = {
  encode(_: MsgCloseGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCloseGroupResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCloseGroupResponse>): MsgCloseGroupResponse {
    const message = createBaseMsgCloseGroupResponse();
    return message;
  }
};
function createBaseMsgPauseGroup(): MsgPauseGroup {
  return {
    id: undefined
  };
}
export const MsgPauseGroup = {
  encode(message: MsgPauseGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgPauseGroup {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },
  fromPartial(object: Partial<MsgPauseGroup>): MsgPauseGroup {
    const message = createBaseMsgPauseGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  }
};
function createBaseMsgPauseGroupResponse(): MsgPauseGroupResponse {
  return {};
}
export const MsgPauseGroupResponse = {
  encode(_: MsgPauseGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgPauseGroupResponse {
    return {};
  },
  fromPartial(_: Partial<MsgPauseGroupResponse>): MsgPauseGroupResponse {
    const message = createBaseMsgPauseGroupResponse();
    return message;
  }
};
function createBaseMsgStartGroup(): MsgStartGroup {
  return {
    id: undefined
  };
}
export const MsgStartGroup = {
  encode(message: MsgStartGroup, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      GroupID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgStartGroup {
    return {
      id: isSet(object.id) ? GroupID.fromJSON(object.id) : undefined
    };
  },
  fromPartial(object: Partial<MsgStartGroup>): MsgStartGroup {
    const message = createBaseMsgStartGroup();
    message.id = object.id !== undefined && object.id !== null ? GroupID.fromPartial(object.id) : undefined;
    return message;
  }
};
function createBaseMsgStartGroupResponse(): MsgStartGroupResponse {
  return {};
}
export const MsgStartGroupResponse = {
  encode(_: MsgStartGroupResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgStartGroupResponse {
    return {};
  },
  fromPartial(_: Partial<MsgStartGroupResponse>): MsgStartGroupResponse {
    const message = createBaseMsgStartGroupResponse();
    return message;
  }
};
function createBaseGroupID(): GroupID {
  return {
    owner: "",
    dseq: Long.UZERO,
    gseq: 0
  };
}
export const GroupID = {
  encode(message: GroupID, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (!message.dseq.isZero()) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    return writer;
  },
  fromJSON(object: any): GroupID {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      dseq: isSet(object.dseq) ? Long.fromValue(object.dseq) : Long.UZERO,
      gseq: isSet(object.gseq) ? Number(object.gseq) : 0
    };
  },
  fromPartial(object: Partial<GroupID>): GroupID {
    const message = createBaseGroupID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? Long.fromValue(object.dseq) : Long.UZERO;
    message.gseq = object.gseq ?? 0;
    return message;
  }
};
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
function createBaseGroup(): Group {
  return {
    groupId: undefined,
    state: 0,
    groupSpec: undefined,
    createdAt: Long.ZERO
  };
}
export const Group = {
  encode(message: Group, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.groupId !== undefined) {
      GroupID.encode(message.groupId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.groupSpec !== undefined) {
      GroupSpec.encode(message.groupSpec, writer.uint32(26).fork()).ldelim();
    }
    if (!message.createdAt.isZero()) {
      writer.uint32(32).int64(message.createdAt);
    }
    return writer;
  },
  fromJSON(object: any): Group {
    return {
      groupId: isSet(object.groupId) ? GroupID.fromJSON(object.groupId) : undefined,
      state: isSet(object.state) ? group_StateFromJSON(object.state) : 0,
      groupSpec: isSet(object.groupSpec) ? GroupSpec.fromJSON(object.groupSpec) : undefined,
      createdAt: isSet(object.createdAt) ? Long.fromValue(object.createdAt) : Long.ZERO
    };
  },
  fromPartial(object: Partial<Group>): Group {
    const message = createBaseGroup();
    message.groupId = object.groupId !== undefined && object.groupId !== null ? GroupID.fromPartial(object.groupId) : undefined;
    message.state = object.state ?? 0;
    message.groupSpec = object.groupSpec !== undefined && object.groupSpec !== null ? GroupSpec.fromPartial(object.groupSpec) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? Long.fromValue(object.createdAt) : Long.ZERO;
    return message;
  }
};
function createBaseResource(): Resource {
  return {
    resources: undefined,
    count: 0,
    price: undefined
  };
}
export const Resource = {
  encode(message: Resource, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.resources !== undefined) {
      ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      Coin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Resource {
    return {
      resources: isSet(object.resources) ? ResourceUnits.fromJSON(object.resources) : undefined,
      count: isSet(object.count) ? Number(object.count) : 0,
      price: isSet(object.price) ? Coin.fromJSON(object.price) : undefined
    };
  },
  fromPartial(object: Partial<Resource>): Resource {
    const message = createBaseResource();
    message.resources = object.resources !== undefined && object.resources !== null ? ResourceUnits.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    message.price = object.price !== undefined && object.price !== null ? Coin.fromPartial(object.price) : undefined;
    return message;
  }
};